const REVALIDATE_SECONDS = 21600;

async function readCount(url, options, selectCount) {
  try {
    const response = await fetch(url, {
      ...options,
      next: { revalidate: REVALIDATE_SECONDS },
      signal: AbortSignal.timeout(8000)
    });
    if (!response.ok) return null;
    const count = selectCount(await response.json());
    return typeof count === 'number' && Number.isSafeInteger(count) && count >= 0 ? count : null;
  } catch {
    return null;
  }
}

export async function getProjectMetrics() {
  const [sqlVisualizer, atlasLibrary] = await Promise.all([
    readCount('https://marketplace.visualstudio.com/_apis/public/gallery/extensionquery', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json;api-version=3.0-preview.1' },
      body: JSON.stringify({ filters: [{ criteria: [{ filterType: 7, value: 'RiuriDev.sql-visualizer' }] }], flags: 914 })
    }, data => data.results?.[0]?.extensions?.[0]?.statistics?.find(stat => stat.statisticName === 'install')?.value),
    readCount('https://hub.docker.com/v2/repositories/riuri/node_api/', {}, data => data.pull_count)
  ]);
  return { sqlVisualizer, atlasLibrary };
}

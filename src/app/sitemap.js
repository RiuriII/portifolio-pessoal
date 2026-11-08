const siteUrl = "https://riuridev.com";
const languages = {
  "pt-BR": `${siteUrl}/pt`,
  en: `${siteUrl}/en`
};

export default function sitemap() {
  return ["pt", "en"].map((lang) => ({
    url: `${siteUrl}/${lang}`,
    alternates: { languages }
  }));
}

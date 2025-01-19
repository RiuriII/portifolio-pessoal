import { ProjectCard } from "./project-card"

export default function ProjectsSection() {
  const projects = [
    {
      title: "Neural Network Visualizer",
      description: "Interactive 3D visualization of neural networks with real-time training data representation.",
      image: "/placeholder.svg?height=400&width=600",
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Quantum Computing Simulator",
      description: "A web-based quantum circuit designer and simulator supporting multiple qubits.",
      image: "/placeholder.svg?height=400&width=600",
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Blockchain Explorer",
      description: "Real-time blockchain data visualization and analysis platform with advanced filtering.",
      image: "/placeholder.svg?height=400&width=600",
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "AI-Powered Cybersecurity",
      description: "Advanced threat detection system using machine learning algorithms for real-time network protection.",
      image: "/placeholder.svg?height=400&width=600",
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Virtual Reality Data Analyzer",
      description: "Immersive VR environment for big data analysis and pattern recognition in complex datasets.",
      image: "/placeholder.svg?height=400&width=600",
      demoUrl: "#",
      githubUrl: "#",
    },
  ]

  return (
    <section className="relative min-h-screen w-full bg-purple-950 py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900 via-purple-950 to-black" />
      <div className="container relative mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tighter text-purple-100 sm:text-4xl">
            Featured Projects
          </h2>
          <p className="text-purple-300">
            Explore my latest works in artificial intelligence, blockchain, and virtual reality
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index + 1} />
          ))}
        </div>
      </div>
    </section>
  )
}


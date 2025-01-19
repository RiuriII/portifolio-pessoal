import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ExternalLink, Github } from 'lucide-react'

interface ProjectCardProps {
  title: string
  description: string
  image: string
  demoUrl: string
  githubUrl: string
  index: number
}

export function ProjectCard({ title, description, image, demoUrl, githubUrl, index }: ProjectCardProps) {
  return (
    <Card className="group relative overflow-hidden border-2 border-purple-800 bg-purple-950/40 backdrop-blur-sm transition-all hover:border-purple-600">
      <div className="absolute left-3 top-3 z-20 flex gap-1">
        <div className="h-2 w-2 rounded-full bg-purple-600" />
        <div className="h-2 w-2 rounded-full bg-purple-600" />
      </div>
      <div className="absolute right-3 top-3 z-20">
        <div className="text-xs text-purple-400">
          {String(index).padStart(2, '0')}/05
        </div>
      </div>
      <div className="relative aspect-[4/3] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-purple-950/80 to-purple-950/0 z-10" />
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="relative space-y-4 p-6">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-purple-600 to-transparent" />
        <h3 className="text-lg font-bold tracking-wider text-purple-100">{title}</h3>
        <p className="text-sm text-purple-300">{description}</p>
        <div className="flex gap-3">
          <Button
            variant="outline"
            className="flex-1 border-purple-700 bg-purple-950/50 text-purple-100 hover:bg-purple-800/80 hover:text-purple-50"
            asChild
          >
            <a href={demoUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Demo
            </a>
          </Button>
          <Button
            variant="outline"
            className="flex-1 border-purple-700 bg-purple-950/50 text-purple-100 hover:bg-purple-800/80 hover:text-purple-50"
            asChild
          >
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </a>
          </Button>
        </div>
      </div>
    </Card>
  )
}


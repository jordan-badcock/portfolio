import { featuredProjects, secondaryProjects } from '../data/projects'
import { FeaturedCard, SecondaryCard } from './ProjectCard'

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Featured */}
        <p className="font-mono text-cyan text-sm mb-3 tracking-widest uppercase">Projects</p>
        <h2 className="text-4xl font-bold text-text-primary mb-12">
          Featured work
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {featuredProjects.map((project) => (
            <FeaturedCard key={project.id} project={project} />
          ))}
        </div>

        {/* Secondary */}
        <div className="flex items-center gap-4 mb-8">
          <h3 className="text-xl font-semibold text-text-primary">More projects</h3>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {secondaryProjects.map((project) => (
            <SecondaryCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

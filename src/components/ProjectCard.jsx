function ExternalLinkIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

export function FeaturedCard({ project }) {
  return (
    <div className="group flex flex-col p-6 rounded-xl border border-border bg-surface card-hover h-full">
      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="flex items-center gap-2 flex-wrap">
          <span
            className={`text-xs px-2 py-0.5 rounded-full font-mono ${
              project.type === 'work'
                ? 'bg-cyan/10 text-cyan border border-cyan/20'
                : 'bg-purple/10 text-purple border border-purple/20'
            }`}
          >
            {project.type === 'work' ? 'Work' : 'School'}
          </span>
          {project.private && (
            <span className="text-xs px-2 py-0.5 rounded-full font-mono bg-surface-2 text-text-faint border border-border">
              Private
            </span>
          )}
        </div>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-faint hover:text-cyan transition-colors flex-shrink-0"
            aria-label="View on GitHub"
          >
            <GitHubIcon />
          </a>
        )}
      </div>

      {/* Title + description */}
      <h3 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-cyan transition-colors">
        {project.title}
      </h3>
      <p className="text-text-muted text-sm leading-relaxed flex-1 mb-6">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-mono px-2 py-0.5 rounded bg-surface-2 text-text-faint border border-border"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

export function SecondaryCard({ project }) {
  return (
    <div className="group flex flex-col p-5 rounded-xl border border-border bg-surface card-hover h-full">
      <div className="flex items-start justify-between gap-2 mb-3">
        <h3 className="text-sm font-semibold text-text-primary group-hover:text-cyan transition-colors leading-snug">
          {project.title}
        </h3>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-faint hover:text-cyan transition-colors flex-shrink-0 mt-0.5"
            aria-label="View on GitHub"
          >
            <ExternalLinkIcon />
          </a>
        )}
      </div>
      <p className="text-text-faint text-xs leading-relaxed flex-1 mb-4">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {project.tags.slice(0, 4).map((tag) => (
          <span
            key={tag}
            className="text-xs font-mono px-2 py-0.5 rounded bg-surface-2 text-text-faint border border-border"
          >
            {tag}
          </span>
        ))}
        {project.tags.length > 4 && (
          <span className="text-xs font-mono px-2 py-0.5 rounded text-text-faint">
            +{project.tags.length - 4}
          </span>
        )}
      </div>
    </div>
  )
}

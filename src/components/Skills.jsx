import { skillCategories } from '../data/skills'

const categoryAccents = {
  cloud: '#00d4ff',
  ai: '#7c3aed',
  languages: '#06b6d4',
  web: '#8b5cf6',
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-surface/30">
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-mono text-cyan text-sm mb-3 tracking-widest uppercase">Skills</p>
        <h2 className="text-4xl font-bold text-text-primary mb-12">
          Tools of the trade
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((cat) => (
            <div
              key={cat.id}
              className="p-6 rounded-xl border border-border bg-surface card-hover"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-1 h-5 rounded-full"
                  style={{ background: categoryAccents[cat.id] || '#00d4ff' }}
                />
                <h3 className="text-text-primary font-semibold">{cat.label}</h3>
              </div>

              {/* Skill chips */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs font-mono rounded-full border border-border text-text-muted bg-surface-2 hover:border-cyan/40 hover:text-cyan transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { education } from '../data/skills'

const stats = [
  { value: '3+', label: 'Years Professional Experience' },
  { value: '1+1', label: 'Degree & Diploma Earned' },
  { value: '10+', label: 'AWS Services in Production' },
  { value: '8+', label: 'Projects Shipped' },
]

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <p className="font-mono text-cyan text-sm mb-3 tracking-widest uppercase">About</p>
            <h2 className="text-4xl font-bold text-text-primary mb-6">
              Building where cloud<br />meets intelligence
            </h2>
            <div className="space-y-4 text-text-muted leading-relaxed">
              <p>
                I&apos;m a software developer with a focus on cloud infrastructure and applied AI.
                At NOCLand, I design and maintain production AWS serverless architectures —
                event-driven alert pipelines, cloud contact centres built on Amazon Connect,
                and infrastructure automation with Ansible and CDK.
              </p>
              <p>
                Outside of production work, I research AI and machine learning: federated
                learning for time-series data, LLM-integrated applications, computer vision,
                and NLP. I care about building systems that are both technically sound and
                actually useful.
              </p>
            </div>

            {/* Education */}
            <div className="mt-10 space-y-4">
              {education.map((edu) => (
                <div
                  key={edu.id}
                  className="flex items-start gap-4 p-4 rounded-lg border border-border bg-surface"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex-shrink-0 flex items-center justify-center text-white text-xs font-bold"
                    style={{ background: 'linear-gradient(135deg, #00d4ff, #7c3aed)' }}
                  >
                    {edu.year.slice(-2)}
                  </div>
                  <div>
                    <p className="text-text-primary font-medium text-sm">{edu.degree}</p>
                    <p className="text-text-faint text-xs mt-0.5">
                      {edu.institution} · {edu.focus} · {edu.year}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — stats */}
          <div className="grid grid-cols-2 gap-4 lg:pt-10">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="p-6 rounded-xl border border-border bg-surface hover:border-border-hover transition-colors"
              >
                <p className="text-4xl font-bold gradient-text mb-2">{stat.value}</p>
                <p className="text-text-muted text-sm leading-snug">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

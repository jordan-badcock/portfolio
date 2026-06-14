const code = `// Lambda handler — email ingest pipeline
export const handler = async (
  event: SESEvent
): Promise<void> => {
  const emails = event.Records
    .map(r => r.ses.mail)

  await Promise.all(emails.map(async mail => {
    await eventBridge.putEvents({
      Entries: [{
        Source: 'app.email-ingest',
        DetailType: 'AlertReceived',
        Detail: JSON.stringify(
          normalise(mail)
        ),
      }],
    }).promise()
  }))
}`

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        <div className="absolute top-1/4 -left-48 w-[500px] h-[500px] rounded-full blur-3xl animate-glow-pulse"
          style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.12), transparent 70%)' }} />
        <div className="absolute bottom-1/4 -right-48 w-[500px] h-[500px] rounded-full blur-3xl animate-glow-pulse"
          style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.12), transparent 70%)', animationDelay: '1.5s' }} />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-16 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div>
          <p className="font-mono text-cyan text-sm mb-4 tracking-widest uppercase">
            Hi, I&apos;m
          </p>
          <h1 className="text-6xl lg:text-7xl font-bold leading-none mb-4 gradient-text">
            Jordan<br />Badcock
          </h1>
          <p className="text-2xl text-text-muted font-medium mb-6">
            Cloud &amp; AI Engineer
          </p>
          <p className="text-text-muted leading-relaxed mb-10 max-w-md">
            I build intelligent, cloud-native systems — from production AWS event pipelines
            to local LLM voice interfaces. Currently a Software Developer for NOCLand.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a
              href="#projects"
              className="px-6 py-3 text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
              style={{ background: 'linear-gradient(135deg, #00d4ff, #7c3aed)' }}
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-border-hover text-text-primary font-medium rounded-lg hover:border-cyan/50 hover:text-cyan transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Right — code terminal */}
        <div className="hidden lg:block">
          <div className="rounded-xl border border-border overflow-hidden bg-surface shadow-2xl">
            {/* Title bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-surface-2">
              <span className="w-3 h-3 rounded-full bg-red-500/60" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <span className="w-3 h-3 rounded-full bg-green-500/60" />
              <span className="ml-3 text-xs font-mono text-text-faint">handler.ts</span>
            </div>
            {/* Code */}
            <pre className="p-6 text-xs font-mono text-text-muted leading-relaxed overflow-x-auto">
              <code
                dangerouslySetInnerHTML={{
                  __html: code
                    .replace(/\/\/.*/g, (m) => `<span style="color:#64748b">${m}</span>`)
                    .replace(/\b(export|const|async|await|return)\b/g, '<span style="color:#7c3aed">$1</span>')
                    .replace(/\b(handler|normalise|putEvents|map)\b/g, '<span style="color:#00d4ff">$1</span>')
                    .replace(/'[^']*'/g, (m) => `<span style="color:#86efac">${m}</span>`),
                }}
              />
            </pre>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-faint">
        <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-text-faint to-transparent" />
      </div>
    </section>
  )
}

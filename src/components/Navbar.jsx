import { useState, useEffect } from 'react'

const links = ['About', 'Skills', 'Projects']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-bg/90 backdrop-blur-md border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-mono font-medium gradient-text text-lg tracking-tight">
          jordan.badcock
        </a>

        <div className="flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="hidden md:block text-sm text-text-muted hover:text-text-primary transition-colors"
            >
              {link}
            </a>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-text-muted hover:text-text-primary transition-colors"
          >
            Resume
          </a>
          <a
            href="#contact"
            className="px-4 py-2 text-sm font-medium rounded-lg text-white transition-opacity hover:opacity-80"
            style={{ background: 'linear-gradient(135deg, #00d4ff, #7c3aed)' }}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  )
}

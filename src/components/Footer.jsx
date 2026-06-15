export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col gap-3">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-text-faint text-sm">
          <span className="font-mono gradient-text font-medium">jordan.badcock</span>
          <span>© {new Date().getFullYear()} Jordan Badcock. Built with React &amp; Tailwind.</span>
        </div>
        <div className="text-center text-text-faint text-xs">
          Deployed on AWS S3 + CloudFront via a GitHub Actions CI/CD pipeline.{' '}
          <a
            href="https://github.com/jordan-badcock/portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-cyan transition-colors underline underline-offset-2"
          >
            View source
          </a>
        </div>
      </div>
    </footer>
  )
}

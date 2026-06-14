export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-text-faint text-sm">
        <span className="font-mono gradient-text font-medium">jordan.badcock</span>
        <span>© {new Date().getFullYear()} Jordan Badcock. Built with React &amp; Tailwind.</span>
      </div>
    </footer>
  )
}

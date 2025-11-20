import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'
import Content from './components/Content'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* subtle grid pattern */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.08),transparent_50%)]" />

      <Navbar />
      <Hero />
      <Content />
      <Features />
      <CTA />

      <footer className="relative mt-10 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-blue-200/70 text-sm">
          <p>© {new Date().getFullYear()} Pravo.si. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a className="hover:text-white" href="#">Privacy</a>
            <a className="hover:text-white" href="#">Terms</a>
            <a className="hover:text-white" href="https://www.pravo.si" target="_blank" rel="noreferrer">www.pravo.si</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

import React from 'react'
import { Menu, Scale, Sparkles } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="relative z-20">
      <nav className="mx-auto max-w-7xl px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-purple-500 via-blue-500 to-amber-400 shadow-lg shadow-purple-500/20 flex items-center justify-center">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <div className="">
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-bold text-white tracking-tight">Pravo.si</span>
              <Scale className="h-4 w-4 text-blue-300/70" />
            </div>
            <p className="text-xs text-blue-200/70 -mt-0.5">AI for legal professionals</p>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-blue-100/80 hover:text-white transition">Features</a>
          <a href="#data" className="text-sm text-blue-100/80 hover:text-white transition">Data</a>
          <a href="#pricing" className="text-sm text-blue-100/80 hover:text-white transition">Pricing</a>
          <a href="#faq" className="text-sm text-blue-100/80 hover:text-white transition">FAQ</a>
        </div>

        <div className="flex items-center gap-3">
          <a href="https://www.pravo.si" target="_blank" rel="noreferrer" className="hidden sm:inline-flex text-sm px-4 py-2 rounded-lg border border-white/10 text-blue-100 hover:text-white hover:border-white/20 transition">Visit Website</a>
          <button className="inline-flex items-center text-sm px-4 py-2 rounded-lg bg-white text-slate-900 font-medium hover:opacity-90 transition">Get Early Access</button>
          <button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-blue-100">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </nav>
    </header>
  )
}

import React from 'react'

export default function CTA() {
  return (
    <section id="pricing" className="relative py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-10">
          <h3 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">Ready to bring AI to your legal workflow?</h3>
          <p className="text-blue-100/80 mt-3">Join the waitlist for Pravo.si and get early access to curated datasets and our research copilot.</p>
          <form className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <input type="email" placeholder="Work email" className="w-full sm:w-80 rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-white/30" />
            <button type="submit" className="inline-flex items-center justify-center rounded-lg bg-white text-slate-900 px-5 py-3 font-medium shadow-sm hover:opacity-90 transition">Join waitlist</button>
          </form>
          <p className="mt-3 text-xs text-blue-200/70">We’ll only use your email to share access and updates.</p>
        </div>
      </div>
    </section>
  )
}

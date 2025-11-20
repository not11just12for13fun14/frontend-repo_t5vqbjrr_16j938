import React from 'react'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 md:pt-28">
      {/* Background gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 right-1/2 h-[700px] w-[700px] rounded-full bg-purple-500/20 blur-3xl" />
        <div className="absolute top-40 -left-40 h-[600px] w-[600px] rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-amber-400/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-blue-100/80 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Live AI on curated legal data
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
            Trusted legal intelligence,
            <br /> powered by AI
          </h1>
          <p className="mt-5 text-lg md:text-xl text-blue-100/80 max-w-xl md:leading-8">
            Pravo.si delivers structured case law, legislation, and regulatory insights with an AI copilot built for legal professionals.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:items-center">
            <button className="inline-flex items-center justify-center rounded-lg bg-white text-slate-900 px-5 py-3 font-medium shadow-sm hover:opacity-90 transition">Start free trial</button>
            <button className="inline-flex items-center justify-center rounded-lg border border-white/15 text-white/90 px-5 py-3 font-medium hover:border-white/30 transition">Request a demo</button>
          </div>
          <p className="mt-4 text-xs text-blue-200/70">No credit card required • GDPR-friendly • Hosted in EU</p>
        </div>

        <div className="relative h-[420px] md:h-[520px] rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
          <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>
    </section>
  )
}

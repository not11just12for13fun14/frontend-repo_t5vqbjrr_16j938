import React from 'react'
import { Database, ShieldCheck, Sparkles, Landmark, FileText, Search } from 'lucide-react'

const features = [
  {
    title: 'Curated legal corpus',
    desc: 'Continuously updated case law, legislation, directives, and commentary.',
    icon: <Landmark className="h-5 w-5" />,
  },
  {
    title: 'AI research copilot',
    desc: 'Ask complex questions and get citations, summaries, and argument maps.',
    icon: <Sparkles className="h-5 w-5" />,
  },
  {
    title: 'Enterprise-grade security',
    desc: 'Role-based access, SSO, audit logs, and private data isolation.',
    icon: <ShieldCheck className="h-5 w-5" />,
  },
  {
    title: 'Advanced search',
    desc: 'Semantic and keyword search with filters across jurisdictions and years.',
    icon: <Search className="h-5 w-5" />,
  },
  {
    title: 'Structured documents',
    desc: 'Normalized metadata with sections, holdings, outcomes, and citations.',
    icon: <FileText className="h-5 w-5" />,
  },
  {
    title: 'APIs & integrations',
    desc: 'Connect to your DMS, CRM, and internal knowledge base securely.',
    icon: <Database className="h-5 w-5" />,
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">Built for legal professionals</h2>
          <p className="text-blue-100/80 mt-3">Everything you need to research faster and make better decisions.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition group">
              <div className="flex items-center gap-3 text-white">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-purple-500 via-blue-500 to-amber-400 flex items-center justify-center text-white/90">
                  {f.icon}
                </div>
                <h3 className="font-semibold">{f.title}</h3>
              </div>
              <p className="text-blue-100/80 mt-3 text-sm leading-6">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

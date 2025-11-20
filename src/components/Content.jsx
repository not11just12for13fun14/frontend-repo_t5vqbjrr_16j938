import React from 'react'

function Content() {
  return (
    <section className="relative text-slate-100">
      {/* Banner */}
      <div className="pt-20 pb-16 bg-gradient-to-b from-slate-900/60 to-slate-950" id="banner">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
                Zanesljivo. Ažurno.
                <br />
                <span className="text-sky-400">Enostavno.</span>
              </h2>
              <p className="mt-6 text-slate-300 text-lg leading-relaxed">
                Pravo.si ponuja osnovne pravne informacije, ki jih potrebujete za uspešno delo. Enostavno iščite po najkvalitetnejši zbirki čistopisov zakonov in predpisov s povezano sodno prakso. Za lažji pregled smo dodali še povzetke umetne inteligence.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#features" className="inline-flex items-center rounded-md bg-sky-500 px-5 py-3 text-sm font-semibold text-white hover:bg-sky-400 transition">Vsebine portala</a>
                <a href="http://app.pravo.si/registracija" target="_blank" rel="noreferrer" className="inline-flex items-center rounded-md bg-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-white/20 transition">Preizkusi brezplačno</a>
              </div>
            </div>
            <div className="lg:pl-8">
              {/* Placeholder visual instead of missing assets/img/illustration/2.png */}
              <div className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-sky-600/30 via-fuchsia-600/20 to-amber-500/20 ring-1 ring-white/10 shadow-xl flex items-center justify-center">
                <div className="text-slate-200/70 text-sm">Predogled ilustracije</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overview */}
      <div id="overview" className="py-16">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="text-sky-400 font-semibold">Zakaj je Pravo.si prava izbira</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold">Vaš zanesljiv partner pri pravnem raziskovanju</h2>
          <p className="mt-4 text-slate-300">
            Fuzija najkvalitetnejših pravnih vsebin, klasičnih funkcionalnosti ter umetne inteligence, po nepremagljivi ceni.
          </p>
        </div>
        <div className="mx-auto max-w-6xl px-6 mt-10">
          <div className="w-full rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl">
            {/* Placeholder for portal screenshot (assets/img/portal_novo.png) */}
            <div className="aspect-[46/23] w-full bg-gradient-to-br from-slate-800 to-slate-900 grid place-items-center">
              <span className="text-slate-400">Predogled zaslona portala</span>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div id="features" className="relative py-16">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Uporabnost v praksi</h2>
          <p className="mt-3 text-slate-300">
            Portal Pravo.si združuje čistopise zakonov z uporabnimi funkcionalnostmi za hiter pregled in optimizirano delo.
          </p>
        </div>
        <div className="mx-auto max-w-7xl px-6 mt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card */}
            <FeatureCard title="Ažurni čistopisi" desc="Dostopajte do dnevno posodobljenih ter strokovno preverjenih čistopisov vseh zakonov in predpisov" />
            <FeatureCard title="Sodna praksa" desc="Imejte pri roki celotno sodno prakso, skupaj z relevantnimi členi zakonov in sorodnimi odločbami" />
            <FeatureCard title="Umetna inteligenca" desc="Vgrajena umetna inteligenca omogoča analizo relevantnih dokumentov ali odgovarja na vaša pravna vprašanja" />
            <FeatureCard title="Časovna lestvica" desc="Primerjajte veljavne čistopise s prejšnjimi in poiščite tiste, ki so bile veljavne na določen datum (tudi pred letom 1990)" />
            <FeatureCard title="Zakonodajno obveščanje" desc="Dodajte dokument med priljubljene in samodejno boste obveščeni o vseh prihodnjih spremembah zakonodaje" />
            <FeatureCard title="Povezanost vsebin" desc="Vsebine portala so medsebojno povezane na način, kot ste ga že vajeni, ter dopolnjene z umetno inteligenco" />
            <FeatureCard title="Preverjena kakovost" desc={"Kvaliteto in ažurnost vsebine zagotavlja skupina izkušenih pravnih strokovnjakov portala\nIUS-INFO"} />
          </div>
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ title, desc }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm hover:bg-white/10 transition">
      <div className="h-12 w-12 rounded-xl bg-sky-500/20 ring-1 ring-sky-500/30 grid place-items-center mb-4">
        <div className="h-6 w-6 rounded bg-sky-400/80" />
      </div>
      <h4 className="text-lg font-semibold">{title}</h4>
      <p className="mt-2 text-slate-300 text-sm whitespace-pre-line">{desc}</p>
    </div>
  )
}

export default Content

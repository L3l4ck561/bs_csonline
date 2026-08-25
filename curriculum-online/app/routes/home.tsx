import { Link } from "react-router";

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero */}
      <section className="pt-8 text-center sm:pt-16">
        <div className="mx-auto mb-6 h-28 w-28 overflow-hidden rounded-full border-2 border-emerald-500/30 bg-zinc-800">
          {/* Coloque sua foto aqui depois */}
          <div className="flex h-full w-full items-center justify-center text-4xl font-bold text-zinc-600">
            SN
          </div>
        </div>

        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Olá, eu sou <span className="text-emerald-400">Carlos</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-400">
          💻 Full Stack Developer | QA & Test Automation | Custom Software Development
          <br /> <span className="text-emerald-400">apaixonado por criar experiências digitais modernas e performáticas.</span>
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            to="/curriculum"
            className="rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-emerald-400"
          >
            Ver Curriculum
          </Link>
          <Link
            to="/portfolio"
            className="rounded-full border border-zinc-700 px-6 py-3 text-sm font-semibold text-white transition hover:border-zinc-500 hover:bg-zinc-800"
          >
            Meus Projetos
          </Link>
        </div>
      </section>

      {/* Cards de destaque */}
      <section className="grid gap-6 sm:grid-cols-3">
        {[
          {
            title: "Curriculum",
            desc: "Experiência, skills e formação",
            to: "/curriculum",
            icon: "📄",
          },
          {
            title: "Portfolio",
            desc: "Projetos que desenvolvi",
            to: "/portfolio",
            icon: "💼",
          },
          {
            title: "Paty",
            desc: "Posts e reflexões",
            to: "/paty",
            icon: "✍️",
          },
        ].map((card) => (
          <Link
            key={card.to}
            to={card.to}
            className="group rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 transition hover:border-emerald-500/40 hover:bg-zinc-900"
          >
            <div className="mb-3 text-3xl">{card.icon}</div>
            <h3 className="text-lg font-semibold text-white group-hover:text-emerald-400">
              {card.title}
            </h3>
            <p className="mt-1 text-sm text-zinc-400">{card.desc}</p>
          </Link>
        ))}
      </section>
    </div>
  );
}
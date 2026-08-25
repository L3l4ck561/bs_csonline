const projects = [
  {
    icon: "📦",
    title: "LostFound",
    description: "Sistema de Gestão de Itens Perdidos.",
    tags: ["Python", "JavaScript", "HTML/CSS", "MySQL"],
    link: "https://github.com/L3l4ck561/LostFound",
  },
  {
    icon: "💻",
    title: "SENAI+",
    description: "Sistema Web para Gerenciamento de Entrada e Saída de Alunos.",
    tags: ["Python", "JavaScript", "HTML/CSS", "MySQL", "Auditório & Logs"],
    link: "https://github.com/SergioPelais/SENAI-",
  }
];

export default function Portfolio() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold text-white sm:text-4xl">Portfolio</h1>
        <p className="mt-2 text-zinc-400">Alguns projetos que desenvolvi.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 transition hover:border-emerald-500/40 hover:bg-zinc-900"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-2xl">
              {project.icon}
            </div>
            <h3 className="text-lg font-semibold text-white group-hover:text-emerald-400">
              {project.title}
            </h3>
            <p className="mt-2 flex-1 text-sm text-zinc-400">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-zinc-800 px-2 py-1 text-xs text-zinc-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
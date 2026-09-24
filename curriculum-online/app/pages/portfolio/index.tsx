import { projects } from "~/database/projects";

function getGroupKey(tags) {
  return [...tags].sort().join(" | ");
}

function getGroupTitle(tags) {
  if (tags.length === 0) return "Sem tecnologia";
  if (tags.length === 1) return `Projetos ${tags[0]}`;
  return `Projetos ${tags.join(" • ")}`;
}

export default function Portfolio() {
  // Agrupa por combinação de tags
  const groupsMap = projects.reduce((acc, project) => {
    const key = getGroupKey(project.tags);
    if (!acc[key]) {
      acc[key] = {
        tags: project.tags,
        projects: [],
      };
    }
    acc[key].projects.push(project);
    return acc;
  }, {});

  const groups = Object.values(groupsMap);

  // Separa grupos com vários projetos e os únicos
  const multiGroups = groups.filter((g) => g.projects.length >= 2);
  const singleProjects = groups
    .filter((g) => g.projects.length === 1)
    .flatMap((g) => g.projects);

  return (
    <div className="space-y-12">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white sm:text-4xl">Portfolio</h1>
        <p className="mt-2 text-zinc-400">Alguns projetos que desenvolvi.</p>
      </div>

      {/* Seções de grupos com 2+ projetos */}
      {multiGroups.map((group) => (
        <section key={getGroupKey(group.tags)} className="space-y-6">
          <h2 className="text-xl font-semibold text-emerald-400">
            {getGroupTitle(group.tags)}
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {group.projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>
      ))}

      {/* Seção de projetos únicos */}
      {singleProjects.length > 0 && (
        <section className="space-y-6">
          <h2 className="text-xl font-semibold text-emerald-400">
            Outros Projetos
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {singleProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 transition hover:border-emerald-500/40 hover:bg-zinc-900"
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-2xl">
        {project.icon || "📁"}
      </div>

      <h3 className="text-lg font-semibold text-white group-hover:text-emerald-400">
        {project.title}
      </h3>

      {project.description && (
        <p className="mt-2 flex-1 text-sm text-zinc-400">
          {project.description}
        </p>
      )}

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
  );
}
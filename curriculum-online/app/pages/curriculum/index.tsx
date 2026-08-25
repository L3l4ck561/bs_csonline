import { useState } from "react";
import CurriculumNav from "~/components/CurriculumNav";
import CurriculumPDF from "~/components/CurriculumPDF.client";

// ==================== TIPOS ====================
type LinkItem = { label: string; url: string };

type Experience = {
  role: string;
  company: string;
  period: string;
  description: string;
  link?: LinkItem[];
};

type Academic = {
  title: string;
  status: string;
  institution: string;
  period: string;
  description?: string;
  link?: LinkItem[];
};

type Course = {
  title: string;
  status: string;
  institution: string;
  period: string;
  hours?: string;
  link?: LinkItem[];
};

type Ead = {
  title: string;
  institution: string;
  period: string;
  description?: string;
  link?: LinkItem[];
};

type Ic = {
  title: string;
  period: string;
  advisor: string;
  description: string;
  link?: LinkItem[];
};

type Presentation = {
  title: string;
  event: string;
  date: string;
  type: string;
  link?: LinkItem[];
};

type Skill = {
  name: string;
  category: string;
};

type Participation = {
  img: string;
  title: string;
  event?: string;
  period: string;
  description?: string;
  link?: LinkItem[];
};

// ==================== COMPONENTE DE TOOLTIP DE LINKS ====================
function LinksTooltip({ links }: { links?: LinkItem[] }) {
  if (!links || links.length === 0) return null;

  // Filtra links que realmente têm url
  const validLinks = links.filter((l) => l.url && l.url.trim() !== "");

  if (validLinks.length === 0) return null;

  return (
    <div className="group/tooltip relative ml-2 inline-flex">
      <button
        type="button"
        className="flex h-5 w-5 items-center justify-center rounded-full border border-zinc-600 text-xs text-zinc-400 transition hover:border-emerald-500 hover:text-emerald-400"
        aria-label="Ver links"
      >
        🔗
      </button>

      {/* Tooltip */}
      <div className="pointer-events-none absolute bottom-full left-1/2 z-50 w-max -translate-x-1/2 opacity-0 transition-all duration-200 group-hover/tooltip:pointer-events-auto group-hover/tooltip:opacity-100">
        <div className="rounded-xl border border-zinc-700 bg-zinc-900 px-3 py-2 shadow-xl shadow-black/40">
          <div className="flex flex-col gap-1.5">
            {validLinks.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="whitespace-nowrap rounded-md px-2 py-1 text-sm text-zinc-300 transition hover:bg-emerald-500/10 hover:text-emerald-400"
              >
                {link.label || "Abrir link"}
              </a>
            ))}
          </div>
          {/* setinha */}
          <div className="absolute left-1/2 top-full -translate-x-1/2 border-4 border-transparent border-t-zinc-700" />
        </div>
      </div>
    </div>
  );
}

// ==================== ACCORDION ====================
function AccordionGroup({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-5 py-4 text-left transition hover:bg-zinc-800/50"
      >
        <h4 className="font-semibold text-white">{title}</h4>
        <span
          className={`text-emerald-400 transition-transform duration-200 ${open ? "rotate-180" : ""
            }`}
        >
          ▼
        </span>
      </button>

      {open && (
        <div className="border-t border-zinc-800 px-5 pb-4 pt-3 space-y-3">
          {children}
        </div>
      )}
    </div>
  );
}

// ==================== HELPER: AGRUPA POR TITLE ====================
function groupByTitle<T extends { title: string }>(items: T[]) {
  const map = new Map<string, T[]>();

  items.forEach((item) => {
    const key = item.title.trim();
    if (!map.has(key)) map.set(key, []);
    map.get(key)!.push(item);
  });

  return Array.from(map.entries());
}

// ==================== PÁGINA ====================
export default function Curriculum() {
  const experiences: Experience[] = [
    {
      role: "Freelancer",
      company: "Packlor Services",
      period: "2026 — Presente",
      description: "Desenvolvimento de aplicações web com React, Node.js e TypeScript.",
      link: [{ label: "Acesse a Packlor", url: "https://services.packlor.com/" }],
    },
    {
      role: "Desenvolvedor Full Stack",
      company: "Grupo consciência - CNS",
      period: "2026",
      description: "Atuação em projetos internos corporativos com Delphi Pascal",
      link: [{ label: "Certificado", url: "./docs/CNS1.pdf" }],
    },
    {
      role: "Desenvolvedor Full Stack",
      company: "Saga SENAI de Inovação",
      period: "2024 — 2025",
      description:
        "Atuação acadêmica no desenvolvimento de um projeto de inovação, aplicando conhecimentos teóricos e práticos",
      link: [{ label: "Projeto LostFound", url: "https://github.com/L3l4ck561/LostFound" }],
    },
    {
      role: "Desenvolvedor e Autor",
      company: "BirdGameJer",
      period: "2025",
      description: "Desenvolvimento de jogo 2D para navegador utilizando Construct 2",
      link: [{ label: "Jogo BirdGame", url: "https://birdgamejam.itch.io/a-toca-da-coruja" }],
    },
    {
      role: "Aprendiz",
      company: "Tec Glass",
      period: "2025",
      description: "Participação em curso técnico ",
      link: [{ label: "Certificado", url: "./docs/tec.png" }],
    },
  ];

  const skills: Skill[] = [
    // Frontend
    { name: "React", category: "Frontend" },
    { name: "TypeScript", category: "Frontend" },
    { name: "JavaScript", category: "Frontend" },
    { name: "HTML", category: "Frontend" },
    { name: "CSS", category: "Frontend" },
    { name: "Tailwind CSS", category: "Frontend" },
    { name: "Bootstrap", category: "Frontend" },
    { name: "Material-UI", category: "Frontend" },
    { name: "Next.js", category: "Frontend" },
    { name: "Vite", category: "Frontend" },
    { name: "Expo", category: "Frontend" },
    { name: "React Router", category: "Frontend" },

    // Backend
    { name: "Node.js", category: "Backend" },
    { name: "Express.js", category: "Backend" },
    { name: "Python", category: "Backend" },
    { name: "Django", category: "Backend" },
    { name: "Flask", category: "Backend" },
    { name: "FastAPI", category: "Backend" },
    { name: "REST APIs", category: "Backend" },
    { name: "Axios", category: "Backend" },

    // Banco de Dados
    { name: "PostgreSQL", category: "Banco de Dados" },
    { name: "MySQL", category: "Banco de Dados" },
    { name: "MariaDB", category: "Banco de Dados" },
    { name: "SQLite", category: "Banco de Dados" },
    { name: "MongoDB", category: "Banco de Dados" },
    { name: "Supabase", category: "Banco de Dados" },

    // DevOps & Cloud
    { name: "Git", category: "DevOps & Cloud" },
    { name: "Docker", category: "DevOps & Cloud" },
    { name: "CI/CD", category: "DevOps & Cloud" },
    { name: "Cloudflare", category: "DevOps & Cloud" },
    { name: "Vercel", category: "DevOps & Cloud" },
    { name: "Render", category: "DevOps & Cloud" },

    // Testes
    { name: "Jest", category: "Testes" },
    { name: "Cypress", category: "Testes" },

    // Data & Automação
    { name: "Pandas", category: "Data & Automação" },
    { name: "NumPy", category: "Data & Automação" },
    { name: "Selenium", category: "Data & Automação" },
    { name: "PyAutoGUI", category: "Data & Automação" },
    { name: "Tkinter", category: "Data & Automação" },

    // Ferramentas
    { name: "Figma", category: "Ferramentas" },
    { name: "Postman", category: "Ferramentas" },
    { name: "Axios", category: "Ferramentas" },
    { name: "Trello", category: "Ferramentas" },
    { name: "Arduino / ESP32", category: "Ferramentas" },
    { name: "Scrum & Kanban", category: "Ferramentas" },
  ];

  const academic: Academic[] = [
    {
      title: "Curso Tecnólogo - Análise e Desenvolvimento de Sistemas",
      status: "Em andamento",
      institution: "Uninter EAD",
      period: "2026 — Presente",
      description: "",
      link: [{ label: "", url: "" }],
    },
    {
      title: "Curso Técnico - Análise e Desenvolvimento de Sistemas",
      status: "Concluído",
      institution: "SENAI - Botucatu",
      period: "2024 — 2025",
      description: "",
      link: [{ label: "Premiação", url: "./docs/premioSenai.pdf" }],
    },
    {
      title: "Ensino Médio",
      status: "Concluído",
      institution: "SESI - Botucatu",
      period: "2025",
      description: "",
      link: [{ label: "Certificado", url: "./docs/historicoescolar.pdf" }],
    },
  ];

  const course: Course[] = [
    {
      title: "Machine Learning Aplicada à Indústria",
      institution: "SENAI - Botucatu",
      period: "2026",
      hours: "60h",
      status: "Em andamento",
      link: [{ label: "", url: "" }],
    },
    {
      title: "Jornada Python",
      institution: "Hashtag",
      period: "2026",
      hours: "4h",
      status: "Concluído",
      link: [{ label: "Certificado", url: "./docs/Validação_Certificado_jornada_python.pdf" }],
    },
    {
      title: "Treinamento Inicial em Proteção Radiológica - Medicina Nuclear",
      institution: "HCFMB",
      period: "2026",
      hours: "2h",
      status: "Concluído",
      link: [{ label: "Certificado", url: "./docs/TREINAMENTO_INICIAL_EM_PROTECAO_RADIOLOGICA-MEDICINA_NUCLEAR-EAD-2026.pdf" }],
    },
    {
      title: "Startup Day",
      institution: "SEBRAE-SP",
      period: "2026",
      hours: "4h",
      status: "Concluído",
      link: [{ label: "Participação", url: "./docs/startupday.pdf" }, { label: "Certificado", url: "./docs/startupdayC.pdf" }],
    },
    {
      title: "Inteligência Artificial: conceitos e práticas",
      institution: "SENAC - Botucatu",
      period: "2026",
      hours: "20h",
      status: "Concluído",
      link: [{ label: "Certificado", url: "./docs/iasenac.pdf" }],
    },
    {
      title: "Excel Intermediário",
      institution: "Fundação Bradesco - Escola Virtual",
      period: "2021",
      hours: "40h",
      status: "Concluído",
      link: [{ label: "Certificado", url: "./docs/excel.pdf" }],
    },
  ];

  const ead: Ead[] = [
    {
      title: "ead.sp.senai.br",
      institution: "Competência Transversal: Segurança no Trabalho",
      period: "2024",
      description: "",
      link: [{ label: "Certificado", url: "./docs/certificado segurança no trabalho.pdf" }],
    },
    {
      title: "ead.sp.senai.br",
      institution: "Economia Circular",
      period: "2024",
      description: "",
      link: [{ label: "Certificado", url: "./docs/Economia_Circular.pdf" }],
    },
    {
      title: "ead.sp.senai.br",
      institution: "Desvendando o 5G",
      period: "2024",
      description: "",
      link: [{ label: "Certificado", url: "./docs/Desvendando_o_5G.pdf" }],
    },
    {
      title: "ead.sp.senai.br",
      institution: "Privacidade e Proteção de Dados (LGPD)",
      period: "2024",
      description: "",
      link: [{ label: "Certificado", url: "./docs/Privacidade_e_Proteção_de_Dados_(LGPD).pdf" }],
    },
    {
      title: "ead.sp.senai.br",
      institution: "Desvendando a Indústria 4.0",
      period: "2025",
      description: "",
      link: [{ label: "Certificado", url: "./docs/Desvendando_a_Indústria_4.0.pdf" }],
    },
    {
      title: "ead.sp.senai.br",
      institution: "Empreender SENAI",
      period: "2025",
      description: "",
      link: [{ label: "Certificado", url: "./docs/Empreender_SENAI.pdf" }],
    },
    {
      title: "ead.sp.senai.br",
      institution: "WEB 3.0",
      period: "2025",
      description: "",
      link: [{ label: "Certificado", url: "./docs/WEB_3.0.pdf" }],
    },
    {
      title: "ead.sp.senai.br",
      institution: "Desvendando o ESG",
      period: "2025",
      description: "",
      link: [{ label: "Certificado", url: "./docs/Desvendando_o_ESG.pdf" }],
    },
    {
      title: "ead.sp.senai.br",
      institution: "Fluência: Fundamentos da Inteligência Artificial",
      period: "2025",
      description: "",
      link: [{ label: "Certificado", url: "./docs/FLUÊNCIA___FUNDAMENTOS_DA_INTELIGÊNCIA_ARTIFICIAL.pdf" }],
    },
  ];

  const ic: Ic[] = [
    {
      title: "PIBIC Jr. (FMB) – Sistema de Gestão de Fármacos (Medicina Nuclear)",
      period: "2025 — Presente",
      advisor: "Dr. Sonia",
      description:
        "Desenvolvimento de sistema web para controle de estoque de fármacos em ambiente hospitalar, com geração de alertas automáticos de validade, estoque mínimo e uso atípico.",
      link: [{ label: "", url: "" }],
    },
  ];

  const presentations: Presentation[] = [
    {
      title: "Congresso Científico UNESP",
      event: "I Encontro de Metodologia e Raciocínio Científico da UNESP.",
      date: "Outubro 2023",
      type: "Sistema Web para Gerenciamento de Entrada e Saída de Alunos.",
      link: [{ label: "Participação", url: "./docs/participouunesp.pdf" }, { label: "Apresentação", url: "./docs/trabalhoapresentadounesp.pdf" }, { label: "Premiação", url: "./docs/premiounesp.pdf" }, { label: "Projeto", url: "https://github.com/SergioPelais/SENAI-" }],
    },
  ];

  const mural: Participation[] = [
    {
      img: "./docs/cangu1.png",
      title: "Participação no Concurso Canguru",
      event: "Canguru de Matemática Brasil",
      period: "2023",
      description: "",
      link: [
        { label: "Certificado", url: "./docs/canguru.pdf" },
      ],
    },
    {
      img: "./docs/cangu2.png",
      title: "Participação no Concurso Canguru",
      event: "Canguru de Matemática Brasil",
      period: "2022",
      description: "",
      link: [{ label: "Certificado", url: "./docs/oliempiadacancuru.pdf" }],
    },
    // adicione quantos quiser
  ];

  // Agrupa skills por categoria
  const skillsByCategory = skills.reduce<Record<string, Skill[]>>((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {});

  // Agrupa EAD por título
  const eadGrouped = groupByTitle(ead);

  const anoAtual = new Date().getFullYear();

  return (
    <div className="text-end">

      <div className="relative space-y-12 text-left">
        <CurriculumNav />
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-white sm:text-4xl">Curriculum</h1>
          <p className="mt-2 text-zinc-400">Minha trajetória profissional e habilidades.</p>
        </div>

        {/* Sobre */}
        <section id="sobre" className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
          <h2 className="mb-3 text-xl font-semibold text-emerald-400">Sobre mim</h2>
          <p className="leading-relaxed text-zinc-300">
            Desenvolvedor com foco em criar produtos digitais de alta qualidade.
            Gosto de código limpo, boas práticas e de transformar ideias em realidade.
          </p>
        </section>

        {/* Experiência */}
        <section id="experiencia">
          <h2 className="mb-6 text-xl font-semibold text-white">Experiência</h2>
          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className="relative border-l-2 border-emerald-500/40 pl-6"
              >
                <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-2 border-emerald-500 bg-zinc-950" />
                <div className="flex items-center gap-1">
                  <h3 className="font-semibold text-white">{exp.role}</h3>
                  <LinksTooltip links={exp.link} />
                </div>
                <p className="text-sm text-emerald-400">
                  {exp.company} · {exp.period}
                </p>
                <p className="mt-2 text-sm text-zinc-400">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills por categoria */}
        <section id="skills">
          <h2 className="mb-6 text-xl font-semibold text-white">Skills</h2>
          <div className="space-y-6">
            {Object.entries(skillsByCategory).map(([category, items]) => (
              <div key={category}>
                <h3 className="mb-3 text-sm font-medium uppercase tracking-wider text-emerald-400">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill.name}
                      className="rounded-full border border-zinc-700 bg-zinc-900 px-4 py-1.5 text-sm text-zinc-300"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Formação */}
        <section id="formacao">
          <h2 className="mb-6 text-xl font-semibold text-white">Formação</h2>

          <div className="space-y-8">
            {/* Acadêmico */}
            <div>
              <h3 className="mb-4 text-sm font-medium uppercase tracking-wider text-emerald-400">
                Acadêmico
              </h3>
              <div className="space-y-4">
                {academic.map((item, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-5"
                  >
                    <div className="flex items-center gap-1">
                      <h4 className="font-semibold text-white">{item.title}</h4>
                      <LinksTooltip links={item.link} />
                    </div>
                    <p className="mt-1 text-sm text-emerald-400">
                      {item.institution} · {item.period}
                      {item.status && (
                        <span className="ml-2 rounded-full bg-zinc-800 px-2 py-0.5 text-xs text-zinc-400">
                          {item.status}
                        </span>
                      )}
                    </p>
                    {item.description && (
                      <p className="mt-2 text-sm text-zinc-400">{item.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Cursos Complementares */}
            <div>
              <h3 className="mb-4 text-sm font-medium uppercase tracking-wider text-emerald-400">
                Cursos Complementares
              </h3>
              <div className="space-y-4">
                {course.map((item, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-5"
                  >
                    <div className="flex items-center gap-1">
                      <h4 className="font-semibold text-white">{item.title}</h4>
                      <LinksTooltip links={item.link} />
                    </div>
                    <p className="mt-1 text-sm text-emerald-400">
                      {item.institution} · {item.period}
                      {item.hours && ` · ${item.hours}`}
                      {item.status && (
                        <span className="ml-2 rounded-full bg-zinc-800 px-2 py-0.5 text-xs text-zinc-400">
                          {item.status}
                        </span>
                      )}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* EAD - com Accordion quando título se repete */}
            <div>
              <h3 className="mb-4 text-sm font-medium uppercase tracking-wider text-emerald-400">
                EAD
              </h3>
              <div className="space-y-4">
                {eadGrouped.map(([title, items]) => {
                  // Se só tem 1 item, mostra normal
                  if (items.length === 1) {
                    const item = items[0];
                    return (
                      <div
                        key={title}
                        className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-5"
                      >
                        <div className="flex items-center gap-1">
                          <h4 className="font-semibold text-white">{item.title}</h4>
                          <LinksTooltip links={item.link} />
                        </div>
                        <p className="mt-1 text-sm text-emerald-400">
                          {item.institution} · {item.period}
                        </p>
                        {item.description && (
                          <p className="mt-2 text-sm text-zinc-400">{item.description}</p>
                        )}
                      </div>
                    );
                  }

                  // Vários itens com mesmo título → Accordion
                  return (
                    <AccordionGroup key={title} title={title} defaultOpen={false}>
                      {items.map((item, i) => (
                        <div
                          key={i}
                          className="flex items-start justify-between gap-3 rounded-lg bg-zinc-950/50 px-4 py-3"
                        >
                          <div>
                            <p className="font-medium text-zinc-200">{item.institution}</p>
                            <p className="mt-0.5 text-sm text-emerald-400">{item.period}</p>
                            {item.description && (
                              <p className="mt-1 text-sm text-zinc-400">{item.description}</p>
                            )}
                          </div>
                          <LinksTooltip links={item.link} />
                        </div>
                      ))}
                    </AccordionGroup>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Iniciações Científicas e Apresentações */}
        <section id="ic-apresentacoes">
          <h2 className="mb-6 text-xl font-semibold text-white">
            Iniciações Científicas e Apresentações
          </h2>

          <div className="space-y-6">
            {/* IC */}
            <div>
              <h3 className="mb-4 text-sm font-medium uppercase tracking-wider text-emerald-400">
                Iniciação Científica (IC)
              </h3>
              <div className="space-y-4">
                {ic.map((item, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-5"
                  >
                    <div className="flex items-center gap-1">
                      <h4 className="font-semibold text-white">{item.title}</h4>
                      <LinksTooltip links={item.link} />
                    </div>
                    <p className="mt-1 text-sm text-emerald-400">
                      {item.period} · Orientador: {item.advisor}
                    </p>
                    <p className="mt-2 text-sm text-zinc-400">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Apresentações */}
            <div>
              <h3 className="mb-4 text-sm font-medium uppercase tracking-wider text-emerald-400">
                Apresentações
              </h3>
              <div className="space-y-4">
                {presentations.map((item, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-5"
                  >
                    <div className="flex items-center gap-1">
                      <h4 className="font-semibold text-white">{item.title}</h4>
                      <LinksTooltip links={item.link} />
                    </div>
                    <p className="mt-1 text-sm text-emerald-400">
                      {item.event} · {item.date}
                    </p>
                    <p className="mt-1 text-xs text-zinc-500">{item.type}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mural */}
        <section id="mural" className="scroll-mt-24">
          <h2 className="mb-6 text-xl font-semibold text-white">Mural</h2>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {mural.map((item, i) => (
              <article
                key={i}
                className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40 transition hover:border-emerald-500/30 hover:bg-zinc-900"
              >
                {/* Imagem */}
                <div className="relative aspect-[4/3] overflow-hidden bg-zinc-800">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* overlay sutil */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-60" />
                </div>

                {/* Conteúdo */}
                <div className="p-5">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-semibold text-white leading-snug">
                      {item.title}
                    </h3>
                    <LinksTooltip links={item.link} />
                  </div>

                  {(item.event || item.period) && (
                    <p className="mt-1.5 text-sm text-emerald-400">
                      {item.event && <>{item.event} · </>}
                      {item.period}
                    </p>
                  )}

                  {item.description && (
                    <p className="mt-2 text-sm text-zinc-400 line-clamp-3">
                      {item.description}
                    </p>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
      <div className="mt-10" />
      <CurriculumPDF
        data={{
          name: "Carlos Gabriel dos Santos Araujo",
          email: "ti.carlos.dev@email.com",
          phone: "(14) 998802-9965",
          location: "Botucatu, SP",
          about:
            "Desenvolvedor com foco em criar produtos digitais de alta qualidade. Gosto de código limpo, boas práticas e de transformar ideias em realidade.",
          experiences,
          skills,
          academic,
          course,
          ead,
          ic,
          presentations,
          mural,
        }}
        fileName={`CarlosGabriel-Curriculum_${anoAtual}.pdf`}
      />
    </div>
  );
}
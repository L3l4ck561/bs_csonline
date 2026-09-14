import { useState, useEffect } from "react";
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

// ==================== HELPER: filtra links válidos ====================
function getValidLinks(links?: LinkItem[]) {
  if (!links) return [];
  return links.filter((l) => l.url && l.url.trim() !== "");
}

// ==================== MODAL DE LINKS ====================
function LinksModal({
  links,
  title,
  onClose,
}: {
  links: LinkItem[];
  title?: string;
  onClose: () => void;
}) {
  // Fecha com ESC
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  // Impede scroll do body enquanto o modal está aberto
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Conteúdo */}
      <div className="relative z-10 w-full max-w-sm rounded-2xl border border-zinc-700 bg-zinc-900 shadow-2xl shadow-black/50">
        <div className="flex items-center justify-between border-b border-zinc-800 px-5 py-4">
          <h3 className="font-semibold text-white">
            {title || "Links"}
          </h3>
          <button
            type="button"
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full text-zinc-400 transition hover:bg-zinc-800 hover:text-white"
            aria-label="Fechar"
          >
            ✕
          </button>
        </div>

        <div className="flex flex-col gap-1 p-3">
          {links.map((link, i) => (
            <a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-zinc-300 transition hover:bg-emerald-500/10 hover:text-emerald-400"
              onClick={onClose}
            >
              <span className="text-base">🔗</span>
              <span className="flex-1">{link.label || "Abrir link"}</span>
              <span className="text-xs text-zinc-500">↗</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

// ==================== COMPONENTE DE TOOLTIP DE LINKS ====================
function LinksTooltip({
  links,
  onOpenModal,
}: {
  links?: LinkItem[];
  onOpenModal?: () => void;
}) {
  const validLinks = getValidLinks(links);

  if (validLinks.length === 0) return null;

  return (
    <div className="group/tooltip relative ml-2 inline-flex">
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation(); // não dispara o clique do card
          onOpenModal?.();
        }}
        className="flex h-5 w-5 items-center justify-center rounded-full border border-zinc-600 text-xs text-zinc-400 transition hover:border-emerald-500 hover:text-emerald-400"
        aria-label="Ver links"
      >
        🔗
      </button>

      {/* Tooltip (só desktop / hover) */}
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
                onClick={(e) => e.stopPropagation()}
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
          className={`text-emerald-400 transition-transform duration-200 ${
            open ? "rotate-180" : ""
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
  const [modal, setModal] = useState<{
    links: LinkItem[];
    title?: string;
  } | null>(null);

  const openLinksModal = (links?: LinkItem[], title?: string) => {
    const valid = getValidLinks(links);
    if (valid.length === 0) return;
    setModal({ links: valid, title });
  };

  const experiences: Experience[] = [
    {
      role: "Freelancer",
      company: "Packlor Services",
      period: "2026 — Presente",
      description:
        "Desenvolvimento de aplicações web com React, Node.js e TypeScript.",
      link: [
        { label: "Acesse a Packlor", url: "https://services.packlor.com/" },
      ],
    },
    {
      role: "Desenvolvedor Full Stack",
      company: "Grupo consciência - CNS",
      period: "2026",
      description:
        "Atuação em projetos internos corporativos com Delphi Pascal",
      link: [{ label: "Certificado", url: "./docs/CNS1.pdf" }],
    },
    {
      role: "Desenvolvedor Full Stack",
      company: "Saga SENAI de Inovação",
      period: "2024 — 2025",
      description:
        "Atuação acadêmica no desenvolvimento de um projeto de inovação, aplicando conhecimentos teóricos e práticos",
      link: [
        {
          label: "Projeto LostFound",
          url: "https://github.com/L3l4ck561/LostFound",
        },
      ],
    },
    {
      role: "Desenvolvedor e Autor",
      company: "BirdGameJer",
      period: "2025",
      description:
        "Desenvolvimento de jogo 2D para navegador utilizando Construct 2",
      link: [
        {
          label: "Jogo BirdGame",
          url: "https://birdgamejam.itch.io/a-toca-da-coruja",
        },
      ],
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
    // Linguagens
    { name: "Python", category: "Linguagens" },
    { name: "JavaScript", category: "Linguagens" },
    { name: "TypeScript", category: "Linguagens" },

    // Frontend
    { name: "React", category: "Frontend" },
    { name: "Next.js", category: "Frontend" },
    { name: "React Router", category: "Frontend" },
    { name: "HTML", category: "Frontend" },
    { name: "CSS", category: "Frontend" },

    // UI & Styling
    { name: "Tailwind CSS", category: "UI & Styling" },
    { name: "Bootstrap", category: "UI & Styling" },
    { name: "Material UI", category: "UI & Styling" },

    // Mobile
    { name: "Expo", category: "Mobile" },

    // Backend
    { name: "Node.js", category: "Backend" },
    { name: "Express.js", category: "Backend" },
    { name: "Flask", category: "Backend" },
    { name: "Django", category: "Backend" },
    { name: "FastAPI", category: "Backend" },

    // APIs & Integrações
    { name: "REST APIs", category: "APIs & Integrações" },
    { name: "Axios", category: "APIs & Integrações" },
    { name: "WebSocket", category: "APIs & Integrações" },

    // Engenharia de Software
    { name: "Modular Architecture", category: "Engenharia de Software" },
    { name: "Multi-tenant SaaS", category: "Engenharia de Software" },
    {
      name: "Authentication & Authorization",
      category: "Engenharia de Software",
    },
    { name: "Business Rules", category: "Engenharia de Software" },

    // Bancos Relacionais
    { name: "PostgreSQL", category: "Bancos de Dados" },
    { name: "MySQL", category: "Bancos de Dados" },
    { name: "MariaDB", category: "Bancos de Dados" },
    { name: "SQLite", category: "Bancos de Dados" },

    // Banco NoSQL
    { name: "MongoDB", category: "Bancos de Dados" },

    // Data Science
    { name: "NumPy", category: "Data Science & Visualization" },
    { name: "Pandas", category: "Data Science & Visualization" },
    { name: "Matplotlib", category: "Data Science & Visualization" },

    // Machine Learning
    { name: "Scikit-learn", category: "Machine Learning" },
    { name: "Data Preprocessing", category: "Machine Learning" },
    { name: "Feature Scaling", category: "Machine Learning" },

    // Testes & QA
    { name: "Jest", category: "Test Automation" },
    { name: "Cypress", category: "Test Automation" },
    { name: "Selenium", category: "Test Automation" },
    { name: "API Testing", category: "QA & Quality" },
    { name: "End-to-End Testing", category: "QA & Quality" },

    // Automação
    { name: "PyAutoGUI", category: "Automation" },

    // DevOps
    { name: "Git", category: "DevOps" },
    { name: "Docker", category: "DevOps" },
    { name: "CI/CD", category: "DevOps" },
    { name: "Scrum & Kanban", category: "DevOps" },

    // Cloud & Deployment
    { name: "Vercel", category: "Cloud & Deployment" },
    { name: "Render", category: "Cloud & Deployment" },
    { name: "Cloudflare", category: "Cloud & Deployment" },

    // Ferramentas
    { name: "Postman", category: "Development Tools" },
    { name: "Figma", category: "Development Tools" },
    { name: "Trello", category: "Development Tools" },

    // IoT & Embedded
    { name: "Arduino / ESP32", category: "IoT & Embedded" },

    // Desktop
    { name: "Tkinter", category: "Desktop Development" },
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
      link: [
        {
          label: "Certificado",
          url: "./docs/Validação_Certificado_jornada_python.pdf",
        },
      ],
    },
    {
      title: "Treinamento Inicial em Proteção Radiológica - Medicina Nuclear",
      institution: "HCFMB",
      period: "2026",
      hours: "2h",
      status: "Concluído",
      link: [
        {
          label: "Certificado",
          url: "./docs/TREINAMENTO_INICIAL_EM_PROTECAO_RADIOLOGICA-MEDICINA_NUCLEAR-EAD-2026.pdf",
        },
      ],
    },
    {
      title: "Startup Day",
      institution: "SEBRAE-SP",
      period: "2026",
      hours: "4h",
      status: "Concluído",
      link: [
        { label: "Participação", url: "./docs/startupday.pdf" },
        { label: "Certificado", url: "./docs/startupdayC.pdf" },
      ],
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
      link: [
        {
          label: "Certificado",
          url: "./docs/certificado segurança no trabalho.pdf",
        },
      ],
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
      link: [
        {
          label: "Certificado",
          url: "./docs/Privacidade_e_Proteção_de_Dados_(LGPD).pdf",
        },
      ],
    },
    {
      title: "ead.sp.senai.br",
      institution: "Desvendando a Indústria 4.0",
      period: "2025",
      description: "",
      link: [
        { label: "Certificado", url: "./docs/Desvendando_a_Indústria_4.0.pdf" },
      ],
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
      link: [
        {
          label: "Certificado",
          url: "./docs/FLUÊNCIA___FUNDAMENTOS_DA_INTELIGÊNCIA_ARTIFICIAL.pdf",
        },
      ],
    },
  ];

  const ic: Ic[] = [
    {
      title:
        "PIBIC Jr. (FMB) – Sistema de Gestão de Fármacos (Medicina Nuclear)",
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
      link: [
        { label: "Participação", url: "./docs/participouunesp.pdf" },
        { label: "Apresentação", url: "./docs/trabalhoapresentadounesp.pdf" },
        { label: "Premiação", url: "./docs/premiounesp.pdf" },
        { label: "Projeto", url: "https://github.com/SergioPelais/SENAI-" },
      ],
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
        { label: "Certificado A.2023", url: "./docs/canguru.pdf" },
        { label: "Certificado A.2022", url: "./docs/oliempiadacancuru.pdf" },
      ],
    },
    {
      img: "./docs/premioSenai.png",
      title: "Prêmio Roberto Mange",
      event: "",
      period: "2025",
      description: "Melhor aluno formado dos cursos técnicos",
      link: [{ label: "Premiação", url: "./docs/premioSenai.pdf" }],
    },
    {
      img: "./docs/premiounesp.png",
      title: "1º Lugar – Congresso Científico",
      event: "I Encontro de Metodologia e Raciocínio Científico da UNESP",
      period: "2025",
      description:
        "Projeto SENAI+ apresentado e premiado com 1º lugar na categoria Ensino Médio",
      link: [
        { label: "Participação", url: "./docs/participouunesp.pdf" },
        { label: "Apresentação", url: "./docs/trabalhoapresentadounesp.pdf" },
        { label: "Premiação", url: "./docs/premiounesp.pdf" },
        { label: "Projeto", url: "https://github.com/SergioPelais/SENAI-" },
      ],
    },
  ];

  // Agrupa skills por categoria
  const skillsByCategory = skills.reduce<Record<string, Skill[]>>(
    (acc, skill) => {
      if (!acc[skill.category]) acc[skill.category] = [];
      acc[skill.category].push(skill);
      return acc;
    },
    {},
  );

  // Agrupa EAD por título
  const eadGrouped = groupByTitle(ead);

  const anoAtual = new Date().getFullYear();

  return (
    <div className="text-end">
      <div className="relative space-y-12 text-left">
        <CurriculumNav />
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-white sm:text-4xl">
            Curriculum
          </h1>
          <p className="mt-2 text-zinc-400">
            Minha trajetória profissional e habilidades.
          </p>
        </div>

        {/* Sobre */}
        <section
          id="sobre"
          className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6"
        >
          <h2 className="mb-3 text-xl font-semibold text-emerald-400">
            Sobre mim
          </h2>
          <p className="leading-relaxed text-zinc-300">
            Desenvolvedor de Software com experiência em aplicações web, APIs,
            automação e sistemas orientados a dados. Atualmente aprofundando
            conhecimentos em Data Science e Machine Learning para transformar
            dados em soluções inteligentes.
          </p>
        </section>

        {/* Experiência */}
        <section id="experiencia">
          <h2 className="mb-6 text-xl font-semibold text-white">Experiência</h2>
          <div className="space-y-6">
            {experiences.map((exp, i) => {
              const hasLinks = getValidLinks(exp.link).length > 0;
              return (
                <div
                  key={i}
                  className={`relative border-l-2 border-emerald-500/40 pl-6 ${
                    hasLinks
                      ? "cursor-pointer rounded-r-xl transition hover:bg-zinc-900/50"
                      : ""
                  }`}
                  onClick={() =>
                    hasLinks && openLinksModal(exp.link, exp.role)
                  }
                >
                  <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-2 border-emerald-500 bg-zinc-950" />
                  <div className="flex items-center gap-1">
                    <h3 className="font-semibold text-white">{exp.role}</h3>
                    <LinksTooltip
                      links={exp.link}
                      onOpenModal={() => openLinksModal(exp.link, exp.role)}
                    />
                  </div>
                  <p className="text-sm text-emerald-400">
                    {exp.company} · {exp.period}
                  </p>
                  <p className="mt-2 text-sm text-zinc-400">
                    {exp.description}
                  </p>
                </div>
              );
            })}
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
                {academic.map((item, i) => {
                  const hasLinks = getValidLinks(item.link).length > 0;
                  return (
                    <div
                      key={i}
                      className={`rounded-xl border border-zinc-800 bg-zinc-900/40 p-5 ${
                        hasLinks
                          ? "cursor-pointer transition hover:border-emerald-500/40 hover:bg-zinc-900"
                          : ""
                      }`}
                      onClick={() =>
                        hasLinks && openLinksModal(item.link, item.title)
                      }
                    >
                      <div className="flex items-center gap-1">
                        <h4 className="font-semibold text-white">
                          {item.title}
                        </h4>
                        <LinksTooltip
                          links={item.link}
                          onOpenModal={() =>
                            openLinksModal(item.link, item.title)
                          }
                        />
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
                        <p className="mt-2 text-sm text-zinc-400">
                          {item.description}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Cursos Complementares */}
            <div>
              <h3 className="mb-4 text-sm font-medium uppercase tracking-wider text-emerald-400">
                Cursos Complementares
              </h3>
              <div className="space-y-4">
                {course.map((item, i) => {
                  const hasLinks = getValidLinks(item.link).length > 0;
                  return (
                    <div
                      key={i}
                      className={`rounded-xl border border-zinc-800 bg-zinc-900/40 p-5 ${
                        hasLinks
                          ? "cursor-pointer transition hover:border-emerald-500/40 hover:bg-zinc-900"
                          : ""
                      }`}
                      onClick={() =>
                        hasLinks && openLinksModal(item.link, item.title)
                      }
                    >
                      <div className="flex items-center gap-1">
                        <h4 className="font-semibold text-white">
                          {item.title}
                        </h4>
                        <LinksTooltip
                          links={item.link}
                          onOpenModal={() =>
                            openLinksModal(item.link, item.title)
                          }
                        />
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
                  );
                })}
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
                    const hasLinks = getValidLinks(item.link).length > 0;
                    return (
                      <div
                        key={title}
                        className={`rounded-xl border border-zinc-800 bg-zinc-900/40 p-5 ${
                          hasLinks
                            ? "cursor-pointer transition hover:border-emerald-500/40 hover:bg-zinc-900"
                            : ""
                        }`}
                        onClick={() =>
                          hasLinks &&
                          openLinksModal(item.link, item.institution)
                        }
                      >
                        <div className="flex items-center gap-1">
                          <h4 className="font-semibold text-white">
                            {item.title}
                          </h4>
                          <LinksTooltip
                            links={item.link}
                            onOpenModal={() =>
                              openLinksModal(item.link, item.institution)
                            }
                          />
                        </div>
                        <p className="mt-1 text-sm text-emerald-400">
                          {item.institution} · {item.period}
                        </p>
                        {item.description && (
                          <p className="mt-2 text-sm text-zinc-400">
                            {item.description}
                          </p>
                        )}
                      </div>
                    );
                  }

                  // Vários itens com mesmo título → Accordion
                  return (
                    <AccordionGroup
                      key={title}
                      title={title}
                      defaultOpen={false}
                    >
                      {items.map((item, i) => {
                        const hasLinks = getValidLinks(item.link).length > 0;
                        return (
                          <div
                            key={i}
                            className={`flex items-start justify-between gap-3 rounded-lg bg-zinc-950/50 px-4 py-3 ${
                              hasLinks
                                ? "cursor-pointer transition hover:bg-zinc-900"
                                : ""
                            }`}
                            onClick={() =>
                              hasLinks &&
                              openLinksModal(item.link, item.institution)
                            }
                          >
                            <div>
                              <p className="font-medium text-zinc-200">
                                {item.institution}
                              </p>
                              <p className="mt-0.5 text-sm text-emerald-400">
                                {item.period}
                              </p>
                              {item.description && (
                                <p className="mt-1 text-sm text-zinc-400">
                                  {item.description}
                                </p>
                              )}
                            </div>
                            <LinksTooltip
                              links={item.link}
                              onOpenModal={() =>
                                openLinksModal(item.link, item.institution)
                              }
                            />
                          </div>
                        );
                      })}
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
                {ic.map((item, i) => {
                  const hasLinks = getValidLinks(item.link).length > 0;
                  return (
                    <div
                      key={i}
                      className={`rounded-xl border border-zinc-800 bg-zinc-900/40 p-5 ${
                        hasLinks
                          ? "cursor-pointer transition hover:border-emerald-500/40 hover:bg-zinc-900"
                          : ""
                      }`}
                      onClick={() =>
                        hasLinks && openLinksModal(item.link, item.title)
                      }
                    >
                      <div className="flex items-center gap-1">
                        <h4 className="font-semibold text-white">
                          {item.title}
                        </h4>
                        <LinksTooltip
                          links={item.link}
                          onOpenModal={() =>
                            openLinksModal(item.link, item.title)
                          }
                        />
                      </div>
                      <p className="mt-1 text-sm text-emerald-400">
                        {item.period} · Orientador: {item.advisor}
                      </p>
                      <p className="mt-2 text-sm text-zinc-400">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Apresentações */}
            <div>
              <h3 className="mb-4 text-sm font-medium uppercase tracking-wider text-emerald-400">
                Apresentações
              </h3>
              <div className="space-y-4">
                {presentations.map((item, i) => {
                  const hasLinks = getValidLinks(item.link).length > 0;
                  return (
                    <div
                      key={i}
                      className={`rounded-xl border border-zinc-800 bg-zinc-900/40 p-5 ${
                        hasLinks
                          ? "cursor-pointer transition hover:border-emerald-500/40 hover:bg-zinc-900"
                          : ""
                      }`}
                      onClick={() =>
                        hasLinks && openLinksModal(item.link, item.title)
                      }
                    >
                      <div className="flex items-center gap-1">
                        <h4 className="font-semibold text-white">
                          {item.title}
                        </h4>
                        <LinksTooltip
                          links={item.link}
                          onOpenModal={() =>
                            openLinksModal(item.link, item.title)
                          }
                        />
                      </div>
                      <p className="mt-1 text-sm text-emerald-400">
                        {item.event} · {item.date}
                      </p>
                      <p className="mt-1 text-xs text-zinc-500">{item.type}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Mural */}
        <section id="mural" className="scroll-mt-24">
          <h2 className="mb-6 text-xl font-semibold text-white">Mural</h2>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {mural.map((item, i) => {
              const hasLinks = getValidLinks(item.link).length > 0;
              return (
                <article
                  key={i}
                  className={`group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40 transition ${
                    hasLinks
                      ? "cursor-pointer hover:border-emerald-500/30 hover:bg-zinc-900"
                      : "hover:border-emerald-500/30 hover:bg-zinc-900"
                  }`}
                  onClick={() =>
                    hasLinks && openLinksModal(item.link, item.title)
                  }
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
                      <LinksTooltip
                        links={item.link}
                        onOpenModal={() =>
                          openLinksModal(item.link, item.title)
                        }
                      />
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
              );
            })}
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
            "Desenvolvedor de Software com experiência em aplicações web, APIs, automação e sistemas orientados a dados. Atualmente aprofundando conhecimentos em Data Science e Machine Learning para transformar dados em soluções inteligentes.",
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

      {/* Modal de links */}
      {modal && (
        <LinksModal
          links={modal.links}
          title={modal.title}
          onClose={() => setModal(null)}
        />
      )}
    </div>
  );
}
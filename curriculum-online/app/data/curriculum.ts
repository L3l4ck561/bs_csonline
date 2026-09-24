// ==================== TIPOS ====================
export type LinkItem = { label: string; url: string };

export type Experience = {
  role: string;
  company: string;
  period: string;
  description: string;
  link?: LinkItem[];
};

export type Academic = {
  title: string;
  status: string;
  institution: string;
  period: string;
  description?: string;
  link?: LinkItem[];
};

export type Course = {
  title: string;
  status: string;
  institution: string;
  period: string;
  hours?: string;
  link?: LinkItem[];
};

export type Ead = {
  title: string;
  institution: string;
  period: string;
  description?: string;
  link?: LinkItem[];
};

export type Ic = {
  title: string;
  period: string;
  advisor: string;
  description: string;
  link?: LinkItem[];
};

export type Presentation = {
  title: string;
  event: string;
  date: string;
  type: string;
  link?: LinkItem[];
};

export type Skill = {
  name: string;
  category: string;
};

export type Participation = {
  img: string;
  title: string;
  event?: string;
  period: string;
  description?: string;
  link?: LinkItem[];
};

export type PersonalInfo = {
  name: string;
  email: string;
  phone: string;
  location: string;
  about: string;
};

// ==================== DADOS ====================
export const personalInfo: PersonalInfo = {
  name: "Carlos Gabriel dos Santos Araujo",
  email: "ti.carlos.dev@email.com",
  phone: "(14) 998802-9965",
  location: "Botucatu, SP",
  about:
    "Desenvolvedor de Software com experiência em aplicações web, APIs, automação e sistemas orientados a dados. Atualmente aprofundando conhecimentos em Data Science e Machine Learning para transformar dados em soluções inteligentes.",
};

export const experiences: Experience[] = [
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
    description: "Atuação em projetos internos corporativos com Delphi Pascal",
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

export const skills: Skill[] = [
  // Linguagens
  { name: "Python", category: "Linguagens" },
  { name: "JavaScript", category: "Linguagens" },
  { name: "TypeScript", category: "Linguagens" },

  // Frontend
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

export const academic: Academic[] = [
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

export const course: Course[] = [
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

export const ead: Ead[] = [
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

export const ic: Ic[] = [
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

export const presentations: Presentation[] = [
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

export const mural: Participation[] = [
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
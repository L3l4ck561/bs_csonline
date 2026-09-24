"use client";

import { useState, useEffect } from "react";

const posts = [
  {
    title: "Ferramentas Webs que uso no dia a dia",
    excerpt:
      "Ferramentas que uso no dia a dia para desenvolvimento web, produtividade e organização.",
    date: "24 Set 2026",
    slug: "ferramentas-webs",
  },
];

type Tool = {
  name: string;
  domain: string;
  url: string;
  description: string;
};

type Section = {
  title: string;
  tools: Tool[];
};

const toolSections: Section[] = [
  {
    title: "UI / UX",
    tools: [
      {
        name: "CSS Buttons",
        domain: "cssbuttons.io",
        url: "https://cssbuttons.io",
        description:
          "Biblioteca enorme de botões CSS prontos para copiar e colar no projeto.",
      },
      {
        name: "SYMBL",
        domain: "symbl.cc",
        url: "https://symbl.cc",
        description:
          "Símbolos, emojis, caracteres Unicode e hieróglifos em um só lugar.",
      },
      {
        name: "Pictogrammers",
        domain: "pictogrammers.com",
        url: "https://pictogrammers.com",
        description:
          "Ícones open-source (Material Design Icons e outras bibliotecas).",
      },
      {
        name: "shadcn/ui",
        domain: "ui.shadcn.com",
        url: "https://ui.shadcn.com",
        description:
          "Componentes acessíveis e customizáveis para React + Tailwind.",
      },
      {
        name: "Pick Color Online",
        domain: "pickcoloronline.com",
        url: "https://pickcoloronline.com",
        description: "Seletor de cores online simples e direto.",
      },
      {
        name: "Colour Picker",
        domain: "colourpicker.app",
        url: "https://colourpicker.app",
        description: "Outra ferramenta rápida para escolher e copiar cores.",
      },
      {
        name: "Font Awesome",
        domain: "fontawesome.com",
        url: "https://fontawesome.com",
        description: "A clássica biblioteca de ícones para web.",
      },
      {
        name: "Simple Icons",
        domain: "simpleicons.org",
        url: "https://simpleicons.org",
        description: "Ícones SVG de marcas e tecnologias em um só lugar.",
      },
      {
        name: "SVG Repo",
        domain: "svgrepo.com",
        url: "https://www.svgrepo.com/",
        description: "Outro de Ícones SVG.",
      },
      {
        name: "CodePen",
        domain: "codepen.io",
        url: "https://codepen.io",
        description:
          "Playground para experimentar HTML, CSS e JS rapidamente.",
      },
    ],
  },
  {
    title: "Ferramentas",
    tools: [
      {
        name: "Dontpad",
        domain: "dontpad.com",
        url: "https://dontpad.com",
        description:
          "Bloco de notas online compartilhado. Só criar um path e pronto.",
      },
      {
        name: "Dontpad BR",
        domain: "dontpad.com.br",
        url: "https://dontpad.com.br",
        description: "Versão brasileira do Dontpad.",
      },
      {
        name: "draw.io",
        domain: "draw.io",
        url: "https://app.diagrams.net",
        description:
          "Diagramas, fluxogramas e arquiteturas de forma gratuita.",
      },
      {
        name: "Google NotebookLM",
        domain: "notebooklm.google.com",
        url: "https://notebooklm.google.com",
        description:
          "Notebook com IA do Google para organizar pesquisas e ideias.",
      },
      {
        name: "Lovable",
        domain: "lovable.dev",
        url: "https://lovable.dev",
        description:
          "Crie apps full-stack com linguagem natural e código editável.",
      },
      {
        name: "Public APIs",
        domain: "github.com",
        url: "https://github.com/public-apis/public-apis",
        description:
          "Lista gigante de APIs públicas gratuitas para usar em projetos.",
      },
      {
        name: "npm",
        domain: "npmjs.com",
        url: "https://www.npmjs.com",
        description: "Registro de pacotes JavaScript/Node.js.",
      },
      {
        name: "Nominatim",
        domain: "nominatim.org",
        url: "https://nominatim.org",
        description:
          "Geocoding open-source baseado no OpenStreetMap.",
      },
      {
        name: "123Apps",
        domain: "123apps.com",
        url: "https://123apps.com",
        description:
          "Suíte de ferramentas online (editor de vídeo, PDF, áudio etc.).",
      },
      {
        name: "TinyWow",
        domain: "tinywow.com",
        url: "https://tinywow.com",
        description:
          "Dezenas de ferramentas gratuitas para arquivos, imagens e PDFs.",
      },
      {
        name: "Gravador",
        domain: "gravador.net",
        url: "https://gravador.net",
        description: "Gravador de áudio online simples.",
      },
      {
        name: "Massgrave",
        domain: "massgrave.dev",
        url: "https://massgrave.dev",
        description:
          "Documentação dos Microsoft Activation Scripts (MAS).",
      },
    ],
  },
  {
    title: "Consultas & Treinamentos",
    tools: [
      {
        name: "Python Docs",
        domain: "docs.python.org",
        url: "https://docs.python.org",
        description: "Documentação oficial do Python.",
      },
      {
        name: "Flowbite",
        domain: "flowbite.com",
        url: "https://flowbite.com",
        description:
          "Componentes UI baseados em Tailwind CSS prontos para usar.",
      },
      {
        name: "DevDocs",
        domain: "devdocs.io",
        url: "https://devdocs.io",
        description:
          "Documentação de várias linguagens e libs em um só lugar, offline-friendly.",
      },
      {
        name: "DevMedia",
        domain: "devmedia.com.br",
        url: "https://www.devmedia.com.br",
        description:
          "Conteúdo e cursos de programação em português.",
      },
      {
        name: "Drive de Pobre",
        domain: "drivedepobre.com",
        url: "https://drivedepobre.com",
        description:
          "Alternativa leve e gratuita para armazenar e compartilhar arquivos.",
      },
      {
        name: "MCStumble",
        domain: "mcstumble.com",
        url: "https://mcstumble.com",
        description: "Descoberta aleatória de conteúdo interessante.",
      },
      {
        name: "Codewars",
        domain: "codewars.com",
        url: "https://www.codewars.com",
        description:
          "Desafios de programação (katas) para praticar lógica.",
      },
      {
        name: "LeetCode",
        domain: "leetcode.com",
        url: "https://leetcode.com",
        description:
          "Problemas de algoritmos e preparação para entrevistas.",
      },
      {
        name: "pwn.college",
        domain: "pwn.college",
        url: "https://pwn.college",
        description:
          "Plataforma de aprendizado de segurança e binary exploitation.",
      },
      {
        name: "Kaggle",
        domain: "kaggle.com",
        url: "https://www.kaggle.com",
        description:
          "Datasets, competições e notebooks de data science / ML.",
      },
    ],
  },
  {
    title: "Cloud",
    tools: [
      {
        name: "EmailJS",
        domain: "emailjs.com",
        url: "https://www.emailjs.com",
        description:
          "Envie e-mails direto do frontend sem backend próprio.",
      },
      {
        name: "Hostinger",
        domain: "hostinger.com",
        url: "https://www.hostinger.com",
        description: "Hospedagem web acessível e com boa performance.",
      },
      {
        name: "Supabase",
        domain: "supabase.com",
        url: "https://supabase.com",
        description:
          "Backend as a Service open-source (Postgres + Auth + Storage).",
      },
      {
        name: "Render",
        domain: "render.com",
        url: "https://render.com",
        description:
          "Deploy de apps, bancos e serviços com plano free generoso.",
      },
      {
        name: "Railway",
        domain: "railway.com",
        url: "https://railway.app",
        description:
          "Plataforma simples para deploy de backends e bancos.",
      },
      {
        name: "Vercel",
        domain: "vercel.com",
        url: "https://vercel.com",
        description:
          "Deploy frontend (e serverless) com foco em Next.js e DX.",
      },
      {
        name: "Locaweb",
        domain: "locaweb.com.br",
        url: "https://www.locaweb.com.br",
        description: "Hospedagem e serviços cloud brasileiros.",
      },
      {
        name: "Square Cloud",
        domain: "squarecloud.app",
        url: "https://squarecloud.app",
        description:
          "Hospedagem de bots e aplicações com foco em simplicidade.",
      },
    ],
  },
  {
    title: "Outros links BRABOS (na minha opnião)",
    tools: [
      {
        name: "Flow de Dados",
        domain: "flowdedados.com",
        url: "https://flowdedados.com",
        description:
          "Site de um cara sabido das coisas — conteúdo sobre dados e tech.",
      },
      {
        name: "Click the Red Button",
        domain: "clicktheredbutton.com",
        url: "https://clicktheredbutton.com",
        description:
          "Gerador de sites aleatórios curiosos, jogos e arte interativa.",
      },
      {
        name: "Radiooooo",
        domain: "app.radiooooo.com",
        url: "https://app.radiooooo.com",
        description:
          "Máquina do tempo musical: escolha país + década e descubra músicas.",
      },
      {
        name: "Radio Garden",
        domain: "radio.garden",
        url: "https://radio.garden",
        description:
          "Rádios do mundo inteiro em um mapa interativo.",
      },
      {
        name: "InspiroBot",
        domain: "inspirobot.me",
        url: "https://inspirobot.me",
        description:
          "Gera “citações inspiradoras” aleatórias (e hilárias).",
      },
    ],
  },
];

function ToolCard({ tool }: { tool: Tool }) {
  return (
    <a
      href={tool.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex gap-4 rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 transition hover:border-emerald-500/40 hover:bg-zinc-900"
    >
      <img
        src={`https://icon.horse/icon/${tool.domain}`}
        alt=""
        width={40}
        height={40}
        className="h-10 w-10 shrink-0 rounded-lg bg-zinc-800 object-contain"
        loading="lazy"
      />
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <h3 className="truncate font-semibold text-white group-hover:text-emerald-400">
            {tool.name}
          </h3>
          <span className="hidden text-xs text-zinc-500 sm:inline">
            {tool.domain}
          </span>
        </div>
        <p className="mt-1 text-sm leading-relaxed text-zinc-400">
          {tool.description}
        </p>
      </div>
      <span className="mt-1 shrink-0 text-emerald-400 opacity-0 transition group-hover:opacity-100">
        →
      </span>
    </a>
  );
}

function ToolsModal({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-zinc-950">
      {/* Header */}
      <header className="sticky top-0 z-10 flex items-center justify-between border-b border-zinc-800 bg-zinc-950/90 px-4 py-4 backdrop-blur sm:px-6">
        <div>
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            Ferramentas Webs
          </h2>
          <p className="mt-0.5 text-sm text-zinc-400">
            O que uso no dia a dia
          </p>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-700 text-zinc-300 transition hover:border-emerald-500/50 hover:bg-zinc-900 hover:text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
      </header>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="mx-auto max-w-3xl space-y-10 px-4 py-8 sm:px-6">
          {toolSections.map((section) => (
            <section key={section.title}>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-emerald-400">
                {section.title}
              </h3>
              <div className="space-y-3">
                {section.tools.map((tool) => (
                  <ToolCard key={tool.domain + tool.name} tool={tool} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Paty() {
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold text-white sm:text-4xl">Paty</h1>
        <p className="mt-2 text-zinc-400">Posts, ideias e reflexões.</p>
      </div>

      <div className="space-y-4">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="group rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 transition hover:border-emerald-500/30 hover:bg-zinc-900"
          >
            <time className="text-xs font-medium text-emerald-400">
              {post.date}
            </time>
            <h2 className="mt-1 text-xl font-semibold text-white group-hover:text-emerald-400">
              {post.title}
            </h2>
            <p className="mt-2 text-sm text-zinc-400">{post.excerpt}</p>
            <button
              type="button"
              onClick={() => setOpenSlug(post.slug)}
              className="mt-4 inline-block text-sm font-medium text-emerald-400 opacity-0 transition group-hover:opacity-100"
            >
              Ler mais →
            </button>
          </article>
        ))}
      </div>

      {openSlug === "ferramentas-webs" && (
        <ToolsModal onClose={() => setOpenSlug(null)} />
      )}
    </div>
  );
}
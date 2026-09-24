"use client";

import { useState, useEffect } from "react";
import { posts, toolSections, type Tool } from "~/data/thoughts";

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

function GuiaDevCard() {
  return (
    <a
      href="https://l3l4ck561.github.io/GuiaDEV/"
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 transition hover:border-emerald-500/40 hover:bg-zinc-900"
    >
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-zinc-700 bg-zinc-800 text-2xl transition group-hover:border-emerald-500/40">
          📚
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-semibold text-white group-hover:text-emerald-400">
              GuiaDEV
            </h2>

            <span className="hidden text-xs text-zinc-500 sm:inline">
              Kit Book Fullstack
            </span>
          </div>

          <p className="mt-1 text-sm leading-relaxed text-zinc-400">
            Um centro de anotações gerais para fullstack 
          </p>

          <span className="mt-3 inline-block text-sm font-medium text-emerald-400 transition">
            Acessar guia →
          </span>
        </div>
      </div>
    </a>
  );
}

export default function Thoughts() {
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold text-white sm:text-4xl">Thoughts</h1>
        <p className="mt-2 text-zinc-400">Posts, ideias e reflexões.</p>
      </div>

      <GuiaDevCard />

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
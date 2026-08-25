import { useEffect, useState } from "react";

const sections = [
  { id: "sobre", label: "Sobre mim" },
  { id: "experiencia", label: "Experiência" },
  { id: "skills", label: "Skills" },
  { id: "formacao", label: "Formação" },
  { id: "ic-apresentacoes", label: "IC & Apresentações" },
  { id: "mural", label: "Premiações & Participações" },
];

export default function CurriculumNav() {
  const [activeId, setActiveId] = useState("sobre");
  const [open, setOpen] = useState(false);

  // Detecta a seção visível enquanto rola a página
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-30% 0px -50% 0px",
        threshold: 0,
      }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 85;

      const y = el.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });

      setOpen(false);
    }
  };

  return (
    <>
      {/* Botão flutuante (mobile) */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 text-emerald-400 shadow-lg shadow-black/40 transition hover:border-emerald-500/50 hover:bg-zinc-800 md:hidden"
        aria-label="Abrir menu de seções"
      >
        {open ? (
          <span className="text-lg">✕</span>
        ) : (
          <span className="text-lg">☰</span>
        )}
      </button>

      {/* Overlay mobile */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Área de hover + menu (desktop) / painel (mobile) */}
      <div className="group/nav fixed z-50 md:right-0 md:top-1/2 md:-translate-y-1/2">
        {/* Faixa invisível de hover na borda direita (só desktop) */}
        <div className="absolute right-0 top-1/2 hidden h-48 w-20 -translate-y-1/2 md:block flex">
        Menu ❱
        </div>

        <nav
          className={`
            flex flex-col transition-all duration-300 ease-out

            /* Mobile: painel de baixo */
            fixed bottom-[-15px] left-0 right-0
            rounded-t-2xl border-t border-zinc-800 bg-zinc-950/95 p-5 backdrop-blur-md
            ${open ? "translate-y-0" : "translate-y-full"}

            /* Desktop: escondido na lateral, aparece no hover */
            md:static md:bottom-auto md:left-auto md:right-0
            md:w-52 md:translate-y-0 md:rounded-2xl md:border md:border-zinc-800
            md:bg-zinc-950/90 md:p-4 md:shadow-xl md:shadow-black/30
            md:translate-x-full md:opacity-0
            md:group-hover/nav:translate-x-0 md:group-hover/nav:opacity-100
            md:mr-5
          `}
        >
          <p className="mb-3 hidden text-xs font-medium uppercase tracking-wider text-zinc-500 md:block">
            Navegação
          </p>

          <ul className="space-y-1">
            {sections.map((section) => {
              const isActive = activeId === section.id;

              return (
                <li key={section.id}>
                  <button
                    type="button"
                    onClick={() => handleClick(section.id)}
                    className={`
                      flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition
                      ${
                        isActive
                          ? "bg-emerald-500/10 text-emerald-400"
                          : "text-zinc-400 hover:bg-zinc-800/80 hover:text-white"
                      }
                    `}
                  >
                    <span
                      className={`
                        h-1.5 w-1.5 shrink-0 rounded-full transition
                        ${isActive ? "bg-emerald-400" : "bg-zinc-600"}
                      `}
                    />
                    {section.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
}
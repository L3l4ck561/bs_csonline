// const posts = [
//   {
//     title: "Por que eu escolhi React Router v7",
//     excerpt: "Reflexões sobre a migração e as vantagens do framework mode.",
//     date: "15 Ago 2026",
//     slug: "react-router-v7",
//   },
// ];

export default function Paty() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold text-white sm:text-4xl">Paty</h1>
        <p className="mt-2 text-zinc-400">Posts, ideias e reflexões.</p>
      </div>

      <div className="space-y-4">
        {/* {posts.map((post) => (
          <article
            key={post.slug}
            className="group rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 transition hover:border-emerald-500/30 hover:bg-zinc-900"
          >
            <time className="text-xs font-medium text-emerald-400">{post.date}</time>
            <h2 className="mt-1 text-xl font-semibold text-white group-hover:text-emerald-400">
              {post.title}
            </h2>
            <p className="mt-2 text-sm text-zinc-400">{post.excerpt}</p>
            <span className="mt-4 inline-block text-sm font-medium text-emerald-400 opacity-0 transition group-hover:opacity-100">
              Ler mais →
            </span>
          </article>
        ))} */}
      </div>
    </div>
  );
}
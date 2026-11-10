export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[var(--surface)] px-6 text-center">
      <p className="font-grotesk text-sm uppercase tracking-widest text-sage">Erreur 404</p>
      <h1 className="mt-4 font-instrument text-5xl italic text-[var(--heading)] sm:text-7xl">
        Page introuvable
      </h1>
      <p className="mt-4 max-w-md font-grotesk text-base text-[var(--text-soft)]">
        La page que vous cherchez n'existe pas ou a été déplacée.
      </p>
      <a
        href="/"
        className="mt-8 rounded-full bg-forest px-6 py-3 font-grotesk text-sm text-cream transition-transform hover:scale-[1.03] hover:bg-forest/90"
      >
        Retour à l'accueil
      </a>
    </main>
  );
}

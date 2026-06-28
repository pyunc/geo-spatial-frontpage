import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <div className="mx-auto max-w-3xl px-5 py-28 text-center">
        <p className="eyebrow">404</p>
        <h1>Pagina nao encontrada</h1>
        <p>O caminho pode ter mudado ou nao estar mais disponivel.</p>
        <Link className="header-cta mt-8 inline-flex" href="/">
          Voltar para o inicio
        </Link>
      </div>
    </main>
  );
}

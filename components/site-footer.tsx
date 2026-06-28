import Link from "next/link";
import { Mail, MapPinned } from "lucide-react";
import { brand, solutions, useCases } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr] lg:px-8">
        <div>
          <Link className="brand-mark brand-mark--footer" href="/">
            <MapPinned aria-hidden="true" className="h-5 w-5" />
            <span>{brand.name}</span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-6 text-white/70">
            Inteligencia geoespacial para encontrar mercados, contas e regioes com maior potencial.
          </p>
          <a className="mt-5 inline-flex items-center gap-2 text-sm text-white/80 transition hover:text-white" href={`mailto:${brand.email}`}>
            <Mail aria-hidden="true" className="h-4 w-4" />
            {brand.email}
          </a>
        </div>
        <div>
          <h2>Solucoes</h2>
          <nav aria-label="Solucoes no rodape">
            {solutions.map((solution) => (
              <Link href={`/solucoes/${solution.slug}`} key={solution.slug}>
                {solution.navTitle}
              </Link>
            ))}
          </nav>
        </div>
        <div>
          <h2>Casos de uso</h2>
          <nav aria-label="Casos de uso no rodape">
            {useCases.map((useCase) => (
              <Link href={`/casos-de-uso/${useCase.slug}`} key={useCase.slug}>
                {useCase.navTitle}
              </Link>
            ))}
          </nav>
        </div>
        <div>
          <h2>Empresa</h2>
          <nav aria-label="Empresa no rodape">
            <Link href="/contato">Contato</Link>
            <Link href="/#demo">Demo</Link>
            <Link href="/#solucoes">Plataforma</Link>
          </nav>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-white/50">
        © 2026 rua1.ai. Todos os direitos reservados.
      </div>
    </footer>
  );
}

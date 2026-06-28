import Link from "next/link";
import { ArrowRight, CheckCircle2, MousePointer2, Play, ShieldCheck } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { FeatureIcon } from "@/components/icons";
import { ProductMap } from "@/components/product-map";
import { brand, homeHighlights, solutions, useCases } from "@/data/site";

export default function Home() {
  return (
    <main>
      <section className="home-hero">
        <ProductMap immersive mode="market" />
        <div className="home-hero__shade" />
        <div className="home-hero__content mx-auto max-w-7xl px-5 lg:px-8">
          <p className="eyebrow">Inteligencia geoespacial para go-to-market</p>
          <h1>{brand.name}</h1>
          <p>
            Mapeie mercados, priorize contas e escolha regioes de expansao com dados territoriais
            transformados em acao comercial.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/contato">Agendar demo</ButtonLink>
            <ButtonLink href="#solucoes" variant="secondary">
              Ver solucoes
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="trust-strip" aria-label="Indicadores da plataforma">
        <div className="mx-auto grid max-w-7xl gap-4 px-5 py-7 md:grid-cols-3 lg:px-8">
          <div>
            <ShieldCheck aria-hidden="true" className="h-5 w-5" />
            <span>Desenhado para dados LGPD-first</span>
          </div>
          <div>
            <MousePointer2 aria-hidden="true" className="h-5 w-5" />
            <span>Fluxo pensado para negocio, nao apenas analistas</span>
          </div>
          <div>
            <CheckCircle2 aria-hidden="true" className="h-5 w-5" />
            <span>Validacao comercial rapida com dados e mapas</span>
          </div>
        </div>
      </section>

      <section className="content-band" id="solucoes">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="section-heading">
            <p className="eyebrow">Solucoes</p>
            <h2>Uma plataforma para transformar territorio em pipeline, expansao e decisao.</h2>
          </div>
          <div className="solution-grid">
            {solutions.map((solution) => (
              <Link className="solution-card" href={`/solucoes/${solution.slug}`} key={solution.slug}>
                <span className="solution-card__icon">
                  <FeatureIcon name={solution.features[0].icon} />
                </span>
                <span className="solution-card__eyebrow">{solution.eyebrow}</span>
                <h3>{solution.navTitle}</h3>
                <p>{solution.description}</p>
                <span className="solution-card__link">
                  Explorar
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="demo-band" id="demo">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-[1fr_1fr] lg:px-8">
          <div className="section-copy">
            <p className="eyebrow">Produto</p>
            <h2>A primeira demo ja nasce com cara de ferramenta.</h2>
            <p>
              A experiencia central mostra filtros, camadas, score e oportunidades no mesmo espaco.
              Isso ajuda clientes a entenderem rapidamente o valor antes de qualquer integracao complexa.
            </p>
            <div className="demo-actions">
              <ButtonLink href="/contato">Solicitar acesso</ButtonLink>
              <Link className="play-link" href="/casos-de-uso/inteligencia-de-mercado">
                <Play aria-hidden="true" className="h-4 w-4" />
                Ver caso de uso
              </Link>
            </div>
          </div>
          <ProductMap compact mode="leads" />
        </div>
      </section>

      <section className="content-band content-band--light">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="section-heading">
            <p className="eyebrow">Casos de uso</p>
            <h2>Os tres caminhos mais fortes para validar a demanda.</h2>
          </div>
          <div className="use-case-grid">
            {useCases.map((useCase) => (
              <Link className="use-case-card" href={`/casos-de-uso/${useCase.slug}`} key={useCase.slug}>
                <span>{useCase.eyebrow}</span>
                <h3>{useCase.navTitle}</h3>
                <p>{useCase.description}</p>
                <strong>{useCase.heroMetric}</strong>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="content-band">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-20 md:grid-cols-3 lg:px-8">
          {homeHighlights.map((item) => (
            <article className="highlight-card" key={item.title}>
              <span>{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="final-cta">
        <div className="mx-auto max-w-7xl px-5 py-20 text-center lg:px-8">
          <p className="eyebrow">Validacao rapida</p>
          <h2>Comece com uma demo de territorio e evolua para dados reais.</h2>
          <p>
            A primeira versao pode operar com dados publicos, bases do cliente e amostras controladas
            para provar valor antes de escalar infraestrutura.
          </p>
          <ButtonLink href="/contato">Agendar conversa</ButtonLink>
        </div>
      </section>
    </main>
  );
}

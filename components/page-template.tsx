import { CheckCircle2 } from "lucide-react";
import type { PageContent } from "@/data/site";
import { ButtonLink } from "@/components/button-link";
import { FeatureIcon } from "@/components/icons";
import { ProductMap } from "@/components/product-map";

type PageTemplateProps = {
  content: PageContent;
  sectionLabel: "Solucao" | "Caso de uso" | "Segmento";
};

export function PageTemplate({ content, sectionLabel }: PageTemplateProps) {
  return (
    <main>
      <section className="page-hero">
        <ProductMap immersive mode={content.visualMode} />
        <div className="page-hero__shade" />
        <div className="page-hero__content mx-auto max-w-7xl px-5 lg:px-8">
          <p className="eyebrow">{sectionLabel} / {content.eyebrow}</p>
          <h1>{content.title}</h1>
          <p>{content.description}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/contato">{content.primaryCta}</ButtonLink>
            <ButtonLink href="/#demo" variant="secondary">
              {content.secondaryCta}
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="metrics-band">
        <div className="mx-auto grid max-w-7xl gap-4 px-5 py-8 md:grid-cols-3 lg:px-8">
          {content.metrics.map((metric) => (
            <div className="metric-card" key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="content-band">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div className="section-copy">
            <p className="eyebrow">Como funciona</p>
            <h2>{content.heroMetric}</h2>
            <p>
              A pagina combina dados de territorio com uma interface de decisao para transformar pesquisa,
              planejamento e operacao em um fluxo unico.
            </p>
          </div>
          <div className="feature-grid">
            {content.features.map((feature) => (
              <article className="feature-card" key={feature.title}>
                <span className="feature-card__icon">
                  <FeatureIcon name={feature.icon} />
                </span>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="workflow-band">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-[1fr_1fr] lg:px-8">
          <div>
            <p className="eyebrow">Fluxo</p>
            <h2>De pergunta de negocio para territorio acionavel</h2>
          </div>
          <ol className="workflow-list">
            {content.workflow.map((item, index) => (
              <li key={item}>
                <span>{index + 1}</span>
                <p>{item}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="content-band content-band--light">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <ProductMap compact mode={content.visualMode} />
          <div className="outcome-panel">
            <p className="eyebrow">Resultados esperados</p>
            <h2>O que o time passa a decidir melhor</h2>
            <div className="outcome-list">
              {content.outcomes.map((outcome) => (
                <div key={outcome}>
                  <CheckCircle2 aria-hidden="true" className="h-5 w-5" />
                  <span>{outcome}</span>
                </div>
              ))}
            </div>
            <ButtonLink href="/contato">Conversar sobre {content.title}</ButtonLink>
          </div>
        </div>
      </section>
    </main>
  );
}

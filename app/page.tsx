import Link from "next/link";
import { ArrowRight, Megaphone, Play, Route, Smartphone, Users } from "lucide-react";
import { AnalysisVideoTabs } from "@/components/analysis-video-tabs";
import { ButtonLink } from "@/components/button-link";
import { DataUniverse } from "@/components/data-universe";
import { FeatureIcon } from "@/components/icons";
import { ProductMap } from "@/components/product-map";
import { SegmentCarousel } from "@/components/segment-carousel";
import { homeHighlights, solutions, useCases } from "@/data/site";

const platformStats = [
  { value: "7%", label: "do PIB do Brasil mapeado" },
  { value: "+130", label: "Bases de dados" },
  { value: "+20", label: "Países cobertos" },
  { value: "+50K", label: "Cidades cobertas" },
  { value: "+60M", label: "Empresas cadastradas" },
  { value: "+100M", label: "Dispositivos móveis geolocalizados" },
];

const mobileApplications = [
  {
    title: "Audience",
    description: "Para campanhas de mídia paga que buscam eficiência, menor custo por conversão e audiência qualificada.",
    href: "/solucoes/audience",
    icon: Smartphone,
  },
  {
    title: "Map Builder",
    description: "Para prospecção B2B hiperqualificada, inteligência competitiva e estratégias territoriais mais efetivas.",
    href: "/solucoes/mapa-inteligente",
    icon: Route,
  },
];

const mobileSignals = [
  {
    value: "+100",
    suffix: "milhões de Celulares",
    description: "Geolocalizados e monitorados para criar insights únicos",
    icon: Smartphone,
  },
  {
    value: "",
    suffix: "Fluxo de pessoas por via e áreas de influência de estabelecimentos",
    description: "",
    icon: Route,
  },
  {
    value: "",
    suffix: "Quantidade de consumidores e sua classe de renda em cada estabelecimento",
    description: "",
    icon: Users,
  },
  {
    value: "",
    suffix: "Segmentação de público para campanhas em plataformas de mídia paga",
    description: "",
    icon: Megaphone,
  },
];

export default function Home() {
  return (
    <main>
      <section className="home-hero home-hero--data">
        <div className="home-hero__content home-hero__content--data mx-auto max-w-7xl px-5 lg:px-8">
          <p className="eyebrow">rua1.ai / Inteligência geoespacial</p>
          <h1>
            Inteligência espacial para <span className="italic">  Go-To-Market</span>
          </h1>
          <p>
            Rua1.ai automatiza a análise territorial, identifica oportunidades e entrega recomendações estratégicas — tudo em uma plataforma que aprende com o contexto do seu negócio.
            Não é apenas uma ferramenta de análise.
            A inteligência por trás de cada decisão de crescimento.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/contato">Falar com especialista</ButtonLink>
          </div>
        </div>
        <DataUniverse />
      </section>

      <section className="numbers-strip" aria-label="Números gerais da plataforma">
        <div className="numbers-strip__grid mx-auto max-w-7xl px-5 py-12 lg:px-8">
          {platformStats.map((stat) => (
            <div className="numbers-strip__item" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mobile-data-section" aria-labelledby="mobile-data-title">
        <div className="mobile-data-section__image" />
        <div className="mobile-data-section__content mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="mobile-data-section__copy">
            <p className="mobile-data-section__eyebrow">Dados Mobile</p>
            <h2 id="mobile-data-title">
              Revolucione seu Go-To-Market com dados exclusivos de movimentação de celulares
            </h2>
            <p>
              A rua1.ai analisa sinais de localização para mapear hábitos de consumo, otimizar campanhas
              e enriquecer análises de mercado com dados consentidos, anonimizados e alinhados à LGPD.
            </p>

            <div className="mobile-data-section__links">
              {mobileApplications.map((item) => {
                const Icon = item.icon;

                return (
                  <Link href={item.href} key={item.title}>
                    <Icon aria-hidden="true" className="h-7 w-7" />
                    <span>
                      <strong>{item.title}</strong>
                      <small>Saiba mais →</small>
                    </span>
                    <p>{item.description}</p>
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="mobile-data-section__cards">
            {mobileSignals.map((item) => {
              const Icon = item.icon;

              return (
                <article className="mobile-data-card" key={item.suffix}>
                  <Icon aria-hidden="true" className="h-8 w-8" />
                  {item.value ? (
                    <strong>
                      {item.value}
                      <span>{item.suffix}</span>
                    </strong>
                  ) : (
                    <strong className="mobile-data-card__plain">{item.suffix}</strong>
                  )}
                  {item.description ? <p>{item.description}</p> : null}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="analysis-showcase" aria-labelledby="analysis-showcase-title">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="analysis-showcase__heading">
            <p className="analysis-showcase__eyebrow">Análises</p>
            <h2 id="analysis-showcase-title">Inteligência de Mercado que direciona sua estratégia comercial</h2>
            <p>
              A rua1.ai combina dados geolocalizados, perfis demográficos e variáveis de mercado para entregar
              análises que orientam decisões estratégicas, fortalecem sua presença territorial e revelam novas
              oportunidades de expansão.
            </p>
          </div>

          <AnalysisVideoTabs />
        </div>
      </section>

      <SegmentCarousel />

      {/* <section className="content-band" id="solucoes">
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
      </section> */}

      










      {/* <section className="demo-band" id="demo">
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
      </section> */}

      {/* <section className="content-band content-band--light">
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
      </section> */}

      {/* cases */}

      





      {/* <section className="content-band">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-20 md:grid-cols-3 lg:px-8">
          {homeHighlights.map((item) => (
            <article className="highlight-card" key={item.title}>
              <span>{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section> */}

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

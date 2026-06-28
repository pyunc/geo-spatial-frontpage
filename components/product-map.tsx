import { ArrowUpRight, Building2, Layers, LocateFixed, MapPin, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import type { PageContent } from "@/data/site";

type ProductMapProps = {
  mode?: PageContent["visualMode"];
  immersive?: boolean;
  compact?: boolean;
};

const modeCopy: Record<PageContent["visualMode"], { title: string; label: string; score: string }> = {
  market: {
    title: "Sao Paulo - oportunidades",
    label: "Mercado",
    score: "82",
  },
  leads: {
    title: "Contas B2B priorizadas",
    label: "Prospeccao",
    score: "91",
  },
  expansion: {
    title: "Candidatas para expansao",
    label: "Expansao",
    score: "76",
  },
  audience: {
    title: "Audiencias por territorio",
    label: "Audience",
    score: "68",
  },
  data: {
    title: "Pipelines geoespaciais",
    label: "Data",
    score: "99",
  },
};

const pins = [
  { left: "18%", top: "34%", tone: "mint" },
  { left: "34%", top: "58%", tone: "coral" },
  { left: "52%", top: "39%", tone: "aqua" },
  { left: "67%", top: "62%", tone: "mint" },
  { left: "78%", top: "28%", tone: "coral" },
];

const leads = [
  ["Rede Prado", "94", "Fit alto"],
  ["Alvo Norte", "88", "Boa praca"],
  ["Casa Vega", "81", "Nova rota"],
];

export function ProductMap({ compact = false, immersive = false, mode = "market" }: ProductMapProps) {
  const copy = modeCopy[mode];

  return (
    <div className={cn("product-map", immersive && "product-map--immersive", compact && "product-map--compact")}>
      <div className="product-map__topbar">
        <div className="product-map__window">
          <span />
          <span />
          <span />
        </div>
        <div className="product-map__search">
          <LocateFixed aria-hidden="true" className="h-4 w-4" />
          <span>{copy.title}</span>
        </div>
        <div className="product-map__status">
          <Sparkles aria-hidden="true" className="h-4 w-4" />
          <span>score ativo</span>
        </div>
      </div>

      <div className="product-map__body">
        <aside className="product-map__filters" aria-label="Filtros de territorio">
          <div className="product-map__filter-title">
            <Layers aria-hidden="true" className="h-4 w-4" />
            <span>Camadas</span>
          </div>
          {["Empresas", "Renda", "Concorrentes", "Fluxo"].map((item, index) => (
            <div className="product-map__toggle" key={item}>
              <span className={index % 2 === 0 ? "is-on" : ""} />
              <small>{item}</small>
            </div>
          ))}
          <div className="product-map__score">
            <span>{copy.label}</span>
            <strong>{copy.score}</strong>
          </div>
        </aside>

        <div className="product-map__canvas" aria-label="Mapa analitico">
          <span className="map-road map-road--one" />
          <span className="map-road map-road--two" />
          <span className="map-road map-road--three" />
          <span className="map-zone map-zone--one" />
          <span className="map-zone map-zone--two" />
          <span className="map-zone map-zone--three" />
          {pins.map((pin) => (
            <span className={cn("map-pin", `map-pin--${pin.tone}`)} key={`${pin.left}-${pin.top}`} style={{ left: pin.left, top: pin.top }}>
              <MapPin aria-hidden="true" className="h-4 w-4" />
            </span>
          ))}
          <div className="map-callout">
            <span>Area prioritaria</span>
            <strong>+34% potencial</strong>
          </div>
        </div>

        <aside className="product-map__leads" aria-label="Oportunidades priorizadas">
          <div className="product-map__lead-header">
            <Building2 aria-hidden="true" className="h-4 w-4" />
            <span>Oportunidades</span>
          </div>
          {leads.map(([name, score, reason]) => (
            <div className="lead-row" key={name}>
              <div>
                <strong>{name}</strong>
                <small>{reason}</small>
              </div>
              <span>{score}</span>
            </div>
          ))}
          <div className="product-map__insight">
            <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
            <span>Nova praca recomendada</span>
          </div>
        </aside>
      </div>
    </div>
  );
}

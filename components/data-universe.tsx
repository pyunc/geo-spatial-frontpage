type DatasetItem = {
  description: string;
  exclusive?: boolean;
  label: string;
};

const datasetGroups: Array<{ id: string; items: DatasetItem[] }> = [
  {
    id: "parcels",
    items: [
      {
        label: "Dados Cadastrais",
        description: "Porte, CNAE, idade, socios, natureza juridica e perfil de empresas.",
      },
      {
        label: "Dados Fiscais",
        description: "Tributacao, dividas em orgaos publicos, encargos e Simples Nacional.",
      },
    ],
  },
  {
    id: "routes",
    items: [
      {
        label: "Dados Estimados",
        description: "Faturamento, funcionarios, potencial de PDV e indicadores preditivos.",
      },
      {
        label: "Dados Online",
        description: "Site, atividade digital, avaliacoes, nota, servicos e midias sociais.",
      },
    ],
  },
  {
    id: "points",
    items: [
      {
        label: "Dados Localizados",
        description: "Renda, fluxo, consumo por produto e leitura do entorno comercial.",
      },
      {
        label: "Dados Segmentados",
        description: "Obras, outorgas, mercado livre, matriculas, condominios e apartamentos.",
      },
    ],
  },
  {
    id: "heatmap",
    items: [
      {
        label: "Dados Censitários",
        description: "Renda, populacao, faixas etarias, domicilios e recortes territoriais.",
      },
      {
        label: "Dados Econômicos",
        description: "PIB por setor, RAIS, CAGED, regioes de influencia e dinamica local.",
      },
    ],
  },
  {
    id: "green",
    items: [
      {
        label: "Dados de Consumo",
        description: "Consumo por categoria de produto e classe de renda em reais.",
      },
      {
        label: "Dados Comerciais",
        description: "Atividades do entorno, nivel de aquecimento, subcentros e concorrencia.",
      },
    ],
  },
  {
    id: "pins",
    items: [
      {
        label: "Dados Mobile",
        description: "Fluxo de celulares, perfil de publico e segmentacao de audiencia.",
        exclusive: true,
      },
      {
        label: "Dados Proprietários",
        description: "Categorias proprias para alimentos, automotivo, vestuario e outros segmentos.",
      },
    ],
  },
];

function DatasetPill({ item }: { item: DatasetItem }) {
  return (
    <div className="dataset-pill" tabIndex={0}>
      <div className="dataset-pill__header">
        <span>{item.label}</span>
        {item.exclusive ? <em>Exclusivo</em> : null}
        <strong aria-hidden="true">+</strong>
      </div>
      <p>{item.description}</p>
    </div>
  );
}

export function DataUniverse() {
  return (
    <div className="data-universe" aria-label="Tipos de dados integrados pela rua1.ai">
      <div className="data-universe__visual" aria-hidden="true" />

      <div className="data-universe__hub" aria-hidden="true">
        <span>r</span>
        <small>rua1.ai</small>
      </div>

      <div className="data-universe__groups">
        {datasetGroups.map((group) => (
          <div className={`data-universe__group data-universe__group--${group.id}`} key={group.id}>
            {group.items.map((item) => (
              <DatasetPill item={item} key={item.label} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

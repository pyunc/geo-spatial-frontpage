export type IconName =
  | "Map"
  | "Brain"
  | "Target"
  | "Users"
  | "Database"
  | "TrendingUp"
  | "Search"
  | "Building2"
  | "Route"
  | "Layers"
  | "Radar"
  | "Sparkles";

export type Metric = {
  value: string;
  label: string;
};

export type Feature = {
  title: string;
  description: string;
  icon: IconName;
};

export type PageContent = {
  slug: string;
  navTitle: string;
  title: string;
  eyebrow: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  heroMetric: string;
  metrics: Metric[];
  features: Feature[];
  workflow: string[];
  outcomes: string[];
  visualMode: "market" | "leads" | "expansion" | "audience" | "data";
};

export const brand = {
  name: "rua1.ai",
  tagline: "Inteligencia geoespacial para decisoes de mercado",
  email: "hello@rua1.ai",
};

export const solutions: PageContent[] = [
  {
    slug: "mapa-inteligente",
    navTitle: "Mapa Inteligente",
    title: "Mapa Inteligente",
    eyebrow: "Plataforma",
    description:
      "Explore empresas, territorios, demanda e concorrencia em uma interface geografica criada para times comerciais, expansao e estrategia.",
    primaryCta: "Ver plataforma",
    secondaryCta: "Falar com especialista",
    heroMetric: "Territorios vivos, nao planilhas soltas",
    visualMode: "market",
    metrics: [
      { value: "360°", label: "visao de mercado por regiao" },
      { value: "5 min", label: "para montar um recorte de territorio" },
      { value: "1 mapa", label: "para vendas, expansao e marketing" },
    ],
    features: [
      {
        title: "Camadas comerciais",
        description:
          "Combine empresas, setores, receita estimada, fluxo, renda e concorrentes no mesmo mapa.",
        icon: "Layers",
      },
      {
        title: "Filtros acionaveis",
        description:
          "Crie segmentos por porte, CNAE, regiao, potencial, cobertura e distancia de polos.",
        icon: "Search",
      },
      {
        title: "Territorios colaborativos",
        description:
          "Transforme regioes em listas, carteiras, rotas e briefings para o time operar.",
        icon: "Route",
      },
    ],
    workflow: [
      "Escolha um mercado, cidade ou area de influencia.",
      "Aplique camadas de empresas, consumo e concorrencia.",
      "Salve o territorio e envie listas ou insights para o time.",
    ],
    outcomes: [
      "Menos tempo juntando dados de fontes diferentes.",
      "Mais contexto para priorizar bairros, rotas e carteiras.",
      "Uma linguagem comum entre estrategia e execucao.",
    ],
  },
  {
    slug: "ia-prospeccao",
    navTitle: "IA de Prospeccao",
    title: "IA de Prospeccao",
    eyebrow: "Crescimento B2B",
    description:
      "Priorize contas com maior propensao de compra usando sinais geograficos, firmograficos e contexto competitivo.",
    primaryCta: "Priorizar leads",
    secondaryCta: "Ver casos B2B",
    heroMetric: "Listas com contexto, nao apenas volume",
    visualMode: "leads",
    metrics: [
      { value: "Score", label: "por fit, potencial e proximidade" },
      { value: "ICP", label: "replicavel por segmento" },
      { value: "CRM", label: "pronto para enriquecer pipeline" },
    ],
    features: [
      {
        title: "Score por territorio",
        description:
          "Classifique empresas por similaridade com clientes ideais, cluster economico e area atendida.",
        icon: "Target",
      },
      {
        title: "Sinais de compra",
        description:
          "Use crescimento regional, densidade setorial e presenca de concorrentes como pistas de timing.",
        icon: "Radar",
      },
      {
        title: "Briefing para abordagem",
        description:
          "Entregue para SDRs uma razao clara para contatar cada conta e cada regiao.",
        icon: "Sparkles",
      },
    ],
    workflow: [
      "Defina o perfil de cliente ideal com exemplos reais.",
      "Cruze empresas com territorio, setor, porte e sinais de mercado.",
      "Gere listas priorizadas com justificativa para cada oportunidade.",
    ],
    outcomes: [
      "Pipeline com mais foco e menos contas genericas.",
      "Abordagens com argumento local e comercial.",
      "Mais disciplina para comparar pracas e segmentos.",
    ],
  },
  {
    slug: "ia-expansao",
    navTitle: "IA de Expansao",
    title: "IA de Expansao",
    eyebrow: "Novas unidades",
    description:
      "Encontre regioes candidatas para novas lojas, franquias, hubs ou representantes com base em demanda, cobertura e competencia local.",
    primaryCta: "Simular expansao",
    secondaryCta: "Explorar regioes",
    heroMetric: "Escolhas de ponto com evidencia",
    visualMode: "expansion",
    metrics: [
      { value: "Ranking", label: "de regioes candidatas" },
      { value: "Canibalizacao", label: "estimada antes da decisao" },
      { value: "Raio", label: "de influencia ajustavel" },
    ],
    features: [
      {
        title: "Recomendacao de praca",
        description:
          "Compare bairros e cidades por demanda potencial, lacunas de cobertura e intensidade competitiva.",
        icon: "TrendingUp",
      },
      {
        title: "Analise de cobertura",
        description:
          "Entenda sobreposicoes entre unidades, representantes, clientes e concorrentes.",
        icon: "Map",
      },
      {
        title: "Cenarios de investimento",
        description:
          "Monte cenarios por custo, potencial, risco e velocidade de entrada.",
        icon: "Building2",
      },
    ],
    workflow: [
      "Carregue unidades atuais, clientes e regioes de interesse.",
      "Defina criterios de expansao e pesos de decisao.",
      "Compare cenarios e escolha as pracas com melhor equilibrio.",
    ],
    outcomes: [
      "Expansao menos dependente de intuicao isolada.",
      "Mais clareza sobre onde abrir, vender ou contratar.",
      "Decisoes defendiveis para lideranca e investidores.",
    ],
  },
  {
    slug: "audience",
    navTitle: "Audience",
    title: "Audience",
    eyebrow: "Segmentacao",
    description:
      "Crie publicos territoriais para campanhas, estudos de demanda e ativações comerciais com recortes locais precisos.",
    primaryCta: "Criar audiencia",
    secondaryCta: "Ver segmentos",
    heroMetric: "Publicos que respeitam o territorio",
    visualMode: "audience",
    metrics: [
      { value: "Clusters", label: "por comportamento e regiao" },
      { value: "Midia", label: "com recortes mais inteligentes" },
      { value: "Trade", label: "alinhado com campo e vendas" },
    ],
    features: [
      {
        title: "Segmentos por local",
        description:
          "Construa publicos a partir de bairros, rotas, polos, renda, densidade e interesse comercial.",
        icon: "Users",
      },
      {
        title: "Ativacao regional",
        description:
          "Conecte marketing, trade e vendas com a mesma leitura de oportunidade local.",
        icon: "Target",
      },
      {
        title: "Leitura de potencial",
        description:
          "Entenda quais audiencias justificam investimento antes de ampliar campanhas.",
        icon: "Brain",
      },
    ],
    workflow: [
      "Selecione regioes prioritarias e criterios de publico.",
      "Compare densidade, renda, fluxo e concorrencia.",
      "Exporte recortes para planejamento de campanha ou campo.",
    ],
    outcomes: [
      "Campanhas menos amplas e mais conectadas ao territorio.",
      "Briefings melhores para midia e operacao local.",
      "Mais consistencia entre segmentacao e meta comercial.",
    ],
  },
  {
    slug: "dados-como-servico",
    navTitle: "Dados como Servico",
    title: "Dados como Servico",
    eyebrow: "Data products",
    description:
      "Receba bases enriquecidas, APIs e pipelines geoespaciais para alimentar modelos, CRMs, BI e produtos internos.",
    primaryCta: "Planejar dados",
    secondaryCta: "Ver arquitetura",
    heroMetric: "Dados prontos para virar decisao",
    visualMode: "data",
    metrics: [
      { value: "API", label: "para sistemas internos" },
      { value: "BI", label: "com geografia tratada" },
      { value: "LGPD", label: "como requisito de desenho" },
    ],
    features: [
      {
        title: "Enriquecimento de bases",
        description:
          "Padronize enderecos, geocodifique empresas e adicione atributos de mercado por area.",
        icon: "Database",
      },
      {
        title: "Pipelines recorrentes",
        description:
          "Atualize dados de territorio, carteiras e potencial com qualidade operacional.",
        icon: "Route",
      },
      {
        title: "Modelos customizados",
        description:
          "Crie scores e recortes proprietarios para as suas regras de negocio.",
        icon: "Brain",
      },
    ],
    workflow: [
      "Mapeie bases internas e perguntas de negocio.",
      "Defina enriquecimentos, frequencia e contrato de entrega.",
      "Integre dados em BI, CRM, app ou modelo de decisao.",
    ],
    outcomes: [
      "Dados geograficos mais confiaveis no dia a dia.",
      "Menos retrabalho entre analise, engenharia e negocio.",
      "Base pronta para novos produtos de inteligencia.",
    ],
  },
];

export const useCases: PageContent[] = [
  {
    slug: "inteligencia-de-mercado",
    navTitle: "Inteligencia de Mercado",
    title: "Inteligencia de Mercado",
    eyebrow: "Caso de uso",
    description:
      "Entenda onde o mercado cresce, onde a concorrencia pressiona e quais regioes merecem atencao antes do proximo ciclo comercial.",
    primaryCta: "Mapear mercado",
    secondaryCta: "Ver solucoes",
    heroMetric: "Visao executiva com granularidade de rua",
    visualMode: "market",
    metrics: [
      { value: "Regioes", label: "comparadas por potencial" },
      { value: "Concorrencia", label: "lida no mapa" },
      { value: "Timing", label: "para agir com mais contexto" },
    ],
    features: [
      {
        title: "Leitura territorial",
        description:
          "Saia de medias nacionais e entenda mercados por cidade, bairro, polo e area de influencia.",
        icon: "Map",
      },
      {
        title: "Contexto competitivo",
        description:
          "Veja onde concorrentes concentram presenca e onde existem espacos subatendidos.",
        icon: "Radar",
      },
      {
        title: "Decisao compartilhada",
        description:
          "Transforme analises em mapas, listas e criterios que todos conseguem discutir.",
        icon: "Users",
      },
    ],
    workflow: [
      "Defina a pergunta de mercado e o territorio de analise.",
      "Compare camadas de demanda, empresas, renda e concorrencia.",
      "Priorize regioes com score e narrativa executiva.",
    ],
    outcomes: [
      "Planejamento comercial com base territorial clara.",
      "Menos dependencia de analises isoladas em planilhas.",
      "Melhores discussoes entre diretoria, marketing e campo.",
    ],
  },
  {
    slug: "prospeccao-b2b",
    navTitle: "Prospeccao B2B",
    title: "Prospeccao B2B",
    eyebrow: "Caso de uso",
    description:
      "Encontre empresas com maior aderencia ao seu ICP e entregue listas acionaveis para vendas com contexto local.",
    primaryCta: "Gerar lista",
    secondaryCta: "Conhecer IA",
    heroMetric: "Menos leads frios, mais contas com razao",
    visualMode: "leads",
    metrics: [
      { value: "ICP", label: "traduzido em criterios" },
      { value: "Score", label: "explicavel por conta" },
      { value: "SDR", label: "com argumentos locais" },
    ],
    features: [
      {
        title: "Contas parecidas com seus clientes",
        description:
          "Use padroes de clientes atuais para encontrar empresas com maior fit comercial.",
        icon: "Target",
      },
      {
        title: "Priorizacao por praca",
        description:
          "Entenda quais regioes concentram oportunidades suficientes para uma campanha.",
        icon: "TrendingUp",
      },
      {
        title: "Pesquisa com contexto",
        description:
          "Combine dados de empresa, territorio e concorrencia para orientar a abordagem.",
        icon: "Search",
      },
    ],
    workflow: [
      "Informe exemplos de bons clientes e mercados prioritarios.",
      "Aplique filtros de setor, porte, localizacao e potencial.",
      "Exporte listas, motivos de fit e territorios para o time.",
    ],
    outcomes: [
      "Mais precisao na escolha de contas.",
      "Campanhas outbound com melhor explicacao comercial.",
      "Vendas e marketing trabalhando o mesmo territorio.",
    ],
  },
  {
    slug: "expansao",
    navTitle: "Expansao",
    title: "Expansao",
    eyebrow: "Caso de uso",
    description:
      "Compare novas regioes de atuacao e escolha onde abrir unidade, contratar campo ou reforcar cobertura com menos incerteza.",
    primaryCta: "Avaliar regioes",
    secondaryCta: "Ver simulador",
    heroMetric: "Expansao com mapa, score e criterio",
    visualMode: "expansion",
    metrics: [
      { value: "Pontos", label: "avaliados por potencial" },
      { value: "Cobertura", label: "atual versus desejada" },
      { value: "Risco", label: "visivel antes do investimento" },
    ],
    features: [
      {
        title: "Ranking de regioes",
        description:
          "Compare candidatas usando demanda, concorrencia, logistica, renda e presenca atual.",
        icon: "TrendingUp",
      },
      {
        title: "Canibalizacao e cobertura",
        description:
          "Visualize sobreposicoes entre unidades existentes e novas areas de influencia.",
        icon: "Layers",
      },
      {
        title: "Plano de entrada",
        description:
          "Crie uma sequencia de pracas por impacto, custo e facilidade operacional.",
        icon: "Route",
      },
    ],
    workflow: [
      "Suba unidades, areas atendidas e metas de expansao.",
      "Simule candidatas com pesos comerciais e operacionais.",
      "Monte um plano de entrada por prioridade e dependencia.",
    ],
    outcomes: [
      "Prioridade clara para lojas, representantes ou hubs.",
      "Argumentos melhores para aprovar investimento.",
      "Visao antecipada de riscos territoriais.",
    ],
  },
];

export const homeHighlights = [
  {
    label: "Para estrategia",
    title: "Veja o mercado por territorio",
    description:
      "Compare regioes por potencial, concorrencia, densidade de empresas e sinais de demanda.",
  },
  {
    label: "Para vendas",
    title: "Priorize contas com contexto",
    description:
      "Transforme listas enormes em carteiras com score, motivo de fit e leitura local.",
  },
  {
    label: "Para expansao",
    title: "Escolha onde crescer",
    description:
      "Simule novas pracas, cobertura e canibalizacao antes de investir em campo.",
  },
];

export function getSolution(slug: string) {
  return solutions.find((solution) => solution.slug === slug);
}

export function getUseCase(slug: string) {
  return useCases.find((useCase) => useCase.slug === slug);
}

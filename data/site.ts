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
  | "Sparkles"
  | "Sprout"
  | "ShoppingCart"
  | "Car"
  | "HardHat"
  | "GraduationCap"
  | "Zap"
  | "CreditCard"
  | "ShoppingBag"
  | "HeartPulse"
  | "Satellite";

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

export const segments: PageContent[] = [
  {
    slug: "agro",
    navTitle: "Agro",
    title: "Agro",
    eyebrow: "Segmento",
    description:
      "Para empresas que vendem produtos, servicos, credito, tecnologia ou insumos para produtores e negocios rurais.",
    primaryCta: "Mapear agro",
    secondaryCta: "Ver plataforma",
    heroMetric: "Territorios rurais com leitura comercial",
    visualMode: "market",
    metrics: [
      { value: "Safras", label: "e polos produtivos no mapa" },
      { value: "ICP", label: "por perfil de produtor e regiao" },
      { value: "Rotas", label: "para campo, revenda e distribuicao" },
    ],
    features: [
      {
        title: "Mercados agro prioritarios",
        description:
          "Compare regioes por cultura, potencial economico, distancia operacional e densidade de produtores.",
        icon: "Sprout",
      },
      {
        title: "Prospeccao por territorio",
        description:
          "Monte listas de contas e parceiros com fit para produtos, servicos e credito rural.",
        icon: "Target",
      },
      {
        title: "Expansao de cobertura",
        description:
          "Planeje representantes, distribuidores e pontos de apoio com base em lacunas regionais.",
        icon: "Route",
      },
    ],
    workflow: [
      "Defina culturas, regioes e perfis de cliente prioritarios.",
      "Cruze demanda, empresas, rotas e cobertura comercial atual.",
      "Priorize territorios, listas e acoes para o time de campo.",
    ],
    outcomes: [
      "Mais clareza sobre onde concentrar distribuicao e vendas.",
      "Carteiras rurais com melhor contexto regional.",
      "Expansao comercial com menos dependencia de intuicao local.",
    ],
  },
  {
    slug: "alimentos",
    navTitle: "Alimentos",
    title: "Alimentos",
    eyebrow: "Segmento",
    description:
      "Para fabricantes, distribuidores e comercializadores de alimentos e bebidas que precisam crescer por praca, canal e carteira.",
    primaryCta: "Mapear canais",
    secondaryCta: "Ver plataforma",
    heroMetric: "Canais e demanda vistos por regiao",
    visualMode: "leads",
    metrics: [
      { value: "Canais", label: "varejo, food service e distribuicao" },
      { value: "Mix", label: "orientado por territorio" },
      { value: "Gaps", label: "de cobertura comercial" },
    ],
    features: [
      {
        title: "Inteligencia de canais",
        description:
          "Identifique concentracoes de pontos de venda, distribuidores e regioes com maior potencial de consumo.",
        icon: "ShoppingCart",
      },
      {
        title: "Contas com maior fit",
        description:
          "Priorize clientes por porte, tipo de estabelecimento, localizacao e oportunidade de mix.",
        icon: "Target",
      },
      {
        title: "Rotas e distribuicao",
        description:
          "Apoie decisoes de rota, cobertura, sell-in e expansao para novas pracas.",
        icon: "Route",
      },
    ],
    workflow: [
      "Escolha categorias, canais e areas comerciais.",
      "Cruze pontos de venda, demanda local e cobertura atual.",
      "Gere territorios, listas e prioridades por vendedor ou distribuidor.",
    ],
    outcomes: [
      "Mais foco em canais com maior potencial.",
      "Carteiras comerciais mais bem distribuidas.",
      "Melhor leitura de onde ampliar presenca e mix.",
    ],
  },
  {
    slug: "automotivo",
    navTitle: "Automotivo",
    title: "Automotivo",
    eyebrow: "Segmento",
    description:
      "Para fabricantes, distribuidores e redes ligadas a pecas, lubrificantes, servicos e implementos automotivos.",
    primaryCta: "Mapear mercado",
    secondaryCta: "Ver plataforma",
    heroMetric: "Demanda automotiva por praca e frota",
    visualMode: "market",
    metrics: [
      { value: "Frota", label: "como sinal de demanda local" },
      { value: "Oficinas", label: "e revendas por territorio" },
      { value: "Rotas", label: "para distribuicao e campo" },
    ],
    features: [
      {
        title: "Leitura de mercado local",
        description:
          "Compare pracas por densidade de oficinas, lojas, frotas, renda e intensidade competitiva.",
        icon: "Car",
      },
      {
        title: "Prospeccao de parceiros",
        description:
          "Encontre revendas, oficinas e distribuidores com aderencia ao perfil comercial desejado.",
        icon: "Search",
      },
      {
        title: "Cobertura de canais",
        description:
          "Simule onde reforcar distribuicao, representantes e atendimento tecnico.",
        icon: "Layers",
      },
    ],
    workflow: [
      "Defina linhas, canais e regioes de interesse.",
      "Cruze empresas automotivas, frota, renda e concorrencia.",
      "Priorize contas, polos e rotas de crescimento.",
    ],
    outcomes: [
      "Melhor identificacao de polos automotivos.",
      "Prospecao mais focada em canais certos.",
      "Planejamento de cobertura com evidencia territorial.",
    ],
  },
  {
    slug: "construcao",
    navTitle: "Construcao",
    title: "Construcao",
    eyebrow: "Segmento",
    description:
      "Para fabricantes, distribuidores e prestadores ligados a materiais, obras, manutencao e servicos de construcao.",
    primaryCta: "Mapear obras",
    secondaryCta: "Ver plataforma",
    heroMetric: "Potencial de construcao por territorio",
    visualMode: "expansion",
    metrics: [
      { value: "Obras", label: "e polos de demanda" },
      { value: "Revendas", label: "priorizadas por fit" },
      { value: "Cobertura", label: "de representantes e distribuidores" },
    ],
    features: [
      {
        title: "Demanda por regiao",
        description:
          "Analise bairros e cidades por crescimento, perfil economico, negocios do setor e atividade local.",
        icon: "HardHat",
      },
      {
        title: "Contas e canais",
        description:
          "Priorize lojas, distribuidores, construtoras e prestadores com maior potencial comercial.",
        icon: "Building2",
      },
      {
        title: "Expansao de atendimento",
        description:
          "Planeje pontos, representantes e rotas para regioes com melhor relacao entre demanda e cobertura.",
        icon: "TrendingUp",
      },
    ],
    workflow: [
      "Selecione linhas de produto e canais prioritarios.",
      "Cruze empresas do setor, renda, crescimento e cobertura.",
      "Monte rankings de pracas, contas e rotas comerciais.",
    ],
    outcomes: [
      "Mais precisao para abrir ou reforcar canais.",
      "Listas comerciais com contexto de demanda local.",
      "Menos dispersao na escolha de novas regioes.",
    ],
  },
  {
    slug: "educacao",
    navTitle: "Educacao",
    title: "Educacao",
    eyebrow: "Segmento",
    description:
      "Para universidades, redes de ensino, cursos, franquias educacionais e operacoes que crescem por praca e publico.",
    primaryCta: "Mapear alunos",
    secondaryCta: "Ver plataforma",
    heroMetric: "Publicos educacionais por territorio",
    visualMode: "audience",
    metrics: [
      { value: "Publicos", label: "por idade, renda e localizacao" },
      { value: "Concorrencia", label: "educacional no entorno" },
      { value: "Unidades", label: "avaliadas por area de influencia" },
    ],
    features: [
      {
        title: "Potencial de captacao",
        description:
          "Compare regioes por publico-alvo, renda, mobilidade, concorrencia e acesso.",
        icon: "GraduationCap",
      },
      {
        title: "Prospeccao B2B educacional",
        description:
          "Identifique empresas, polos e parceiros para campanhas, beneficios e convenios.",
        icon: "Users",
      },
      {
        title: "Expansao de unidades",
        description:
          "Avalie novas unidades, polos, franquias e areas de campanha com criterios territoriais.",
        icon: "Map",
      },
    ],
    workflow: [
      "Defina cursos, perfis de aluno e regioes candidatas.",
      "Cruze dados de publico, renda, concorrencia e acesso.",
      "Priorize campanhas, parcerias e pontos de expansao.",
    ],
    outcomes: [
      "Campanhas de captacao mais localizadas.",
      "Melhor escolha de polos e unidades.",
      "Visao clara de concorrencia e area de influencia.",
    ],
  },
  {
    slug: "energia-eletrica",
    navTitle: "Energia eletrica",
    title: "Energia eletrica",
    eyebrow: "Segmento",
    description:
      "Para empresas de energia, credito energetico, assinatura, solar e eficiencia que vendem por perfil de consumo e regiao.",
    primaryCta: "Mapear consumo",
    secondaryCta: "Ver plataforma",
    heroMetric: "Potencial energetico por perfil e local",
    visualMode: "data",
    metrics: [
      { value: "Consumo", label: "estimado por area" },
      { value: "Empresas", label: "com fit comercial" },
      { value: "Pracas", label: "priorizadas por oportunidade" },
    ],
    features: [
      {
        title: "Potencial por territorio",
        description:
          "Compare regioes por perfil economico, densidade empresarial e sinais de consumo.",
        icon: "Zap",
      },
      {
        title: "Leads qualificados",
        description:
          "Priorize empresas e condominios com maior aderencia a oferta energetica.",
        icon: "Target",
      },
      {
        title: "Expansao comercial",
        description:
          "Defina pracas, rotas e parceiros para aumentar cobertura com menor custo de aquisicao.",
        icon: "TrendingUp",
      },
    ],
    workflow: [
      "Escolha oferta, perfil ideal e regioes de atuacao.",
      "Cruze empresas, renda, consumo estimado e cobertura.",
      "Gere rankings de contas e territorios prioritarios.",
    ],
    outcomes: [
      "Mais foco em contas com melhor potencial energetico.",
      "Planejamento de campo e canais mais objetivo.",
      "Argumentos comerciais conectados ao territorio.",
    ],
  },
  {
    slug: "financeiro-beneficios",
    navTitle: "Financeiro & Beneficios",
    title: "Financeiro & Beneficios",
    eyebrow: "Segmento",
    description:
      "Para cooperativas, bancos, fintechs, beneficios, adquirencia e solucoes financeiras que crescem por segmento e regiao.",
    primaryCta: "Mapear contas",
    secondaryCta: "Ver plataforma",
    heroMetric: "Oportunidade financeira por praca e perfil",
    visualMode: "leads",
    metrics: [
      { value: "Empresas", label: "com fit de produto financeiro" },
      { value: "Clusters", label: "por setor, porte e regiao" },
      { value: "Carteiras", label: "priorizadas para vendas" },
    ],
    features: [
      {
        title: "Segmentacao comercial",
        description:
          "Classifique empresas por setor, porte, regiao, maturidade e potencial de adesao.",
        icon: "CreditCard",
      },
      {
        title: "Prospecao com score",
        description:
          "Monte listas com justificativa de fit para cooperativas, beneficios, credito ou meios de pagamento.",
        icon: "Target",
      },
      {
        title: "Expansao de carteiras",
        description:
          "Compare areas de atuacao e encontre regioes com maior densidade de clientes-alvo.",
        icon: "Layers",
      },
    ],
    workflow: [
      "Defina produto financeiro, ICP e criterios de elegibilidade.",
      "Cruze empresas, setores, localizacao e sinais economicos.",
      "Priorize carteiras, campanhas e regioes de aquisicao.",
    ],
    outcomes: [
      "Menos dispersao na prospeccao financeira.",
      "Carteiras com melhor potencial por territorio.",
      "Expansao comercial orientada por segmentos reais.",
    ],
  },
  {
    slug: "franquia-varejo",
    navTitle: "Franquia & Varejo",
    title: "Franquia & Varejo",
    eyebrow: "Segmento",
    description:
      "Para franqueadoras, redes varejistas e operacoes multicanal que precisam escolher pontos, territorios e publicos.",
    primaryCta: "Avaliar pontos",
    secondaryCta: "Ver plataforma",
    heroMetric: "Expansao varejista com criterio territorial",
    visualMode: "expansion",
    metrics: [
      { value: "Pontos", label: "comparados por potencial" },
      { value: "Fluxo", label: "e publico no entorno" },
      { value: "Rede", label: "sem sobreposicao desnecessaria" },
    ],
    features: [
      {
        title: "Escolha de pontos",
        description:
          "Compare locais por publico, renda, concorrencia, fluxo, cobertura e area de influencia.",
        icon: "ShoppingBag",
      },
      {
        title: "Prospecao de franqueados",
        description:
          "Identifique regioes e perfis comerciais aderentes ao plano de expansao.",
        icon: "Search",
      },
      {
        title: "Gestao de territorios",
        description:
          "Evite canibalizacao e organize areas de atendimento para lojas, franquias e canais.",
        icon: "Map",
      },
    ],
    workflow: [
      "Defina formatos de loja, publico e regioes candidatas.",
      "Cruze demanda, concorrencia, unidades atuais e cobertura.",
      "Ranqueie pontos e territorios por potencial e risco.",
    ],
    outcomes: [
      "Decisoes de ponto mais defensaveis.",
      "Menos risco de sobreposicao entre unidades.",
      "Plano de expansao mais facil de comunicar.",
    ],
  },
  {
    slug: "saude",
    navTitle: "Saude",
    title: "Saude",
    eyebrow: "Segmento",
    description:
      "Para distribuidores, farmaceuticas, operadoras, cooperativas, clinicas e redes de saude que atuam por territorio.",
    primaryCta: "Mapear saude",
    secondaryCta: "Ver plataforma",
    heroMetric: "Acesso, demanda e rede vistos por local",
    visualMode: "audience",
    metrics: [
      { value: "Rede", label: "clinicas, farmacias e parceiros" },
      { value: "Publico", label: "por perfil e area de influencia" },
      { value: "Cobertura", label: "assistencial e comercial" },
    ],
    features: [
      {
        title: "Inteligencia territorial de saude",
        description:
          "Compare regioes por populacao, renda, rede existente, concorrencia e acesso.",
        icon: "HeartPulse",
      },
      {
        title: "Prospecao de canais",
        description:
          "Priorize clinicas, farmacias, distribuidores e parceiros com maior aderencia comercial.",
        icon: "Building2",
      },
      {
        title: "Expansao e cobertura",
        description:
          "Avalie novas unidades, areas assistenciais, distribuicao e presenca regional.",
        icon: "Layers",
      },
    ],
    workflow: [
      "Defina oferta, publico, rede e regioes de interesse.",
      "Cruze populacao, empresas de saude, renda e concorrencia.",
      "Priorize parceiros, unidades e territorios de cobertura.",
    ],
    outcomes: [
      "Melhor leitura de acesso e demanda local.",
      "Canais de saude priorizados por fit territorial.",
      "Expansao com criterios claros de cobertura.",
    ],
  },
  {
    slug: "telecom",
    navTitle: "Telecom",
    title: "Telecom",
    eyebrow: "Segmento",
    description:
      "Para operadoras, provedores de internet, fibra, conectividade e servicos digitais que vendem por cobertura e demanda local.",
    primaryCta: "Mapear cobertura",
    secondaryCta: "Ver plataforma",
    heroMetric: "Cobertura e demanda telecom no mesmo mapa",
    visualMode: "data",
    metrics: [
      { value: "Cobertura", label: "por area e rota" },
      { value: "Demanda", label: "residencial e empresarial" },
      { value: "Churn", label: "tratado com contexto local" },
    ],
    features: [
      {
        title: "Mercado por cobertura",
        description:
          "Compare regioes por infraestrutura, demanda potencial, concorrencia e densidade de clientes.",
        icon: "Satellite",
      },
      {
        title: "Prospecao conectada ao mapa",
        description:
          "Encontre empresas, condominios e areas com fit para fibra, dados ou conectividade.",
        icon: "Search",
      },
      {
        title: "Expansao de rede",
        description:
          "Priorize novas rotas, areas comerciais e investimentos com base em potencial de retorno.",
        icon: "Route",
      },
    ],
    workflow: [
      "Defina produtos, cobertura atual e regioes candidatas.",
      "Cruze empresas, densidade, concorrencia e infraestrutura.",
      "Ranqueie areas para vendas, retencao e expansao de rede.",
    ],
    outcomes: [
      "Mais precisao para expandir rede e cobertura.",
      "Campanhas B2B e B2C conectadas ao territorio.",
      "Melhor visao de concorrencia e potencial local.",
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

export function getSegment(slug: string) {
  return segments.find((segment) => segment.slug === slug);
}

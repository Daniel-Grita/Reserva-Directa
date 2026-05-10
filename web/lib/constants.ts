export const navItems = [
  { label: "Início", href: "/" },
  { label: "Quem Somos", href: "/quem-somos" },
  { label: "A Nossa Solução", href: "/a-nossa-solucao" },
  { label: "Serviços", href: "/servicos" },
  { label: "Blog", href: "/#blog" },
];

export const solucaoPage = {
  hero: {
    heading: "O seu próprio motor de reservas",
    image: { src: "https://picsum.photos/seed/rd-booking-engine/1200/600", alt: "Motor de reservas Reserva Direta" },
    tagline: "Apenas 5% por reserva",
    intro:
      "Integramos o CultBooking, um motor de reservas profissional e otimizado para conversões, diretamente no seu website. Os seus hóspedes reservam sem sair do seu site, sem intermediários.",
  },
  steps: {
    label: "COMO FUNCIONA",
    heading: "4 passos para as suas reservas diretas",
  },
  features: {
    label: "FUNCIONALIDADES",
    icons: ["palette", "monitor", "lock", "calendar", "star", "trendingUp"] as const,
  },
  trust: {
    label: "TECNOLOGIA DE CONFIANÇA",
    heading: "CultBooking: Parceiro de empresas hoteleiras desde 2000",
    bullets: [
      "Booking.com Premier Connectivity Partner (2019, 2020, 2021)",
      "Cloud-based, sem instalação",
      "Aumento médio de 52% em reservas diretas (utilizadores piloto)",
      "Account manager dedicado incluído",
      "Expedia Preferred Partner (2021)",
      "Ligada a 450+ canais de distribuição",
    ],
  },
  primaryCta: { label: "Falar connosco sobre reservas diretas", href: "#contacto" },
};

export const aboutPage = {
  hero: {
    label: "NOSSA HISTÓRIA",
    heading: "Como Começámos",
    paragraphs: [
      "João e Sebastião começaram a Reserva Direta porque viram o mesmo problema repetir-se: pequenos alojamentos, pensões e hotéis boutique pagando 15 a 25% de comissão em cada reserva para as OTAs, com pouco controlo sobre a experiência do hóspede.",
      "Percebemos que havia uma forma melhor: combinar design, tecnologia e marketing para ajudar estas propriedades a ganhar independência das OTAs, a manter mais margem em cada reserva e a ter uma relação direta com os seus hóspedes.",
    ],
    // TODO: replace this external Unsplash URL with a real client photo in /public/about/.
    image: { src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80", alt: "Receção de hotel boutique" },
  },
  team: {
    label: "A EQUIPA",
    heading: "Conhece quem está por trás da Reserva Direta",
    members: [
      {
        name: "João Brazão",
        role: "Fundador",
        photo: { src: "/team/joao.webp", alt: "João Brazão" },
      },
      {
        name: "Sebastião Gomes",
        role: "Fundador",
        photo: { src: "/team/sebastiao.webp", alt: "Sebastião Gomes" },
      },
    ],
  },
  values: {
    label: "VALORES",
    heading: "O que nos guia",
    items: [
      {
        icon: "eye",
        title: "Transparência",
        description: "Comunicação clara, sem jargão técnico. Sabemos que não somos todos especialistas em marketing ou tecnologia.",
      },
      {
        icon: "trendingUp",
        title: "Resultados",
        description: "Focamos em métricas concretas: mais reservas, menos comissões, ROI claro. Não prometemos milagres, entregamos impacto.",
      },
      {
        icon: "handshake",
        title: "Parceria",
        description: "Você não é um ticket de suporte. Trabalhamos contigo, entendemos o teu negócio e crescemos juntos.",
      },
    ],
  },
};

export const hero = {
  heading: "Aumente as suas reservas diretas. Reduza comissões.",
  subtitle:
    "Ajudamos alojamentos em Portugal a libertar-se da dependência das OTAs e a aumentar receita através de reservas diretas, com tecnologia, branding e marketing feitos à medida.",
  cta1: { label: "Fale Connosco", href: "#contacto" },
  cta2: { label: "Ver Como Funciona", href: "#como-funciona" },
  mockupNote:
    "Quarto de alojamento boutique português com luz natural — exemplo de propriedade que aumentou reservas diretas com a Reserva Direta",
};

export const problem = {
  label: "O PROBLEMA",
  heading: "As OTAs estão a comer as suas margens.",
  paragraphs: [
    "Se é proprietário de uma pensão, hotel boutique ou alojamento local, provavelmente está a perder 15-25% de cada reserva em comissões para as OTAs.",
    "O resultado? Menos controlo sobre o seu negócio. Margens mais apertadas. E uma dependência perigosa de algoritmos que podem mudar a qualquer momento.",
    "A boa notícia? Existe uma forma melhor. Com a estratégia e as ferramentas certas, pode aumentar significativamente as reservas diretas e manter o controlo total sobre preços, comunicação e experiência do hóspede.",
  ],
  stats: [
    { number: "0%", label: "Comissão com reservas diretas" },
    { number: "15–25%", label: "Comissão por reserva nas OTAs" },
    { number: "+ROI", label: "Controlo total sobre preços e comunicação" },
  ],
};

export const bookingSystem = {
  label: "SISTEMA DE RESERVAS",
  heading: "O seu próprio motor de reservas. Apenas 5% por reserva.",
  intro:
    "Integramos o CultBooking, um motor de reservas profissional e otimizado para conversões, diretamente no seu website. Os seus hóspedes reservam sem sair do seu site, sem intermediários, e você mantém o controlo total.",
  trustBadges: [
    { target: 450, suffix: "+", label: "Canais de distribuição conectados" },
    { target: 52, prefix: "+", suffix: "%", label: "Aumento médio em reservas diretas" },
    { target: 5, suffix: "%", label: "Comissão por reserva (sem mensalidade)" },
    { target: 2, displayOverride: "1-2", label: "Semanas até ficar\noperacional" },
  ],
  process: {
    heading: "Como funciona",
    steps: [
      {
        number: "1.",
        title: "Integração no seu website",
        description:
          "O motor de reservas é integrado como uma página ou botão dentro do seu site. O hóspede vê preços, disponibilidade e pode reservar de imediato. Tudo com a sua imagem e a sua marca, sem precisar de instalar nada.",
      },
      {
        number: "2.",
        title: "Reservas diretas pelo Google",
        description:
          "Ligamos o seu motor de reservas ao Google Hotel e ao Google Business. Os viajantes encontram o seu alojamento no Google e reservam diretamente, sem passar por OTAs.",
      },
      {
        number: "3.",
        title: "Sincronização com todas as plataformas",
        description:
          "Através do Channel Manager da CultSwitch, os seus preços e disponibilidade ficam sincronizados em tempo real entre o seu site e as OTAs. Sem overbookings, sem gestão manual.",
      },
      {
        number: "4.",
        title: "Tudo pronto em 1 a 2 semanas",
        description:
          "Tratamos de tudo: configuração técnica, personalização visual e integração com os canais que já utiliza. Sem complicações da sua parte.",
      },
    ],
  },
  features: {
    heading: "Funcionalidades que fazem a diferença",
    cards: [
      {
        title: "Personalizado à sua marca",
        description:
          "Cores, logo, idiomas e moedas adaptados à identidade visual do seu alojamento. Os hóspedes sentem que estão a reservar consigo.",
      },
      {
        title: "Mobile-first",
        description:
          "Interface otimizada para telemóvel e tablet. Botões maiores, layout simplificado e navegação pensada para converter em qualquer dispositivo.",
      },
      {
        title: "Pagamentos seguros",
        description:
          "Aceita Visa, MasterCard, American Express, PayPal e Klarna. Certificação PCI Compliant para total segurança.",
      },
      {
        title: "Calendário inteligente",
        description:
          "Os hóspedes veem preços, disponibilidade e estadias mínimas num calendário interativo. Múltiplos tipos de tarifas e ocupação.",
      },
      {
        title: "Promoções e extras",
        description:
          "Códigos de desconto, promoções sazonais e venda de serviços adicionais (parking, pequeno-almoço, transfers) integrados na reserva.",
      },
      {
        title: "Sem mensalidade",
        description:
          "O motor de reservas cobra apenas 5% por cada reserva realizada. Sem custos fixos, ideal para começar sem risco.",
      },
    ],
  },
  channelManager: {
    heading: "Channel Manager (opcional)",
    description:
      "Se precisar de sincronizar várias OTAs em simultâneo, o Channel Manager da CultSwitch faz tudo automaticamente. Preços, disponibilidade e reservas atualizados em tempo real em todas as plataformas. A mensalidade varia conforme o número de quartos e canais ligados.",
  },
  trust: {
    heading: "Tecnologia de confiança",
    description:
      "O CultBooking e o CultSwitch são desenvolvidos pela Cultuzz, empresa especializada em distribuição hoteleira desde 2000. A tecnologia é certificada como Booking.com Premier Connectivity Partner (distinção atribuída três anos consecutivos) e Expedia Preferred Partner. Está ligada a mais de 450 canais de distribuição em todo o mundo.",
  },
};

export const services = {
  label: "SERVIÇOS MODULARES",
  heading: "Tudo o que precisa para crescer online",
  intro:
    "Cada serviço funciona de forma independente, ou em conjunto para resultados máximos. Escolha o que faz sentido para o seu alojamento.",
  cta: "Saber mais",
  cards: [
    {
      icon: "palette",
      slug: "branding",
      title: "Design Gráfico & Branding",
      description:
        "Identidade visual completa: logo, paleta e materiais de comunicação para se destacar no mercado.",
    },
    {
      icon: "globe",
      slug: "website",
      title: "Website Profissional",
      description:
        "Rápido, otimizado para conversões e reservas diretas. Código, domínio e hosting são seus.",
    },
    {
      icon: "phone",
      slug: "marketing-digital",
      title: "Marketing Digital",
      description:
        "Redes sociais, OTAs e conteúdo estratégico para atrair viajantes e converter reservas.",
    },
    {
      icon: "bolt",
      slug: "tecnologia",
      title: "Tecnologia para Reservas",
      description:
        "Motor de Reserva, Google Hotel Ads e Channel Manager para maximizar diretas e reduzir comissões.",
    },
    {
      icon: "handshake",
      slug: "fidelizacao",
      title: "Consultoria e Fidelização",
      description:
        "Estratégias de fidelização que transformam estadias únicas em clientes que voltam.",
    },
  ],
} as const;

export const servicesPage = {
  hero: {
    eyebrow: "Tudo o que precisa para crescer online",
    heading: "Os Serviços da Reserva Direta",
    intro:
      "Cada serviço funciona de forma independente, ou em conjunto para resultados máximos. Escolha o que faz sentido para o seu alojamento.",
  },
  label: "SERVIÇOS MODULARES",
  cards: [
    {
      slug: "branding",
      title: "Design Gráfico & Branding",
      description:
        "Criamos ou revitalizamos a identidade visual do seu alojamento, desde o logo até aos materiais de comunicação, para que se destaque no mercado.",
      image: {
        src: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=900&q=80",
        alt: "Materiais de branding e design sobre uma secretária",
      },
      link: { label: "Ver portfólio", href: "https://daniel-grita-portfolio.vercel.app/", external: true },
    },
    {
      slug: "website",
      title: "Website Profissional",
      description:
        "Website rápido, otimizado para conversões e pensado para receber reservas diretas. Fica com a propriedade completa do código, domínio e hosting.",
      image: {
        src: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=900&q=80",
        alt: "Computador portátil sobre uma secretária com um website aberto",
      },
    },
    {
      slug: "marketing-digital",
      title: "Marketing Digital",
      description:
        "Gestão de redes sociais, otimização de perfis nas OTAs e criação de conteúdo estratégico para atrair mais viajantes e converter.",
      image: {
        src: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=900&q=80",
        alt: "Mão a segurar um telemóvel com aplicações de redes sociais",
      },
    },
    {
      slug: "tecnologia",
      title: "Tecnologia para Reservas",
      description:
        "Motor de reservas CultBooking, Google Hotel Ads e Channel Manager. A stack completa para maximizar reservas diretas.",
      image: {
        src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
        alt: "Painel com gráficos de análise sobre um portátil",
      },
    },
    {
      slug: "fidelizacao",
      title: "Consultoria e Fidelização",
      description:
        "Ajudamos a conhecer melhor os seus hóspedes e a criar estratégias de fidelização que transformam estadias únicas em clientes recorrentes.",
      image: {
        src: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=900&q=80",
        alt: "Pessoas em reunião à volta de uma mesa",
      },
    },
  ],
};

export const serviceDetails = {
  branding: {
    eyebrow: "DESIGN GRÁFICO & BRANDING",
    heading: "Uma identidade visual que se destaca",
    intro:
      "Criamos ou revitalizamos a identidade do seu alojamento, do logo aos materiais de comunicação, para que cada ponto de contacto reforce a marca.",
    included: {
      heading: "O que está incluído",
      items: [
        "Logo e identidade visual",
        "Paleta cromática e tipografia",
        "Materiais para impressão",
        "Templates para redes sociais",
        "Manual de marca",
      ],
    },
    process: {
      heading: "Como trabalhamos",
      steps: [
        { number: "01", title: "Auditoria visual", description: "Analisamos a identidade atual e o posicionamento do seu alojamento." },
        { number: "02", title: "Conceito criativo", description: "Apresentamos direções visuais alinhadas com o público que quer atrair." },
        { number: "03", title: "Execução", description: "Desenvolvemos o sistema de marca completo e os materiais necessários." },
        { number: "04", title: "Entrega", description: "Recebe ficheiros editáveis, manual de marca e aplicação em todos os canais." },
      ],
    },
    faq: [
      { question: "Já tenho um logo. Vale a pena refazer?", answer: "Depende. Avaliamos o que existe e se justifica evoluir, refrescar ou reconstruir do zero. Não substituímos por gosto, só quando há retorno claro." },
      { question: "Em quanto tempo fica pronto?", answer: "Entre 2 a 4 semanas, conforme o âmbito. Identidade visual base demora menos; sistema completo com manual e materiais pode chegar às 4 semanas." },
      { question: "Os ficheiros são meus?", answer: "Sim. Recebe todos os ficheiros editáveis, formatos vetoriais e manual de marca. A propriedade é totalmente sua." },
    ],
  },
  website: {
    eyebrow: "WEBSITE PROFISSIONAL",
    heading: "Um site rápido, otimizado para reservas",
    intro:
      "Construímos um website pensado para converter visitantes em hóspedes, com motor de reservas integrado e propriedade total do código, domínio e hosting.",
    included: {
      heading: "O que está incluído",
      items: [
        "Design responsivo e adaptado a mobile",
        "Otimizado para conversão",
        "Integração com motor de reservas",
        "SEO técnico de base",
        "Hosting e domínio próprios",
      ],
    },
    process: {
      heading: "Como trabalhamos",
      steps: [
        { number: "01", title: "Briefing & wireframes", description: "Definimos a arquitetura, o conteúdo e os fluxos críticos antes de desenhar." },
        { number: "02", title: "Design", description: "Criamos as páginas com a sua identidade e foco em converter visitas em reservas." },
        { number: "03", title: "Desenvolvimento", description: "Implementamos com performance, SEO e integração ao motor de reservas." },
        { number: "04", title: "Lançamento", description: "Migração, testes e ativação, com formação para gerir o site sozinho." },
      ],
    },
    faq: [
      { question: "Quanto tempo demora a ficar online?", answer: "Tipicamente 1 a 2 semanas, dependendo da complexidade e da disponibilidade do conteúdo." },
      { question: "Consigo editar o site sem programador?", answer: "Sim. Entregamos com formação e ferramentas que permitem alterar textos e fotos sem depender de nós." },
      { question: "O hosting fica connosco?", answer: "Não. Fica em seu nome, com acesso total. Tudo é seu desde o primeiro dia." },
    ],
  },
  "marketing-digital": {
    eyebrow: "MARKETING DIGITAL",
    heading: "Mais visibilidade, mais reservas",
    intro:
      "Tornamos o seu alojamento visível para os viajantes certos, em redes sociais, OTAs e Google, com conteúdo e campanhas pensadas para converter.",
    included: {
      heading: "O que está incluído",
      items: [
        "Gestão de redes sociais",
        "Otimização de perfis em OTAs",
        "Estratégia de conteúdo",
        "Campanhas pagas (Meta e Google)",
        "Email marketing",
      ],
    },
    process: {
      heading: "Como trabalhamos",
      steps: [
        { number: "01", title: "Auditoria", description: "Analisamos canais atuais, concorrência e oportunidades pouco exploradas." },
        { number: "02", title: "Estratégia", description: "Definimos objetivos, públicos e plano de conteúdo e campanhas." },
        { number: "03", title: "Execução", description: "Produzimos, publicamos e gerimos campanhas com calendário definido." },
        { number: "04", title: "Otimização", description: "Medimos resultados, ajustamos investimento e amplificamos o que funciona." },
      ],
    },
    faq: [
      { question: "Vale a pena com poucos quartos?", answer: "Sim. O importante é o ROI, não a escala. Com investimento controlado e foco no público certo, mesmo alojamentos pequenos veem retorno." },
      { question: "Trabalham com que redes?", answer: "Instagram, Facebook, Google e email são a base. Adicionamos outras se fizer sentido para o seu público." },
      { question: "Quem produz o conteúdo?", answer: "Nós. Pode partilhar materiais e fotos, mas a redação, o design e a publicação ficam do nosso lado." },
    ],
  },
  tecnologia: {
    eyebrow: "TECNOLOGIA PARA RESERVAS",
    heading: "A stack completa para reservas diretas",
    intro:
      "Motor de reservas CultBooking, Google Hotel Ads e Channel Manager para reduzir comissões e ter o controlo total da distribuição.",
    included: {
      heading: "O que está incluído",
      items: [
        "Motor de reservas CultBooking",
        "Google Hotel Ads",
        "Channel Manager (CultSwitch)",
        "Integração com as principais OTAs",
        "Relatórios e analytics",
      ],
    },
    process: {
      heading: "Como trabalhamos",
      steps: [
        { number: "01", title: "Setup", description: "Criamos a conta CultBooking e configuramos quartos, tarifas e políticas." },
        { number: "02", title: "Integração", description: "Ligamos o motor ao seu site e ao Channel Manager para sincronizar canais." },
        { number: "03", title: "Configuração", description: "Ativamos Google Hotel Ads e ligamos OTAs com paridade de preços." },
        { number: "04", title: "Lançamento", description: "Testes finais, formação e arranque. Operacional em 1 a 2 semanas." },
      ],
    },
    faq: [
      { question: "Tenho mensalidade?", answer: "Não. O motor de reservas cobra apenas 5% por reserva concretizada. O Channel Manager tem custo conforme canais e quartos." },
      { question: "Funciona com o meu PMS?", answer: "Sim, na maioria dos casos. O CultBooking integra com os principais PMS do mercado. Confirmamos antes de avançar." },
      { question: "E se já uso OTAs?", answer: "Continua a usar. O objetivo é reduzir dependência, não cortar canais. Sincronizamos tudo e captamos diretas em paralelo." },
    ],
  },
  fidelizacao: {
    eyebrow: "CONSULTORIA E FIDELIZAÇÃO",
    heading: "Estadias únicas em hóspedes que voltam",
    intro:
      "Criamos estratégias de fidelização e comunicação pós-estadia para transformar reservas únicas em clientes recorrentes.",
    included: {
      heading: "O que está incluído",
      items: [
        "Análise do perfil de hóspede",
        "Programa de fidelização",
        "Comunicação pós-estadia",
        "Estratégia de retorno",
        "Métricas e acompanhamento",
      ],
    },
    process: {
      heading: "Como trabalhamos",
      steps: [
        { number: "01", title: "Diagnóstico", description: "Analisamos a base de hóspedes, padrões de retorno e oportunidades." },
        { number: "02", title: "Estratégia", description: "Definimos benefícios, comunicação e canais para criar relação contínua." },
        { number: "03", title: "Implementação", description: "Configuramos sistemas, mensagens automáticas e materiais de apoio." },
        { number: "04", title: "Acompanhamento", description: "Medimos retorno, repetição e satisfação. Ajustamos com base nos dados." },
      ],
    },
    faq: [
      { question: "Quanto tempo até ver resultados?", answer: "Os primeiros sinais aparecem em 3 a 6 meses, à medida que hóspedes regressam ou recomendam. É uma estratégia de médio prazo, não imediata." },
      { question: "Funciona com alojamentos pequenos?", answer: "Sim. Quanto mais pequena a propriedade, mais cada cliente recorrente vale, e mais simples é manter relação direta." },
      { question: "Precisamos de software caro?", answer: "Não. Trabalhamos com ferramentas acessíveis ou já existentes. O essencial é a estratégia, não a tecnologia." },
    ],
  },
} as const;

export type ServiceSlug = keyof typeof serviceDetails;

export const howItWorks = {
  label: "COMO FUNCIONA",
  heading: "O processo é simples",
  steps: [
    {
      number: "01",
      title: "Conversa Inicial",
      description:
        "Começamos por conhecer o seu alojamento, os seus desafios e os seus objetivos. Sem compromisso, sem pressão.",
    },
    {
      number: "02",
      title: "Estratégia Personalizada",
      description:
        "Criamos um plano feito à medida, combinando branding, tecnologia e marketing para atingir os seus objetivos específicos.",
    },
    {
      number: "03",
      title: "Implementação",
      description:
        "Executamos tudo do início ao fim: design, desenvolvimento, configuração técnica e lançamento. Ficamos prontos em 1 a 2 semanas.",
    },
    {
      number: "04",
      title: "Crescimento Contínuo",
      description:
        "Monitorizamos resultados, otimizamos campanhas e ajudamos a escalar as reservas diretas mês após mês.",
    },
  ],
};

export const caseStudies = {
  label: "CASOS DE ESTUDO",
  heading: "Resultados reais de alojamentos como o seu",
  intro:
    "Trabalhamos com propriedades de diferentes dimensões por todo o país. Aqui estão alguns exemplos do que implementámos.",
  cases: [
    {
      image: "/case-studies/case-1.webp",
      category: "Turismo Rural",
      title: "Quinta no Norte",
      description: "Casa de pedra reconvertida com estratégia de reservas diretas a partir do website próprio.",
    },
    {
      image: "/case-studies/case-2.webp",
      category: "Alojamento Local",
      title: "Apartamento Urbano",
      description: "Apartamento de férias com motor de reservas integrado e presença digital própria.",
    },
    {
      image: "/case-studies/case-3.webp",
      category: "Hotel Boutique",
      title: "Hotel de Charme",
      description: "Hotel boutique com branding, website e sistema de reservas próprios para reduzir dependência de OTAs.",
    },
  ],
};

export const faq = {
  label: "PERGUNTAS FREQUENTES",
  heading: "Perguntas Frequentes",
  intro: "As dúvidas mais comuns que ouvimos de proprietários como você.",
  items: [
    {
      question: "Já uso OTAs exclusivamente. Porquê mudar?",
      answer:
        "Não precisa de mudar. A ideia é complementar, não substituir. Ao adicionar um canal de reservas diretas, reduz a dependência de uma única plataforma, ganha mais margem em cada reserva e passa a ter contacto direto com os seus hóspedes.",
    },
    {
      question: "Não tenho orçamento nem tempo para isto.",
      answer:
        "A implementação demora 1 a 2 semanas e o motor de reservas não tem mensalidade fixa. Paga apenas 5% por cada reserva que aconteça. Foi pensado para que comece a gerar retorno sem um investimento inicial pesado.",
    },
    {
      question: "Já tentei algo parecido e não funcionou.",
      answer:
        "A diferença está na integração completa. Não é só ter um site bonito. É ter um sistema que conecta o seu website, o motor de reservas, o Channel Manager, o Google Hotel e as OTAs. Tudo a trabalhar em conjunto para converter visitantes em reservas.",
    },
    {
      question: "A vossa solução é muito cara.",
      answer:
        "Olhe para o retorno, não para o custo. Se paga 15-25% de comissão em cada reserva OTA e passa a receber reservas diretas a 5%, o investimento paga-se rapidamente. Cada reserva direta é margem que volta para si.",
    },
    {
      question: "Prefiro gerir manualmente entre várias OTAs.",
      answer:
        "A gestão manual funciona até ao dia em que acontece um overbooking. Um Channel Manager sincroniza preços e disponibilidade automaticamente entre todas as plataformas, poupa tempo e elimina erros que custam dinheiro e reputação.",
    },
    {
      question: "Somos uma propriedade pequena. Não compensa.",
      answer:
        "É precisamente por ser pequeno que cada reserva direta faz diferença. Se tem 10 quartos e consegue que 3 ou 4 reservas por mês sejam diretas em vez de via OTA, no final do ano são milhares de euros em comissões que ficam consigo.",
    },
    {
      question: "O nosso negócio é sazonal. Fora da época alta não vale a pena.",
      answer:
        "É na época baixa que faz mais diferença. Com presença online forte e Google Hotel Ads, pode captar procura que normalmente só chega pelas OTAs. Uma estratégia de reservas diretas ajuda a melhorar a ocupação ao longo de todo o ano, não só nos meses de verão.",
    },
  ],
};

export const blog = {
  label: "BLOG / RECURSOS",
  heading: "Aprenda a crescer o seu alojamento",
  intro: "Partilhamos estratégias, guias práticos e insights do mercado de hotelaria.",
  // TODO: replace these external Unsplash URLs with real cover art in /public/blog/.
  cards: [
    {
      title: "O Segredo para o Sucesso do seu Alojamento Local",
      cta: "Ler artigo →",
      image: {
        src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80",
        alt: "Receção de alojamento boutique com luz natural",
      },
    },
    {
      title: "A presença estratégica no Google Business para alojamentos",
      cta: "Ler artigo →",
      image: {
        src: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=900&q=80",
        alt: "Pesquisa local num telemóvel a mostrar resultados de alojamento",
      },
    },
  ],
  cta: { label: "Ver Todos os Artigos", href: "/blog" },
};

export const useCasesPage = {
  properties: [
    {
      label: "Alojamento rural · Minho",
      googleImage: { src: "/use-cases/google-1.jpg", width: 887, height: 826 },
      bookingImage: { src: "/use-cases/booking-1.jpg", width: 2400, height: 1792 },
    },
    {
      label: "Retiro na natureza · Norte de Portugal",
      googleImage: { src: "/use-cases/google-2.jpg", width: 887, height: 826 },
      bookingImage: { src: "/use-cases/booking-2.jpg", width: 2400, height: 1792 },
    },
    {
      label: "Hotel urbano · Porto",
      googleImage: { src: "/use-cases/google-3.jpg", width: 887, height: 826 },
      bookingImage: { src: "/use-cases/booking-3.jpg", width: 2400, height: 1792 },
    },
  ],
  google: {
    label: "GOOGLE HOTEL",
    heading: "A vantagem de preço no Google",
    intro:
      "Quando um hóspede pesquisa no Google, o seu website oficial aparece sempre com o melhor preço. É assim que fica a sua propriedade.",
    callout:
      "A reserva direta é sempre o melhor preço para o seu hóspede. Quando pesquisam no Google, veem o seu website ao lado das OTAs — e o seu preço ganha. É isto que configuramos para cada propriedade com quem trabalhamos.",
  },
  booking: {
    label: "MOTOR DE RESERVAS",
    heading: "O motor de reservas no seu website",
    intro:
      "Cada propriedade tem o seu próprio motor de reservas com a sua imagem, integrado diretamente no website. Sem redirecionamentos, sem plataformas de terceiros.",
    callout:
      "Cada motor de reservas é personalizado à imagem da propriedade. Cores, logo e tipos de quarto diferentes — construído em 1 a 2 semanas e integrado diretamente no website existente.",
  },
};

export const contactCTA = {
  heading: "Pronto para receber mais reservas diretas?",
  subtitle:
    "Deixe-nos os seus dados e entramos em contacto para perceber como podemos ajudar o seu alojamento a crescer.",
  fine_print: "Sem compromisso. Respondemos em menos de 24 horas.",
  fields: {
    nome: { label: "Nome", placeholder: "O seu nome completo" },
    telemovel: { label: "Telemóvel", placeholder: "+351 912 345 678" },
    email: { label: "Email", placeholder: "email@exemplo.com" },
    comentario: {
      label: "Comentário",
      placeholder: "Conte-nos um pouco sobre o seu alojamento e os seus objetivos...",
    },
  },
  submit: "Enviar Mensagem",
};

type FooterLink = { label: string; href: string };
type FooterColumn = { title: string; links: FooterLink[]; text?: string[] };

export const privacyPolicy = {
  lastUpdated: "10 de maio de 2026",
  sections: [
    {
      heading: "Quem é o responsável pelos seus dados",
      paragraphs: [
        "A Reserva Direta é a entidade responsável pelo tratamento dos dados pessoais recolhidos através deste website. Para qualquer questão relacionada com a sua privacidade, contacte-nos em agenciareservadireta@gmail.com.",
      ],
    },
    {
      heading: "Que dados recolhemos",
      paragraphs: [
        "Apenas recolhemos os dados que nos fornece voluntariamente através do formulário de contacto:",
      ],
      list: [
        "Nome",
        "Endereço de email",
        "Número de telefone",
        "Nome do alojamento (opcional)",
        "Mensagem",
      ],
    },
    {
      heading: "Para que usamos os seus dados",
      paragraphs: [
        "Os dados são utilizados exclusivamente para responder ao seu pedido de contacto e, com a sua autorização, para o acompanhamento comercial subsequente. A base legal para este tratamento é o seu consentimento, manifestado ao submeter o formulário.",
        "Não utilizamos os seus dados para marketing automatizado, perfis comerciais, ou qualquer finalidade não relacionada com o seu pedido inicial.",
      ],
    },
    {
      heading: "Onde guardamos os seus dados",
      paragraphs: [
        "As submissões do formulário são processadas pelo serviço Formspree (Estados Unidos), que opera ao abrigo das cláusulas contratuais-tipo aprovadas pela Comissão Europeia para transferências internacionais de dados.",
        "Os contactos resultantes são geridos pela equipa interna em ferramentas de email padrão.",
      ],
    },
    {
      heading: "Quanto tempo guardamos os seus dados",
      paragraphs: [
        "Mantemos os seus dados pelo tempo estritamente necessário para responder ao seu pedido e, se aplicável, durante a relação comercial subsequente. Em caso de inatividade prolongada (24 meses), os dados são eliminados.",
      ],
    },
    {
      heading: "Os seus direitos",
      paragraphs: [
        "Ao abrigo do Regulamento Geral sobre a Proteção de Dados (RGPD), tem direito a:",
      ],
      list: [
        "Aceder aos dados que temos sobre si",
        "Solicitar a correção de dados incorretos",
        "Solicitar a eliminação dos seus dados",
        "Solicitar a portabilidade dos seus dados",
        "Retirar o consentimento a qualquer momento",
        "Apresentar uma reclamação à Comissão Nacional de Proteção de Dados (CNPD)",
      ],
    },
    {
      heading: "Cookies",
      paragraphs: [
        "Este site utiliza apenas cookies estritamente necessários ao seu funcionamento. Não usamos cookies de análise, rastreamento ou publicidade. Caso venhamos a integrar serviços que utilizem cookies não-essenciais, será solicitado o seu consentimento prévio.",
      ],
    },
    {
      heading: "Alterações a esta política",
      paragraphs: [
        "Podemos atualizar esta política para refletir mudanças nas nossas práticas ou requisitos legais. A data da última atualização aparece no topo desta página.",
      ],
    },
    {
      heading: "Contacto",
      paragraphs: [
        "Para exercer qualquer dos seus direitos ou esclarecer dúvidas, escreva-nos para agenciareservadireta@gmail.com.",
      ],
    },
  ],
};

export const footer = {
  brand: "Reserva Direta",
  tagline:
    "Mais reservas diretas. Menos comissões. Ajudamos alojamentos locais a crescer de forma sustentável.",
  columns: [
    {
      title: "Contacto",
      links: [
        { label: "agenciareservadireta@gmail.com", href: "mailto:agenciareservadireta@gmail.com" },
      ],
      text: ["Lisboa, Portugal"],
    },
    {
      title: "Navegação",
      links: [
        { label: "Quem Somos", href: "/quem-somos" },
        { label: "Serviços", href: "/servicos" },
        { label: "A Nossa Solução", href: "/a-nossa-solucao" },
        { label: "Blog", href: "/#blog" },
        { label: "Contacto", href: "#contacto" },
        { label: "Política de Privacidade", href: "/politica-privacidade" },
      ],
    },
  ] as FooterColumn[],
  socials: [
    {
      label: "Facebook",
      href: "https://www.facebook.com/people/Reserva-Direta/pfbid0ZasfC5LRYg9uE3yFaMMLVFGYxnvnhqFthnoTsikP4Fqs9bYT3VAmFzufw1xThVzil/",
      icon: "facebook",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/reservadireta_",
      icon: "instagram",
    },
    {
      label: "YouTube",
      href: "https://www.youtube.com/channel/UChBKw5hrLZsdDbply4KTrng",
      icon: "youtube",
    },
  ],
  copyright: "© 2026 Reserva Direta. Todos os direitos reservados.",
};

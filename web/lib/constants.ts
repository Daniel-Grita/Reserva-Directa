export const navItems = [
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
      "João e Sebastião começaram a Reserva Direta porque viram o mesmo problema repetir-se: pequenos alojamentos, pensões e hotéis boutique pagando 15 a 25% de comissão em cada reserva para Booking.com e Airbnb, com pouco controlo sobre a experiência do hóspede.",
      "Percebemos que havia uma forma melhor: combinar design, tecnologia e marketing para ajudar estas propriedades a ganhar independência das OTAs, a manter mais margem em cada reserva e a ter uma relação direta com os seus hóspedes.",
    ],
    image: { src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80", alt: "Receção de hotel boutique" },
  },
  team: {
    label: "A EQUIPA",
    heading: "Conhece quem está por trás da Reserva Direta",
    members: [
      {
        name: "João Brazão",
        role: "Fundador & Estratégia",
        bio: "João traz 15+ anos de experiência em marketing digital e estratégia para o setor hoteleiro. Apaixonado por ajudar pequenos negócios a crescer de forma sustentável.",
        photo: { src: "/team/joao.png", alt: "João Brazão" },
      },
      {
        name: "Sebastião Gomes",
        role: "Fundador & Desenvolvimento",
        bio: "Sebastião é desenvolvedor full-stack com especialidade em tecnologia hoteleira. Garante que cada projeto é executado com perfeição técnica e atenção ao detalhe.",
        photo: { src: "/team/sebastiao.png", alt: "Sebastião Gomes" },
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
    "Ajudamos alojamentos locais em Portugal a libertar-se da dependência das OTAs e a aumentar receita através de reservas diretas, com tecnologia, branding e marketing feitos à medida.",
  cta1: { label: "Fale Connosco", href: "#contacto" },
  cta2: { label: "Ver Como Funciona", href: "#como-funciona" },
  mockupNote:
    "Mockup: Booking Engine ou foto de propriedade boutique com overlay de dashboard",
};

export const problem = {
  label: "O PROBLEMA",
  heading: "As OTAs estão a comer as suas margens.",
  paragraphs: [
    "Se é proprietário de uma pensão, hotel boutique ou alojamento local, provavelmente está a perder 15-25% de cada reserva em comissões para Booking.com, Airbnb e outras plataformas.",
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
          "Através do Channel Manager da CultSwitch, os seus preços e disponibilidade ficam sincronizados em tempo real entre o seu site, Booking.com, Airbnb, Expedia e outros canais. Sem overbookings, sem gestão manual.",
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
      "Se precisar de sincronizar vários canais (Booking.com, Airbnb, Expedia e mais), o Channel Manager da CultSwitch faz tudo automaticamente. Preços, disponibilidade e reservas atualizados em tempo real em todas as plataformas. A mensalidade varia conforme o número de quartos e canais ligados.",
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
  cards: [
    {
      icon: "palette",
      title: "Design Gráfico & Branding",
      description:
        "Criamos ou revitalizamos a identidade visual do seu alojamento, desde o logo até aos materiais de comunicação, para que se destaque no mercado.",
      cta: "",
    },
    {
      icon: "globe",
      title: "Website Profissional",
      description:
        "Website rápido, otimizado para conversões e pensado para receber reservas diretas. Fica com a propriedade completa do código, domínio e hosting.",
      cta: "",
    },
    {
      icon: "phone",
      title: "Marketing Digital",
      description:
        "Gestão de redes sociais, otimização de perfis nas OTAs e criação de conteúdo estratégico para atrair mais viajantes e converter reservas.",
      cta: "",
    },
    {
      icon: "bolt",
      title: "Tecnologia para Reservas",
      description:
        "Motor de reservas CultBooking, Google Hotel Ads e Channel Manager. A stack completa para maximizar reservas diretas e reduzir comissões.",
      cta: "",
    },
    {
      icon: "handshake",
      title: "Consultoria e Fidelização",
      description:
        "Ajudamos a conhecer melhor os seus hóspedes e a criar estratégias de fidelização que transformam estadias únicas em clientes que voltam ano após ano.",
      cta: "",
    },
  ],
};

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
      image: { src: "https://picsum.photos/seed/rd-branding/600/360", alt: "Identidade visual e branding" },
    },
    {
      slug: "website",
      title: "Website Profissional",
      description:
        "Website rápido, otimizado para conversões e pensado para receber reservas diretas. Fica com a propriedade completa do código, domínio e hosting.",
      image: { src: "https://picsum.photos/seed/rd-website/600/360", alt: "Website profissional" },
    },
    {
      slug: "marketing-digital",
      title: "Marketing Digital",
      description:
        "Gestão de redes sociais, otimização de perfis nas OTAs e criação de conteúdo estratégico para atrair mais viajantes e converter.",
      image: { src: "https://picsum.photos/seed/rd-marketing/600/360", alt: "Marketing digital" },
    },
    {
      slug: "tecnologia",
      title: "Tecnologia para Reservas",
      description:
        "Motor de reservas CultBooking, Google Hotel Ads e Channel Manager. A stack completa para maximizar reservas diretas.",
      image: { src: "https://picsum.photos/seed/rd-tecnologia/600/360", alt: "Tecnologia para reservas" },
    },
    {
      slug: "fidelizacao",
      title: "Consultoria e Fidelização",
      description:
        "Ajudamos a conhecer melhor os seus hóspedes e a criar estratégias de fidelização que transformam estadias únicas em clientes recorrentes.",
      image: { src: "https://picsum.photos/seed/rd-fidelizacao/600/360", alt: "Consultoria e fidelização" },
    },
  ],
};

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
      image: "/case-studies/case-1.png",
      category: "Turismo Rural",
      title: "Quinta no Norte",
      description: "Casa de pedra reconvertida com estratégia de reservas diretas a partir do website próprio.",
    },
    {
      image: "/case-studies/case-2.png",
      category: "Alojamento Local",
      title: "Apartamento Urbano",
      description: "Apartamento de férias com motor de reservas integrado e presença digital própria.",
    },
    {
      image: "/case-studies/case-3.png",
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
      question: "Já uso o Booking.com exclusivamente. Porquê mudar?",
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
      question: "Prefiro gerir manualmente entre Booking e Airbnb.",
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
  cards: [
    { title: "5 formas de reduzir dependência do Booking.com", cta: "Ler artigo →" },
    { title: "Google Hotel Ads vale a pena para pequenos alojamentos?", cta: "Ler artigo →" },
    { title: "Quanto custa realmente uma reserva Booking vs. direta?", cta: "Ler artigo →" },
  ],
  cta: { label: "Ver Todos os Artigos", href: "/blog" },
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

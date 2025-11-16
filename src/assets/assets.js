import Logo from "./Zenith Logo.png";
import Glass from "./Glass.png";

export const assets = {
  Logo,
  Glass,
};

export const servicos = [
  {
    id: "trafego",
    slug: "gestao-de-trafego-pago",
    icon: "BarChart2",
    title: "Gestão de Tráfego Pago",
    tag: "Marketing",
    short:
      "Campanhas inteligentes para gerar leads, vendas e maximizar o retorno do investimento.",
    highlights: ["Google Ads", "Meta Ads", "Estratégia de conversão"],
    price: "50.000 Kz",
    plans: [
      {
        nome: "Starter",
        preco: "50.000 Kz",
        descricao: "Gestão básica + 1 campanha",
      },
      {
        nome: "Pro",
        preco: "120.000 Kz",
        descricao: "Gestão completa + Relatórios",
      },
      {
        nome: "Premium",
        preco: "250.000 Kz",
        descricao: "Estratégia avançada + otimização diária",
      },
    ],
  },

  {
    id: "redes",
    slug: "gestao-de-redes-sociais",
    icon: "Users",
    title: "Gestão de Redes Sociais",
    tag: "Marketing",
    short:
      "Criamos estratégias que aumentam visibilidade, engajamento e autoridade da sua marca.",
    highlights: [
      "Conteúdo profissional",
      "Calendário mensal",
      "Gestão completa",
    ],
    price: "40.000 Kz",
    plans: [
      { nome: "Starter", preco: "40.000 Kz", descricao: "8 posts / mês" },
      {
        nome: "Pro",
        preco: "85.000 Kz",
        descricao: "12 posts + stories + engajamento",
      },
      {
        nome: "Premium",
        preco: "150.000 Kz",
        descricao: "Conteúdo completo + tráfego básico",
      },
    ],
  },

  {
    id: "webdev",
    slug: "criacao-de-websites-e-aplicacoes-web",
    icon: "Monitor",
    title: "Criação de Websites & Aplicações Web",
    tag: "Tecnologia",
    short:
      "Desenvolvemos experiências digitais rápidas, modernas e focadas em resultados.",
    highlights: ["Landing pages", "E-commerce", "PWA & React"],
    price: "150.000 Kz",
    plans: [
      {
        nome: "Landing Page",
        preco: "150.000 Kz",
        descricao: "Site de 1 página rápido e optimizado",
      },
      {
        nome: "Website Completo",
        preco: "300.000 Kz",
        descricao: "Site institucional com 4–6 páginas",
      },
      {
        nome: "E-commerce",
        preco: "500.000 Kz",
        descricao: "Loja virtual completa",
      },
    ],
  },

  {
    id: "identidade",
    slug: "identidade-visual-e-branding",
    icon: "Lightbulb",
    title: "Identidade Visual & Branding",
    tag: "Design",
    short:
      "Criamos marcas fortes, memoráveis e alinhadas aos valores do seu negócio.",
    highlights: ["Logo profissional", "Manual de marca", "Paleta e tipografia"],
    price: "35.000 Kz",
    plans: [
      { nome: "Básico", preco: "35.000 Kz", descricao: "Logo + cores" },
      {
        nome: "Pro",
        preco: "75.000 Kz",
        descricao: "Logo + manual + tipografia",
      },
      {
        nome: "Premium",
        preco: "120.000 Kz",
        descricao: "Identidade completa + mockups",
      },
    ],
  },

  {
    id: "divisas",
    slug: "carregamento-de-divisas",
    icon: "Briefcase",
    title: "Carregamento de Divisas",
    tag: "Serviços",
    short:
      "Serviço seguro e rápido para carregamento de contas internacionais e carteiras digitais.",
    highlights: ["Payoneer", "PayPal", "Binance / USDT"],
    price: "Taxas variáveis",
    plans: [
      {
        nome: "PayPal",
        preco: "10%",
        descricao: "Processamento rápido e seguro",
      },
      { nome: "Payoneer", preco: "8%", descricao: "Taxas reduzidas" },
      { nome: "Cripto", preco: "5%", descricao: "Envio USDT / BNB" },
    ],
  },

  {
  id: "formacao",
  slug: "curso-de-programacao-front-end",
  icon: "BookOpen",
  title: "Curso de Programação Front-End",
  tag: "Formação",
  short:
    "Aprenda HTML, CSS, JavaScript e React com aulas práticas e acompanhamento personalizado — tudo no conforto da sua casa.",
  highlights: [
    "Aulas ao domicílio",
    "Projetos do zero ao avançado",
    "Mentoria individual",
    "Certificado reconhecido"
  ],
  price: "60.000 Kz / mês",
  plans: [
    {
      nome: "Trimestral",
      preco: "40.000 Kz",
      descricao: "Plano com desconto exclusivo e aulas presenciais ao domicílio."
    }
  ],
}

];

// ==================== TIPOS ====================
export type Post = {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
};

export type Tool = {
  name: string;
  domain: string;
  url: string;
  description: string;
};

export type Section = {
  title: string;
  tools: Tool[];
};

// ==================== POSTS ====================
export const posts: Post[] = [
  {
    title: "Ferramentas Webs que uso no dia a dia",
    excerpt:
      "Ferramentas que uso no dia a dia para desenvolvimento web, produtividade e organização.",
    date: "11 Nov 2026 - atualizado",
    slug: "ferramentas-webs",
  },
];

// ==================== FERRAMENTAS ====================
export const toolSections: Section[] = [
  {
    title: "Design & UI/UX",
    tools: [
      {
        name: "shadcn/ui",
        domain: "ui.shadcn.com",
        url: "https://ui.shadcn.com",
        description: "Componentes acessíveis e customizáveis para React e Tailwind CSS.",
      },
      {
        name: "React Bits",
        domain: "reactbits.dev",
        url: "https://reactbits.dev",
        description: "Biblioteca de componentes animados, efeitos visuais e backgrounds para React.",
      },
      {
        name: "Flowbite",
        domain: "flowbite.com",
        url: "https://flowbite.com",
        description: "Componentes e templates de interface baseados em Tailwind CSS.",
      },
      {
        name: "CSS Buttons",
        domain: "cssbuttons.io",
        url: "https://cssbuttons.io",
        description: "Coleção de botões CSS prontos para copiar e personalizar.",
      },
      {
        name: "Pictogrammers",
        domain: "pictogrammers.com",
        url: "https://pictogrammers.com",
        description: "Bibliotecas de ícones open-source, incluindo Material Design Icons.",
      },
      {
        name: "Font Awesome",
        domain: "fontawesome.com",
        url: "https://fontawesome.com",
        description: "Biblioteca popular de ícones para projetos web.",
      },
      {
        name: "Simple Icons",
        domain: "simpleicons.org",
        url: "https://simpleicons.org",
        description: "Ícones SVG de marcas, empresas e tecnologias.",
      },
      {
        name: "SVG Repo",
        domain: "svgrepo.com",
        url: "https://www.svgrepo.com",
        description: "Grande coleção de ícones e ilustrações em SVG.",
      },
      {
        name: "SYMBL",
        domain: "symbl.cc",
        url: "https://symbl.cc",
        description: "Catálogo de símbolos Unicode, emojis, caracteres especiais e alfabetos.",
      },
      {
        name: "Pick Color Online",
        domain: "pickcoloronline.com",
        url: "https://pickcoloronline.com",
        description: "Seletor de cores online para identificar e copiar códigos de cores.",
      },
      {
        name: "Colour Picker",
        domain: "colourpicker.app",
        url: "https://colourpicker.app",
        description: "Ferramenta simples para selecionar e copiar cores.",
      },
      {
        name: "CodePen",
        domain: "codepen.io",
        url: "https://codepen.io",
        description: "Playground para criar e testar HTML, CSS e JavaScript.",
      },
      {
        name: "Delphi Tools",
        domain: "delphi.tools",
        url: "https://delphi.tools",
        description: "Coleção open-source de ferramentas criativas para imagens, cores, tipografia, PDF e desenvolvimento.",
      },
    ],
  },
  {
    title: "Desenvolvimento & Código",
    tools: [
      {
        name: "DevDocs",
        domain: "devdocs.io",
        url: "https://devdocs.io",
        description: "Documentação de diversas linguagens, frameworks e bibliotecas em um só lugar.",
      },
      {
        name: "Python Docs",
        domain: "docs.python.org",
        url: "https://docs.python.org",
        description: "Documentação oficial da linguagem Python.",
      },
      {
        name: "npm",
        domain: "npmjs.com",
        url: "https://www.npmjs.com",
        description: "Registro de pacotes e bibliotecas JavaScript e Node.js.",
      },
      {
        name: "Public APIs",
        domain: "github.com",
        url: "https://github.com/public-apis/public-apis",
        description: "Repositório com uma extensa lista de APIs públicas para projetos.",
      },
      {
        name: "Streamlit",
        domain: "streamlit.io",
        url: "https://streamlit.io",
        description: "Framework Python para criar aplicações web interativas, dashboards e ferramentas de dados.",
      },
      {
        name: "Nominatim",
        domain: "nominatim.org",
        url: "https://nominatim.org",
        description: "Serviço de geocodificação baseado no OpenStreetMap para pesquisar endereços e coordenadas.",
      },
      {
        name: "GitHub",
        domain: "github.com",
        url: "https://github.com",
        description: "Plataforma de hospedagem de código, versionamento Git e colaboração em projetos.",
      },
    ],
  },
  {
    title: "DevTools & Utilitários",
    tools: [
      {
        name: "IT Tools",
        domain: "it-tools.tech",
        url: "https://it-tools.tech",
        description: "Hub de ferramentas para desenvolvedores: JSON, JWT, Base64, criptografia, redes e conversões.",
      },
      {
        name: "Invertexto",
        domain: "invertexto.com",
        url: "https://invertexto.com",
        description: "Mais de 100 utilitários para textos, cálculos, datas, códigos, criptografia e conversões.",
      },
      {
        name: "SEO Studio",
        domain: "seostudio.tools",
        url: "https://seostudio.tools/pt",
        description: "Hub com ferramentas de SEO, texto, programação, YouTube, webmaster e conversões.",
      },
      {
        name: "123Apps",
        domain: "123apps.com",
        url: "https://123apps.com",
        description: "Suíte de ferramentas online para edição de áudio, vídeo, PDF e outros arquivos.",
      },
      {
        name: "TinyWow",
        domain: "tinywow.com",
        url: "https://tinywow.com",
        description: "Coleção de ferramentas para edição e conversão de arquivos, imagens, vídeos e PDFs.",
      },
      {
        name: "Gravador",
        domain: "gravador.net",
        url: "https://gravador.net",
        description: "Gravador de áudio online simples e acessível pelo navegador.",
      },
      {
        name: "Web Check",
        domain: "web-check.xyz",
        url: "https://web-check.xyz",
        description: "Analisa sites e domínios: DNS, SSL, cabeçalhos HTTP, tecnologias, segurança e infraestrutura.",
      },
    ],
  },
  {
    title: "SEO, Web & Infraestrutura",
    tools: [
      {
        name: "Supabase",
        domain: "supabase.com",
        url: "https://supabase.com",
        description: "Backend as a Service com PostgreSQL, autenticação, storage e APIs.",
      },
      {
        name: "Render",
        domain: "render.com",
        url: "https://render.com",
        description: "Plataforma de deploy e hospedagem de aplicações, APIs, bancos de dados e serviços.",
      },
      {
        name: "Railway",
        domain: "railway.com",
        url: "https://railway.app",
        description: "Plataforma simplificada para deploy de aplicações, backends e bancos de dados.",
      },
      {
        name: "Vercel",
        domain: "vercel.com",
        url: "https://vercel.com",
        description: "Plataforma de deploy com foco em frontend, Next.js e aplicações web.",
      },
      {
        name: "Square Cloud",
        domain: "squarecloud.app",
        url: "https://squarecloud.app",
        description: "Hospedagem de aplicações, bots e serviços com configuração simplificada.",
      },
      {
        name: "Hostinger",
        domain: "hostinger.com",
        url: "https://www.hostinger.com",
        description: "Serviços de hospedagem, domínios e infraestrutura web.",
      },
      {
        name: "Locaweb",
        domain: "locaweb.com.br",
        url: "https://www.locaweb.com.br",
        description: "Empresa brasileira de hospedagem, domínios e serviços digitais.",
      },
      {
        name: "EmailJS",
        domain: "emailjs.com",
        url: "https://www.emailjs.com",
        description: "Serviço para integração e envio de e-mails diretamente pelo frontend.",
      },
    ],
  },
  {
    title: "Produtividade & Compartilhamento",
    tools: [
      {
        name: "Google NotebookLM",
        domain: "notebooklm.google.com",
        url: "https://notebooklm.google.com",
        description: "Assistente de IA para organizar documentos, pesquisas, fontes e conhecimentos.",
      },
      {
        name: "Dontpad",
        domain: "dontpad.com",
        url: "https://dontpad.com",
        description: "Bloco de notas online compartilhado por URL, sem necessidade de cadastro.",
      },
      {
        name: "Dontpad BR",
        domain: "dontpad.com.br",
        url: "https://dontpad.com.br",
        description: "Alternativa brasileira ao Dontpad para compartilhar textos online.",
      },
      {
        name: "PairDrop",
        domain: "pairdrop.net",
        url: "https://pairdrop.net",
        description: "Transfira arquivos e textos entre dispositivos diretamente pelo navegador.",
      },
      {
        name: "10 Minute Mail",
        domain: "10minutemail.com",
        url: "https://10minutemail.com/pt-BR/",
        description: "Serviço de e-mail temporário para cadastros e verificações pontuais.",
      },
      {
        name: "Drive de Pobre",
        domain: "drivedepobre.com",
        url: "https://drivedepobre.com",
        description: "Alternativa simples para armazenar e compartilhar arquivos online.",
      },
      {
        name: "draw.io",
        domain: "draw.io",
        url: "https://app.diagrams.net",
        description: "Criação de diagramas, fluxogramas, mapas mentais e arquiteturas.",
      },
    ],
  },
  {
    title: "Imagem, Áudio & Vídeo",
    tools: [
      {
        name: "Red Panda Compress",
        domain: "redpandacompress.com",
        url: "https://www.redpandacompress.com/pt-br/",
        description: "Compactação de vídeos diretamente no navegador, sem necessidade de instalar programas.",
      },
      {
        name: "FreeCut",
        domain: "freecut.net",
        url: "https://freecut.net",
        description: "Editor de vídeo online com timeline, múltiplas faixas, keyframes e ferramentas de edição.",
      },
      {
        name: "Radiooooo",
        domain: "app.radiooooo.com",
        url: "https://app.radiooooo.com",
        description: "Máquina do tempo musical: descubra músicas escolhendo país e década.",
      },
      {
        name: "Radio Garden",
        domain: "radio.garden",
        url: "https://radio.garden",
        description: "Explore e escute estações de rádio do mundo inteiro em um globo interativo.",
      },
    ],
  },
  {
    title: "Estudos & Prática",
    tools: [
      {
        name: "Codewars",
        domain: "codewars.com",
        url: "https://www.codewars.com",
        description: "Desafios de programação e lógica por meio de exercícios chamados katas.",
      },
      {
        name: "LeetCode",
        domain: "leetcode.com",
        url: "https://leetcode.com",
        description: "Exercícios de algoritmos, estruturas de dados e preparação para entrevistas técnicas.",
      },
      {
        name: "pwn.college",
        domain: "pwn.college",
        url: "https://pwn.college",
        description: "Plataforma prática de aprendizado em cibersegurança, sistemas e binary exploitation.",
      },
      {
        name: "Kaggle",
        domain: "kaggle.com",
        url: "https://www.kaggle.com",
        description: "Comunidade de ciência de dados com datasets, notebooks, competições e machine learning.",
      },
      {
        name: "DevMedia",
        domain: "devmedia.com.br",
        url: "https://www.devmedia.com.br",
        description: "Conteúdos, tutoriais e cursos de programação em português.",
      },
      {
        name: "Lovable",
        domain: "lovable.dev",
        url: "https://lovable.dev",
        description: "Plataforma de criação de aplicações com IA e código editável.",
      },
    ],
  },
  {
    title: "Entretenimento & Descobertas",
    tools: [
      {
        name: "Famelack",
        domain: "famelack.com",
        url: "https://famelack.com",
        description: "Explore canais de TV ao vivo, rádios e webcams de diferentes países pelo navegador.",
      },
      {
        name: "Flow de Dados",
        domain: "flowdedados.com",
        url: "https://flowdedados.com",
        description: "Conteúdo e materiais sobre tecnologia, programação e ciência de dados.",
      },
      {
        name: "Click the Red Button",
        domain: "clicktheredbutton.com",
        url: "https://clicktheredbutton.com",
        description: "Descubra sites, jogos, experiências interativas e projetos curiosos aleatoriamente.",
      },
      {
        name: "MCStumble",
        domain: "mcstumble.com",
        url: "https://mcstumble.com",
        description: "Descoberta aleatória de conteúdos e experiências interessantes pela internet.",
      },
      {
        name: "InspiroBot",
        domain: "inspirobot.me",
        url: "https://inspirobot.me",
        description: "Gerador de frases motivacionais aleatórias, muitas vezes absurdas e engraçadas.",
      },
    ],
  },
  {
    title: "Sistema & Licenciamento",
    tools: [
      {
        name: "Massgrave (MAS)",
        domain: "massgrave.dev",
        url: "https://massgrave.dev",
        description: "Documentação e código-fonte do Microsoft Activation Scripts, projeto open-source para gerenciamento de ativação do Windows e Office.",
      },
    ],
  },
];

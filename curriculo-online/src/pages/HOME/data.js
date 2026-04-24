import {
    FaGamepad,
    FaGraduationCap,
    FaBuilding,
    FaBriefcase,
    FaCode,
    FaLaptopCode,
} from 'react-icons/fa';

import {
    SiJavascript,
    SiTypescript,
    SiPython,
    SiHtml5,
    SiCss,
    SiMysql,
    SiCplusplus,
    SiDelphi,
    SiUnity,

    SiTailwindcss,
    SiBootstrap,
    SiReact,
    SiVite,
    SiMui,
    SiExpo,
    SiNodedotjs,
    SiExpress,
    SiFlask,
    SiPostman,
    SiPandas,
    SiMongodb,
    SiCypress,
    SiJest,
    SiSelenium,
    SiGithub,
    SiFigma,
    SiVercel,
    SiTrello,
    SiRender,
    SiArduino

} from 'react-icons/si';

//construção do certificado
// minhas skills
export const tecnologias = [
    { nome: "JavaScript", Icon: SiJavascript, cor: "#F7DF1E" },
    { nome: "Python", Icon: SiPython, cor: "#3776AB" },
    { nome: "HTML5", Icon: SiHtml5, cor: "#E34F26" },
    { nome: "CSS3", Icon: SiCss, cor: "#1572B6" },
    { nome: "SQL", Icon: SiMysql, cor: "#4479A1" },
    { nome: "C++", Icon: SiCplusplus, cor: "#00599C" },
    { nome: "Delphi (Object Pascal)", Icon: SiDelphi, cor: "#EE1F35" },
    { nome: "Construct 2", Icon: SiUnity, cor: "#FF6600" },
];

export const skills = [
    {
        titulo: 'Types of Applications / Solutions', cor: 'secondary', nomes: [
            'Web Applications',
            'Mobile Applications',
            'SaaS (Software as a Service)',
            'Custom Software Development',
            'Automation Solutions',
            'API & Integrations'
        ]
    }, //Cloud-Based Solutions, Enterprise Systems

    {
        titulo: 'Frontend & Mobile', cor: 'primary', nomes: [
            { nome: "React.js", Icon: SiReact, cor: "#61DAFB" },
            { nome: "React Native", Icon: SiReact, cor: "#617dfb" },
            { nome: "TypeScript", Icon: SiTypescript, cor: "#3178C6" },
            { nome: "Vite", Icon: SiVite, cor: "#646CFF" },
            { nome: "Tailwind CSS", Icon: SiTailwindcss, cor: "#06B6D4" },
            { nome: "Bootstrap", Icon: SiBootstrap, cor: "#7952B3" },
            { nome: "Material-UI", Icon: SiMui, cor: "#0081CB" },
            { nome: "Expo", Icon: SiExpo, cor: "#000327" },
            { nome: 'Tkinter', Icon: SiPython, cor: "#3776AB" }
        ]
    },
    {
        titulo: 'Backend & APIs', cor: 'success', nomes: [
            { nome: "Node.js", Icon: SiNodedotjs, cor: "#339933" },
            { nome: "Express.js", Icon: SiExpress, cor: "#000000" },
            { nome: "Flask", Icon: SiFlask, cor: "#000000" },
            { nome: "Postman", Icon: SiPostman, cor: "#FF6C37" },
            { nome: "Pandas", Icon: SiPandas, cor: "" }
        ]
    },
    {
        titulo: 'QA & Test Automation', cor: 'info', nomes: [
            { nome: "Cypress", Icon: SiCypress, cor: "#17202C" },
            { nome: "Jest", Icon: SiJest, cor: "#C21325" },
            { nome: "Selenium", Icon: SiSelenium, cor: "#43B02A" },
            { nome: "PyAutoGUI", Icon: SiPython, cor: "#3776AB" },
        ]
    },
    {
        titulo: 'Banco de Dados', cor: 'secondary', nomes: [
            { nome: "MySQL", Icon: SiMysql, cor: "#4479A1" },
            { nome: "MongoDB", Icon: SiMongodb, cor: "#47A248" },
        ]
    },

    {
        titulo: 'DevOps & Colaboração', cor: 'danger', nomes: [
            { nome: "Git / GitHub", Icon: SiGithub, cor: "#181717" },
            { nome: "Figma", Icon: SiFigma, cor: "#F24E1E" },
            { nome: "Vercel", Icon: SiVercel, cor: "#000000" },
            { nome: "Render", Icon: SiRender, cor: "#4b4b4b" },
            { nome: "Trello", Icon: SiTrello, cor: "#0052CC" },
        ]
    },
    { titulo: 'Hardware & IoT', cor: 'success', nomes: [{ nome: "Arduino / Esp32", Icon: SiArduino, cor: "#00979D" },] },
    { titulo: 'Metodologias & Conhecimentos', cor: ['dark', 'primary-subtle text-dark'], nomes: ['Scrum & Kanban', 'Gestão de Projetos', 'Análise de Sistemas', 'Boas Práticas de Programação', 'Automação de Testes', 'API REST'] },
];

//Formação Acadêmica
export const FormAcademico = [
    { nome: 'Ensino Médio', status: 'Concluído', instituicao: 'SESI - Botucatu', ano: '2025', certificado: 'certificadoescolar.pdf', cor: 'success' },
    { nome: 'Curso Técnico - A. Des. de Sistemas', status: 'Concluído', instituicao: 'SENAI - Botucatu', ano: '2025', certificado: '', cor: 'success' },
    { nome: 'Curso Tecnólogo - A. Des. de Sistemas', status: 'Em andamento', instituicao: 'Uninter', ano: '2028', certificado: '', cor: 'warning' },
];

// Cursos Complementares e EAD
export const cursos = [
    { nome: 'Excel Básico ao Intermediário', status: 'Concluído', instituicao: 'Fundação Bradesco - Escola Virtual', ano: '2021', certificado: 'excel.pdf', cor: 'success' },
    { nome: 'New U-Best', status: 'Em andamento', instituicao: 'Uninter', ano: '---', certificado: '', cor: 'warning' },
    { nome: 'Inteligência Artificial: conceitos e práticas', status: 'Concluído', instituicao: 'senac - botucatu', ano: '2026', certificado: 'iasenac.pdf', cor: 'success' },
    { nome: 'Jornada Python', status: 'Concluído', instituicao: 'Hashtag', ano: '2026', certificado: 'Validação_Certificado_jornada_python.pdf', cor: 'success' },
    { nome: 'TREINAMENTO INICIAL EM PROTEÇÃO RADIOLÓGICA - MEDICINA NUCLEAR - EAD - 2026', status: 'Concluído', instituicao: 'Hospital das Clínicas da Faculdade de Medicina de Botucatu - HCFMB', ano: '2026', certificado: 'TREINAMENTO_INICIAL_EM_PROTECAO_RADIOLOGICA-MEDICINA_NUCLEAR-EAD-2026.pdf', cor: 'success' },
    { nome: 'Startup Day - 38058018', status: 'Concluído', instituicao: 'Sebrae-SP', ano: '2026', certificado: 'startupdayC.pdf', cor: 'success' },
];

// agrupamento de cursos
export const eadCurso = [
    {
        titulo: 'EAD SENAI – ead.sp.senai.br', cursos: [
            { nome: "Competência Transversal: Segurança no Trabalho", dt: '31/10/2024', certificado: "certificado segurança no trabalho.pdf" },
            { nome: "Economia Circular", dt: '15/11/2024', certificado: "Economia_Circular.pdf" },
            { nome: "Desvendando o 5G", dt: '15/11/2024', certificado: "Desvendando_o_5G.pdf" },
            { nome: "Privacidade e Proteção de Dados (LGPD)", dt: '16/11/2024', certificado: "Privacidade_e_Proteção_de_Dados_(LGPD).pdf" },
            { nome: "Desvendando a Indústria 4.0", dt: '08/04/2025', certificado: "Desvendando_a_Indústria_4.0.pdf" },
            { nome: "Empreender SENAI", dt: '08/04/2025', certificado: "Empreender_SENAI.pdf" },
            { nome: "WEB 3.0", dt: '08/04/2025', certificado: "WEB_3.0.pdf" },
            { nome: "Desvendando o ESG", dt: '08/04/2025', certificado: "Desvendando_o_ESG.pdf" },
            { nome: "Fluência: Fundamentos da Inteligência Artificial", dt: '08/04/2025', certificado: "FLUÊNCIA___FUNDAMENTOS_DA_INTELIGÊNCIA_ARTIFICIAL.pdf" },
        ]
    },
]

//experiencias profissionais
export const expeProf = [
    {
        titulo: 'Grupo Consciência (CNS)',
        tipo: 'Estágio',
        icon: <FaLaptopCode className="me-2" />,
        corTipo: 'bg-secondary', //bg-success verde pra atual
        texto: {
            cargo: 'Estagiário – Desenvolvedor Full Stack',
            periodo: 'Janeiro 2026 – Abril 2026',
            desc: 'Atuação em projetos internos corporativos com Delphi Pascal, aprendizado contínuo de novas tecnologias e adaptação a diferentes stacks de desenvolvimento.',
            tech: [6] //tecnologias utilizadas puzando pelo index de const tecnologias
        },
        certificado: ['📄 Certificado', 'CNS1.pdf']
    },
    {
        titulo: 'SagaSenai',
        tipo: 'Freelancer',
        icon: <FaCode className="me-2" />,
        corTipo: 'bg-primary', // azul pra freelance
        texto: {
            cargo: 'Desenvolvedor Full Stack',
            periodo: 'Dezembro 2024 – Julho 2025',
            desc: 'Desenvolvimento de interfaces web, integração com APIs REST e otimização de performance de aplicações.',
            tech: [0, 2, 3, 1, 4]
        },
        certificado: []
    },
    {
        titulo: 'BirdGameJam',
        tipo: 'Game Jam',
        icon: <FaGamepad className="me-2" />,
        corTipo: 'bg-warning text-dark', // amarelo pra game
        texto: {
            cargo: 'Autor e Desenvolvedor',
            periodo: 'Março 2025',
            desc: 'Desenvolvimento de jogo 2D para navegador utilizando Construct 2, com foco em mecânicas interativas, design de níveis e publicação na itch.io.',
            tech: [7] //'Construct 3'
        },
        certificado: []
    },
    {
        titulo: 'TEC Glass Componentes Industriais LTDA',
        tipo: 'Aprendiz',
        icon: <FaGraduationCap className="me-2" />,
        corTipo: 'bg-secondary',
        texto: {
            cargo: 'Aprendiz – Análise e Desenvolvimento de Sistemas',
            periodo: '19 de Maio – 19 de Dezembro de 2025',
            desc: 'Participação em curso técnico com formação teórica e prática em desenvolvimento de software, vinculado à empresa contratante.',
            tech: []
        },
        certificado: ['📄 Certificado', 'tec.png']
    },
];

//iniciacao cientifica e apresentacoes
export const icp = [
    {
        titulo: 'PIBIC Jr. – Sistema de Gestão de Fármacos (Medicina Nuclear)',
        desc: 'Desenvolvimento de sistema web para controle de estoque de fármacos em ambiente hospitalar, com geração de alertas automáticos de validade, estoque mínimo e uso atípico.',
        tech: [0, 1, 2, 3, 4],
        etapas: [
            { titulo: 'Projeto de Pesquisa', subtitulo: 'Automação no Controle de Kits Radiofarmacêuticos', texto: 'Modelagem e implementação de solução para rastreabilidade de kits e frascos utilizados em medicina nuclear, visando maior segurança, organização e confiabilidade das informações.' },
            { titulo: 'Apresentação Técnica', subtitulo: 'Sistema de Gerenciamento de Estoque Hospitalar', texto: 'Apresentação dos resultados parciais do sistema desenvolvido, destacando arquitetura, banco de dados e impactos na gestão de insumos hospitalares.' },
        ],
        arquivo: [],
        status: 'Em andamento',
        cor: 'warning'
    },
    {
        titulo: '1º Lugar – Congresso Científico UNESP',
        desc: 'Projeto SENAI+ apresentado e premiado com 1º lugar na categoria Ensino Médio durante o I Encontro de Metodologia e Raciocínio Científico da UNESP.',
        tech: [0, 1, 2, 3, 4],
        etapas: [
            {
                titulo: 'Desenvolvimento do TCC – SENAI+',
                subtitulo: 'Sistema de Gestão de Entrada e Saída de Alunos',
                texto: 'Desenvolvimento de sistema para controle e registro de alunos fora do horário padrão, visando maior organização, segurança e rastreabilidade no ambiente escolar.'
            },
            {
                titulo: 'Premiação – 1º Lugar',
                subtitulo: 'Categoria Ensino Médio',
                texto: 'Projeto classificado em 1º lugar entre os trabalhos apresentados, reconhecido pelo mérito técnico, inovação e aplicabilidade.'
            }
        ],
        arquivo: [['📄 Participação', 'participouunesp.pdf'], ['📄 Apresentação', 'trabalhoapresentadounesp.pdf'], ['📄 Premiação', 'premiounesp.pdf']],
        status: 'Concluído',
        cor: 'success'
    }


]
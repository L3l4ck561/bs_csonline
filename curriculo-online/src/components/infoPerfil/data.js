const calcularIdade = (ano, mes, dia) => {
    const hoje = new Date();
    let idade = hoje.getFullYear() - ano;
    const aniversario =
        hoje.getMonth() + 1 > mes ||
        (hoje.getMonth() + 1 === mes && hoje.getDate() >= dia);

    if (!aniversario) idade--;
    return idade;
};

export const perfil = {
    img: `${process.env.PUBLIC_URL}/image.jpg`,
    nome: 'Carlos Gabriel dos Santos Araújo',
    idade: calcularIdade(2007, 1, 5),
    cidade: 'Botucatu - SP'
};

export const cargo = 'Full Stack Developer | QA & Test Automation | Custom Software Development';

export const desc = `
Olá, Sou Carlos Gabriel, Desenvolvedor Full Stack com experiência em QA e automação de testes. Desenvolvo sistemas completos, rápidos, intuitivos e confiáveis, usando tecnologias modernas como React, JavaScript, Python e SQL. Tenho foco em qualidade, aplicando testes automatizados para reduzir erros e garantir estabilidade. Já criei soluções que impactaram ambientes corporativos e meu objetivo é transformar ideias em sistemas eficientes e duradouros. Estou disponível para ajudar a tirar projetos do papel.
`;

export const descP = [
    'Olá, Sou Carlos Gabriel, desenvolvedor Full Stack com experiência em QA e automação de testes. Desenvolvo sistemas completos, rápidos, intuitivos e confiáveis, utilizando tecnologias como React, JavaScript, Python e SQL. ',
    'Tenho foco em qualidade, aplicando testes automatizados para reduzir erros e garantir estabilidade. Já desenvolvi soluções para ambientes corporativos e estou sempre em busca de transformar ideias em sistemas eficientes e duradouros.'
]

export const topicos = [
    '💡 Focado em desenvolvimento web, mobile e testes automatizados',
    '🔍 Buscando sempre escrever código limpo, organizado e escalável'
];




// local + contatos na mesma linha
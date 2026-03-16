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
    img: `${process.env.PUBLIC_URL}/eu.jpeg`,
    nome: 'Carlos Gabriel dos Santos Araújo',
    idade: calcularIdade(2007, 1, 5),
    cidade: 'Botucatu - SP'
};

export const cargo = 'Desenvolvedor Full Stack | QA | Automação';

export const desc = `
Análista e Desenvolvedor de Sistemas com experiência
prática em desenvolvimento web, APIs REST e projetos corporativos.
Atuação como estagiário Full Stack, com foco em boas práticas,
organização de código e aprendizado contínuo.
`;

export const topicos = ['💡 Focado em desenvolvimento web, mobile e testes automatizados','🔍 Buscando sempre escrever código limpo, organizado e escalável'];




// local + contatos na mesma linha
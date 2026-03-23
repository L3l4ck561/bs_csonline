function formatarTelefoneBR(numero) {
  numero = numero.replace(/\D/g, ""); // remove tudo que não for número

  const pais = numero.slice(0, 2);
  const ddd = numero.slice(2, 4);
  const parte1 = numero.slice(4, 9);
  const parte2 = numero.slice(9);

  return `+${pais} (${ddd}) ${parte1}-${parte2}`;
}

const numero = '5514988029965'

export const contatos = [
    'ti.carlos.dev@gmail.com',
    [numero,formatarTelefoneBR(numero),encodeURIComponent('Olá, tenho interesse no serviço')],
    'linkedin.com/in/carlos-araújo-6447653a6',
    'github.com/L3l4ck561'
];
// https://www.alura.com.br/artigos/manipulacao-de-array-com-map-filter-e-reduce


const empresas = [
    { nome: 'Samsung', valorDeMercado: 50, CEO: 'Kim Hyun Suk', anoDeCriacao: 1938 },
    { nome: 'Microsoft', valorDeMercado: 415, CEO: 'Satya Nadella', anoDeCriacao: 1975 },
    { nome: 'Intel', valorDeMercado: 117, CEO: 'Brian Krzanich', anoDeCriacao: 1968 },
    { nome: 'Facebook', valorDeMercado: 383, CEO: 'Mark Zuckerberg', anoDeCriacao: 2004 },
    { nome: 'Spotify', valorDeMercado: 30, CEO: 'Daniel Ek', anoDeCriacao: 2006 },
    { nome: 'Apple', valorDeMercado: 845, CEO: 'Tim Cook', anoDeCriacao: 1976 }
];

const anoDeCriacaoDaEmpresa = empresas.filter(empresaAno => (empresaAno.anoDeCriacao > 2000));

console.log("------------------------------FILTER------------------------------------------------")
console.log(anoDeCriacaoDaEmpresa)

console.log("---------------------------------MAP-------------------------------------------------")

const exibeInformacoes = empresas.map(empresa => `${empresa.nome}` + ' CEO: ' + `${empresa.CEO}`);
console.log(exibeInformacoes)

console.log("-------------------------------REDUCE-------------------------------------------------")

const total = empresas.reduce((resultado, quantidade) => {
    return (resultado + quantidade.valorDeMercado);
}, 0);

console.log(`A soma do valor de todas as empresas é: ${total}........`)
console.log("--------------------------------------------------------------------------------------")
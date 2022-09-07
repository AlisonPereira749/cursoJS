//Atribuição via Desestruturação
//Ex: fazer
// A = B 
// B = C
// C = A

// let a = 'A'; // B
// let b = 'B'; // C
// let c = 'C'; // A

// const numeros = ['B', 'C', 'A'];
// [a, b, c] = numeros;

// console.log(a, b, c)

//EX 2
const pessoa = {
    nome: 'Antonio',
    sobreNome: 'Alison',
    idade: 19,
    endereco: {
        rua: 'Guara 2',
        numero: 27
    }
};

//Atribuição via Desestruturação
const { idade, sobreNome } = pessoa; //posso colocar na chave um valor padrão ou vazio

const { endereco: {rua, numero} } = pessoa; //posso pegar os dados dentro do objeto

console.log(rua, numero)
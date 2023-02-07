//Função construtora -> retorna objetos
//Função fabrica -> retorna objetos

//Função construtora precisa da palavra (new)
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome= sobrenome;
}

const p1 = new Pessoa('Paulo', 'Vitor')
const p2 = new Pessoa('Alison', 'Pereira')

console.log(p1.nome)
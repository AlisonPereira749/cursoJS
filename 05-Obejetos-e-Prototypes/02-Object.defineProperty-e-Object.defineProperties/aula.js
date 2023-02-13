//defineProperty - defineProperies

//Ex - a propriedade (estoque) não pode ser alterada

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, //mostra a chave
        value: estoque, //valor
        writable: false, //Pode alterar
        configurable: false //configurável
    })
}

const p1 = new Produto('Camisa', 20, 5);
p1.estoque = 500;
console.log(p1)
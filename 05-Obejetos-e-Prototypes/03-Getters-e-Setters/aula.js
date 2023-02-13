// Getter e Setters
//Vamos fazer o Getter e Setters verificar se o valor de (estoque) é um número

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: true,
        get: function() {
            return estoquePrivado;
        },
        set: function(valor) {
            if (typeof valor !== 'number') {
                throw new TypeError('Valor invalido')
            }
            estoquePrivado = valor;
        }
    });
}

const p1 = new Produto('Camisa', 30, 55);
p1.estoque = 10;
console.log(p1.estoque);
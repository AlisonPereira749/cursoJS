//Factory Functions

function criaPessoa(nome, sobrenome, peso, altura) {
    return {
        nome, sobrenome,
        fala: function(assunto) {
            return `${this.nome} está ${assunto}`
        },
        peso: peso,
        altura: altura,
        imc() {
            const indice = this.peso / (this.altura * this.altura)
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Luiz', 'Otávio', 80, 1.90);
console.log(p1.fala('falando que seu IMC é:'))
console.log(p1.imc());

const p2 = criaPessoa('joão', 'Paulo', 75, 1.70);
console.log(p2.fala('falando que seu IMC é:'))
console.log(p2.imc());
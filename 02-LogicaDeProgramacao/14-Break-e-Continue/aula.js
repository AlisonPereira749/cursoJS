// BREAK E CONTINUE
//EX: QUERO PULAR O NÚMERO

const numeros = [1, 2, 3, 4, 5, 6, 7, 8];

for (let numero of numeros) {

    if (numero === 2) {
        console.log('Pulei o número 2')
        continue; // CONTINUE - continua para a proxima interação
    }

    console.log(numero);

    if (numero === 7 ) {
        console.log('7 foi encontrado. saindo do bloco ');
        break; // BREAK - sai do laço
    }
}


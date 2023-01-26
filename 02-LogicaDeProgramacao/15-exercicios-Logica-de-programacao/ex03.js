// Número divisível por 3 = Fizz
// Número divisível por 5 = Buzz
// Número divisível por 3 e 5 = FizzBuzz
// Número NÂO é divisível por 3 e 5 = Retornar não é número
// Função com números de 0 a 100


function fizzBuzz(numero) {
    if (typeof numero !== 'number') return 'Não é número';

    if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz';

    if (numero % 3 === 0) return 'Fizz';

    if (numero % 5 === 0) return 'Buzz';

    return 'Número não divisível por 3 nem por 5.'
}

for (let i = 0; i <= 100; i++) {
    console.log(i, fizzBuzz(i))
}


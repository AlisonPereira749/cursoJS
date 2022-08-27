//Condicionais do JavaScript

/**
 * EX
 * 0 - 11 => Bom dia
 * 12 - 17 => Boa tarde
 * 18 - 23 => Boa noite
 */

//if pode ser usado si=ozinho
// sempre que utilizo a palavra else, preciso de um if antes
// posso ter vários else if na mesma checagem
// só posso ter um else na checagem
// podemos usar condições sem else if, ultilizando apenas if e else

let hora = 20;

if (hora >= 0 && hora < 11) {
    console.log('Bom dia!')

} else if (hora >= 12 && hora < 17){
    console.log('Boa tarde!')

} else if (hora >= 18 && hora <= 23) {
    console.log('Boa noite!')
} else {
    console.log('Sua hora está incorreta!')
}
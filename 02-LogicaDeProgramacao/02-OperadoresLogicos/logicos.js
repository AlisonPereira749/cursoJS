/**
 * Operadores lógicos
 * && - END - as espressões precisam ser verdadeiras
 * || - OR - uma das espressões precisam ser verdadeiras
 * ! - NOT - Negação
 */

let chovendo = true;
let tenhoDinheiro = false;

console.log(`Posso sair: ${chovendo && tenhoDinheiro}`)
console.log(`Posso sair: ${chovendo || tenhoDinheiro}`)
console.log(`Posso sair: ${!chovendo}`) //Negação
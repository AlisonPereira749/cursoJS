//Operação Ternária
// ? e :
// (condição) ? 'Valor para verdadeiro' : 'Valor para falso';
//Parecido com IF ELSE
/**
 Ex: Se o usuário tiver mais de 1000 pontos (Usuário VIP) a baixo (Usuário Normal)
 */

//Com IF ELSE
let pontos = 1100;
if (pontos >= 1000) {
    console.log('Usuário VIP')
} else {
    console.log('Usuário normal')
}
console.log()

//Com ? :
let nivelUser = pontos >= 1000 ? 'User VIP' : 'User normal';
console.log(nivelUser)
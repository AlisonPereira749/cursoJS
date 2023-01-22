
// let i = 0;

// while (i <= 10) {
//     console.log(i);
//     i++;
// }

//função para criar números aleatorios
function random(min, max) {
    const r = Math.random() * (max - min);
    return Math.floor(r);
}
let max = 50;
let min = 1;
let rand = random(min, max)

//parar o laço de números aleatorios quando encontrar o 10
while (rand !== 10) {
    rand = random(min, max);
    console.log(rand)
}
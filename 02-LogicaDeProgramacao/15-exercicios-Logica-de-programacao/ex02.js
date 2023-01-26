// Criar função que chama ePaisagem, essa função vai receber dois argumentos, largura e altura de uma imagem (number)
//Retorne true se a imagem estiver no modo paisagem

function ePaisagem  (largura, altura) {
    return largura > altura;
}

console.log(ePaisagem(4000, 1800))

//Solução 2
const ePaisagem2 = (largura2, altura2) => largura2 > altura2;
console.log(ePaisagem(1366, 2400))
//Criar uma função que recebe dois números e retorna o maior deles

//Solução 1
function max (x, y) {
    if (x > y) {
        return x;
    } else {
        return y;
    }
}
console.log(max(10, 2))

//Solução 2
function max2 (x, y) {
    if (x > y) {
        return x;
    }
    return y;
}

console.log(max2(10, 22))

//Solução 3
function max3 (x, y) {
    return x > y ? x : y;
}

console.log(max3(50, 22))

//Solução 4
const max4 = (x, y) => x > y ? x : y;
console.log(max3(80, 79))

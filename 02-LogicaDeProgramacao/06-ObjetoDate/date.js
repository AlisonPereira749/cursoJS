// 01/01/1970 - timestamp unix
// Sempre que se usa NEW, significa conversar com uma função construtora
// O mês começa do 0 (mês zero é Janeiro)
// Estrutura (ano, mês, dia, hora, minutos, segundos, milissegundos)
// Posso omitir tudo a partir do (dia)

//  Formas de declarar data
const data = new Date(2022, 9, 15, 14, 32, 555)
console.log(data.toString())

const dataEx = new Date('2022-09-05 20:30:30.666')
//Obtendo valores separados
console.log('Ano', dataEx.getFullYear());
console.log('Mês', dataEx.getMonth() + 1); //Começa do 0
console.log('Dia', dataEx.getDate());
console.log('Hora', dataEx.getHours());
console.log('Minutos', dataEx.getMinutes());
console.log('Seg', dataEx.getSeconds());
console.log('Ms', dataEx.getMilliseconds());
console.log('Dia da semana', dataEx.getDay()); // 0 é domingo e 6 é sábado
console.log(dataEx.toDateString()) 
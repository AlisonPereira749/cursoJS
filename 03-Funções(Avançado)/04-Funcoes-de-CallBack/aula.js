//Funções de CallBack
//Falando sobre ordem de execução das funções
//Ex: F1, F2, F3 são funções que precisam ser executadas em ordem 

function rand(min = 1000, max = 3000) {
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}

function f1(CallBack) {
    setTimeout(function() {
        console.log('F1');
        if (CallBack) CallBack();
    }, rand());
}

function f2(CallBack) {
    setTimeout(function() {
        console.log('F2');
        if (CallBack) CallBack();
    }, rand());
}

function f3(CallBack) {
    setTimeout(function() {
        console.log('F3');
        if (CallBack) CallBack();
    }, rand());
}

f1(f1Callback);

function f1Callback() {
    f2(f2Callback);
};

function f2Callback() {
    f3(f3Callback);
}

function f3Callback() {
    console.log('Olá Mundo!')
}
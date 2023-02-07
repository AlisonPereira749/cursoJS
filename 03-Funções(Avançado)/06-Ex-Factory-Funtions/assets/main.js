function criaCalculadora() {
    return {
        //atributos
        display: document.querySelector('.display'),

        inicia() {
            this.cliqueBtn();
            this.pressEnter();
        },

        pressEnter() {
            this.display.addEventListener('keyup', (e) => {
                if (e.keyCode === 13) {
                    this.realizaConta();
                }
            });
        },
        
        clearDisplay() {
            this.display.value = ' ';
        },

        apagaUmNum() {
            this.display.value = this.display.value.slice(0, -1);
        },

        realizaConta() {
            let conta = this.display.value;

            try {
                conta = eval(conta);

                if (!conta) {
                    alert('Conta inválida');
                    return;
                }

                this.display.value = String(conta);

            } catch(e) {
                alert('Conta inválida');
                return
            }
        },

        cliqueBtn() {
            document.addEventListener('click', (e) => {
                const el = e.target;

                if (el.classList.contains('num')) {
                    this.btnParaDispla(el.innerText);
                }

                if (el.classList.contains('btn-clear')){
                    this.clearDisplay();
                }

                if (el.classList.contains('btn-dell')) {
                    this.apagaUmNum();
                }

                if (el.classList.contains('equals')) {
                    this.realizaConta();
                }
            });
        },

        btnParaDispla(valor) {
            this.display.value += valor;
        }

        //Metodos
    };
}


const calculadora = criaCalculadora();
calculadora.inicia();

let teste = document.querySelector('.btn-clear')
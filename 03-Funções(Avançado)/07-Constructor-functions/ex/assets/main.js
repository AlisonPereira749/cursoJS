function Calculadora() {
    this.display = document.querySelector('.display');

    this.inica = () => {
        this.capturaCliques();
        this.capturaEnter();
    }

    this.capturaEnter = () => {
        document.addEventListener('keyup', e => {
            if(e.keyCode !== 13) return;
            this.realizaConta();
        })
    }

    this.capturaCliques = () => {
        document.addEventListener('click', e => {
            const el = e.target;
            if(el.classList.contains('num')) this.addNumDisplay(el);
            if(el.classList.contains('btn-clear')) this.clearDisplay()
            if(el.classList.contains('btn-dell')) this.apagaNum()
            if(el.classList.contains('equals')) this.realizaConta(el)
        });
    };

    this.realizaConta = () => {
        try {
            const conta = eval(this.display.value)
            if(!conta) {
                alert('Conta inválida')
            }
            this.display.value = conta;
        } catch (e) {
            alert('Conta inválida')
            return
        }
    };

    this.addNumDisplay = el => {
        this.display.value += el.innerText;
        this.display.focus();
    }
    this.clearDisplay = () => this.display.value = ' ';
    this.apagaNum = () => this.display.value =this.display.value.slice(0, -1);
}

const calculadora = new Calculadora();
calculadora.inica();
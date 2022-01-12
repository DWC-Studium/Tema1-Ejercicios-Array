let calculadora = {
    sumar() {
        return this.a + this.b;
    },

    multiplicar() {
        return this.a * this.b;
    },

    read() {
        this.a = +prompt('a?', 0);
        this.b = +prompt('b?', 0);
    }
};

calculadora.read();
alert(calculadora.sumar());
alert(calculadora.multiplicar());
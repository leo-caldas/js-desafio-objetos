const carro = {
    marca: "Honda",
    modelo: "Civic",
    ano: 2008,
    cor: "preto",
    cambio: "manual",
    potencia: "140cv",
    tipoDeMotor: "aspirado",

    descricaoCompleta: function () {
        return "O carro selecionado foi o " + this.marca + " " + this.modelo + ", ano " + this.ano + ", na cor " + this.cor + 
        " e que vem equipado com um câmbio "  + this.cambio + " e um motor " + this.tipoDeMotor + " de " + this.potencia + "."
    }
};

console.log(carro.descricaoCompleta());
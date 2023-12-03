const objeto={
    name:"david",
    lastname:"figueroa jasso",
    cantidad: 10,
    depositar(amount){
        this.cantidad = this.cantidad+amount;
    },
    retirar(amount){
        this.cantidad = this.cantidad-amount;
    }
};
objeto.depositar(1);
objeto.retirar(10);
console.log(objeto);
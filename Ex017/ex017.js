let ContaBancaria = {
    saldo: 20,
    títular: "John",
    sacar(quantia) {
        if (quantia < this.saldo) {
            this.saldo -= quantia
            console.log(`${this.títular} sacou R$${quantia}`)
            console.log(`Saldo atual: R$${this.saldo}`)
        }
        else {
            console.log('Não foi possivel realizar o saque')
            console.log(`Saldo atual:  R$${this.saldo}`)
        }
    },
    depositar(quantia) {
        this.saldo += quantia
        console.log(`${this.títular} depositou R$${quantia}`)
        console.log(`Saldo atual: R$${this.saldo}`)
    }
}

console.log(ContaBancaria.saldo)
ContaBancaria.sacar(10)
ContaBancaria.depositar(30)
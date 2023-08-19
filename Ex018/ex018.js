let Agenda = {
    usuarios: new Map(),
    novo_contato(nome, tel) {
        this.usuarios.set(nome, {nome: nome, tel: tel})
    },
    lista() {
        for (u in Agenda.usuarios) {
            console.log(Agenda.usuarios.get(u))
        }
        console.log(Agenda.usuarios)
    },
    buscar(nome) {
        return this.usuarios.get(nome)
    }
}

Agenda.novo_contato('John', 123)
Agenda.lista()
console.log(Agenda.buscar('John'))
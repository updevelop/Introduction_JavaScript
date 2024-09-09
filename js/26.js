// This

window.nombre = 'Un Nombre'

const reservation = {
    nombre: 'Camila',
    apellido: 'Dueñas',
    total: 5000,
    pagado: false,
    informacion:function() {
        console.log(`El cliente ${this.nombre} reservo y su cantidad a pagar es de ${this.total}`)
    }
}

const reservation2 = {
    nombre: 'Sergio',
    apellido: 'Silva',
    total: 8000,
    pagado: false,
    informacion:function() {
        console.log(`El cliente ${this.nombre} reservo y su cantidad a pagar es de ${this.total}`)
    }
}

console.log(reservation.nombre);
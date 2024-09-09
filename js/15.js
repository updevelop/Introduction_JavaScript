// Array Methods

const meses = [ 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500 },
    { nombre: 'Television 50 pulgadas', precio: 700 },
    { nombre: 'Tablet', precio: 300 },
    { nombre: 'Play Station', precio: 800 },
    { nombre: 'Reloj', precio: 400 },
    { nombre: 'Xbox S', precio: 500 },
    { nombre: 'Celular', precio: 800 },
    { nombre: 'Bocinas', precio: 200 },
    { nombre: 'Laptop', precio: 500 },
    { nombre: 'Teclado', precio: 100 },
];

// forEach
meses.forEach(function(mes) {
    if(mes == 'Marzo') {
        console.log ('Marzo si Existe')
    }
});

// Includes
let resultado = meses .includes('Diciembre')

// Some ideal para arreglo de objetos
resultado = carrito.some(function(producto) {
    return producto.nombre == 'Celular'
});

// Reduce 
resultado = carrito.reduce(function(total, producto) {
    return total + producto.precio
}, 0)

// Filter
resultado = carrito.filter(function(producto) {
    return producto.precio < 400
}, 0)


resultado = carrito.filter(function(producto) {
    return producto.precio < 400
}, 0)

console.log(resultado);
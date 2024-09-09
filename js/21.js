// Arrow Functions

const sumar2 = (n1, n2) => console.log ( n1 + n2 );
sumar2(5, 10);

const aprendiendo = (tecnologia) => {
    console.log(`Aprendiendo ${tecnologia}`)
}

aprendiendo('JavaScript')




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
meses.forEach( mes => {
    if(mes == 'Marzo') {
        console.log ('Marzo si Existe')
    }
});

let resultado;

// Some ideal para arreglo de objetos
resultado = carrito.some (producto => producto.nombre == 'Celular');

// Reduce 
resultado = carrito.reduce((total, producto) => total + producto.precio, 0)

// Filter
resultado = carrito.filter (producto => producto.precio < 400, 0)
resultado = carrito.filter (producto => producto.precio < 400, 0)


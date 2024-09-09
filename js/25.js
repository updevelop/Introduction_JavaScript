
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

// Son metodos que solo se ejecutan en arreglos.

// ForEach
const arreglo1 = carrito.forEach(producto => console.log(producto.nombre));


// map
const arreglo2 = carrito.map( producto => `${producto.nombre} - ${producto.precio}`);

"use strict"; // Correr JS en modo estricto
// Objetos
const producto = {
    nombreProducto : "Monitor 20 Pulgadas", 
    precio: 300,
    disponible: true
}

Object.freeze(producto); // .freeze .seal

producto.imagen = 'imagen.jpg';

console.log(Object.isFrozen(producto))

console.log(producto);
// Objetos 

const producto = {
    nombreProducto : "Monitor 20 Pulgadas", 
    precio: 300,
    disponible: true
}

console.log(producto);

// console.log(producto.precio);
// console.log(producto.nombreProducto);
// console.log(producto.disponible); 
// console.log(producto["precio"]);
  
// Agregar nuevas Propiedades
producto.imagen = 'imagen.jpg'

// Eliminar Propiedades
delete producto.disponible
console.log(producto)

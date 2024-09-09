// Foor Loop

// for(let i = 0; i < 10; i++ ) {
//     console.log(i);
// }

// for(let i = 1; i <= 100; i++ ) {
//     if( i % 2 === 0 ){
//         console.log(`El Número ${i} es PAR`)
//     } else {
//         console.log(`El Número ${i} es IMPAR`)
//     }
// }

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

for(let i = 0; i < carrito.length; i++){
    console.log( carrito[i].nombre )
}

// While Loop

// let i = 0; // Indice

// while( i <= 100) { // Condición
    
//     if(i % 2 === 0) {
//         console.log(`El número ${i} es PAR`)
//     } else {
//         console.log(`El número ${i} es IMPAR`)
//     }

//     i++; // Incremento
// }


// Do While Loop

let i = 0;

do {
    console.log(i)

} while( i < 10);
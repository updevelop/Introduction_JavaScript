// Arreglos o Arrays

const numeros = [10,20,30,40,50];
console.table(numeros)


// Acceder a los numeros de un arreglo
// console.log(numeros[4]);
// console.log(numeros[2]);

// Conocer la extensión de un arreglo
// console.log(meses.length)

// numeros.forEach( function(numero) {
// console.log(numero);
// })

numeros.push(60, 70, 80); // Al final del arreglo
numeros.unshift (-10, -20, -30) // Al inicio del arreglo

console.table(numeros)

const meses = ['Enero','Febrero','Marzo','Abril','Mayo']

// meses.pop(); // Elimina el ultimo elemento
// meses.shift(); // Elimina el primer elemento
// console.table(meses);


// Rest Operator o Spread Operator 

const nuevoArreglo = [...meses, 'Junio']
console.log(nuevoArreglo)
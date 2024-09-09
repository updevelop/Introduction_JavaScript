
const usuarioAutenticado = new Promise( (resolve, reject) => {
    const auth = true;

    if(auth) {
        resolve('Usuario Autenticado');   // El promise se cumple
    } else {
        reject('No se pudo iniciar sesión');    // El promise no se cumple
    }
});

usuarioAutenticado
    .then(resultado => console.log('resultado'))
    .catch(error => console.log('error'))

// En los promises exiten 3 valores pendientes
// Pending: No se ha cumplido pero tampoco se ha rechazado
// Fullfilled: Ya se cumplio
// Rejected: Se ha rechazado o no se pudo cumplir


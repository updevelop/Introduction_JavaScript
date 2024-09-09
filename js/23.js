
const metodoPago = 'Tarjeta'

switch(metodoPago) {
    case 'Tarjeta':
        console.log('Pagaste con Tarjeta');
        break
    case 'Cheque':
        console.log('Pagaste con Cheque');
        break
    case 'Efectivo':
        console.log('Pagaste con Efectivo');
        break
    case 'Bonos':
        console.log('Pagaste con Bonos');
        break
    default:
        console.log('Aún no has pagado')
        break
}
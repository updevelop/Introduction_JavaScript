
// Metodos de Propiedad

const reproductor = {
    reproducir : function(id){
        console.log(`Reproduciendo Canción con el ID: ${id}`)
    },
    pausar: function() {
        console.log('Pausando...')
    },
    crearPlaylist: function(nombre) {
        console.log(`Creando la playlist: ${nombre}`)
    },  
    reproducirPlaylist: function(nombre) {
        console.log(`Reproduciendo la playlist: ${nombre}`)
    }  
}   

reproductor.borrarCanción = function(id) {
    console.log(`Eliminando la Canción ${id}`)
}

reproductor.reproducir(3810)
reproductor.pausar()
reproductor.borrarCanción(20)
reproductor.crearPlaylist('Baladas')
reproductor.reproducirPlaylist('Baladas')
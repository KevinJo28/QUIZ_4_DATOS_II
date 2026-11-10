const { conectarDB, cerrarDB } = require('./database');
const seedData = require('./DatosPrueba');
const peliculasService = require('./CrudPeliculas');

async function main() {

    try {
        await conectarDB();
        await peliculasService.insertarPeliculas(seedData); //Ingresar datos de prueba en la bd



        // Probar búsquedas
        console.log('\n--- Películas de Sci-Fi ---');
        const sciFi = await peliculasService.buscarPorGenero('Sci-Fi');
        console.log(sciFi.map(p => p.titulo));

        const nuevaPeli = {
        titulo: 'Oppenheimer',
        director: 'Christopher Nolan',
        anio: 2023,
        generos: ['Biografía', 'Drama'],
        calificacion: 8.9,
        resenas: []
        };
        console.log('\n--- Agregar Peli ---')
        await peliculasService.insertarPeliculas([nuevaPeli]);


        // Agregar reseña
        console.log('\n--- Agregar Reseña ---');
        await peliculasService.agregarResena('Interstellar', {
        usuario: 'Andrés',
        comentario: 'Final muy conmovedor',
        nota: 9
        });
        console.log(' Reseña agregada exitosamente');

        // Eliminar película
        console.log('\n--- Eliminar Película ---');
        await peliculasService.eliminarPelicula('The Dark Knight');
        console.log('Película eliminada');

        // Estado final
        console.log('\n--- Estado final del Catálogo ---');
        const catalogo = await peliculasService.obtenerTodas();
        console.dir(catalogo, { depth: null });


    } catch (error) {
    console.error(' Error general:', error);
  } finally {
    await cerrarDB();
  }

}
main();
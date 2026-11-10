const { conectarDB, cerrarDB } = require('./config/database');
const seedData = require('./DatosPrueba');
const peliculasService = require('./CrudPeliculas');

async function main() {

    try {
        await conectarDB();
        await peliculasService.reiniciarColeccion(); //Limpiar Datos
        await peliculasService.insertarPeliculas(seedData); //Ingresar datos de prueba en la bd

        
    } catch (error) {
    console.error(' Error general:', error);
  } finally {
    await cerrarDB();
  }

}
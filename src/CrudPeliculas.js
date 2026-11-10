const { obtenerColeccion } = require('./database');

async function getCollection(nombre) {
  return await obtenerColeccion('peliculas');
}

async function insertarPeliculas(peliculas) {
  const coleccion = await getCollection();
  const lista = Array.isArray(peliculas) ? peliculas : [peliculas];
  const docs = lista.map(p => ({ ...p, resenas: p.resenas || [] }));
  const resultado = await coleccion.insertMany(docs);
  return resultado.insertedCount;
}

async function buscarPorGenero(genero) {
  const coleccion = await getCollection();
  return await coleccion.find({ generos: genero }).toArray();
}

async function agregarResena(tituloPelicula, resena) {
  const coleccion = await getCollection();
  const resultado = await coleccion.updateOne(
    { titulo: tituloPelicula },
    { $push: { resenas: resena } }
  );
  return resultado.matchedCount > 0; 
}

async function eliminarPelicula(tituloPelicula) {
  const coleccion = await getCollection();
  const resultado = await coleccion.deleteOne({ titulo: tituloPelicula });
  return resultado.deletedCount > 0;
}

async function obtenerTodas() {
  const coleccion = await getCollection();
  return await coleccion.find({}).toArray();
}

module.exports = {
  insertarPeliculas,
  buscarPorGenero,
  agregarResena,
  eliminarPelicula,
  obtenerTodas,
};
require('dotenv').config();
const { MongoClient } = require('mongodb');

const client = new MongoClient(process.env.MONGO_URI);
let db;

async function conectarDB() {
  if (!db) {
    await client.connect();
    db = client.db(process.env.DB_NAME);
    console.log('Conexión establecida con MongoDB');
  }
  return db;
}

function obtenerColeccion(nombreColeccion) {
  if (!db) {
    throw new Error('La base de datos no está inicializada. Llama a conectarDB primero.');
  }
  return db.collection(nombreColeccion);
}

async function cerrarDB() {
  await client.close();
  console.log('Conexión con MongoDB cerrada');
}

module.exports = { conectarDB, obtenerColeccion, cerrarDB };
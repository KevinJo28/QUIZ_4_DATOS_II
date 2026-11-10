const {MongoClient} = require('mongodb')
const uri = 'mongodb://admin:password123@localhost:27017/?authSource=admin';
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log(' Conectado exitosamente a MongoDB desde Node.js');

    const db = client.db('testdb');
    const collection = db.collection('ejemplos');

    // Insertar un documento de prueba
    await collection.insertOne({ mensaje: '¡Hola desde Node.js!', fecha: new Date() });

    const doc = await collection.findOne({ mensaje: '¡Hola desde Node.js!' });
    console.log('📄 Documento obtenido:', doc);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
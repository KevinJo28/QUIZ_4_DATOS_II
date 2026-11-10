Creadores: Kevin Abarca y Saúl Cevallos

Contexto del problema: 
Se necesitaba realizar un catalogo de reseñas de peliculas, para lo cual se utilizo  una base de datos NoSQL, especificamente MongoDB y como lenguaje NODEJS, para de esta manera poder guardar la información de los largometrajes, como su nombre, fecha, y director; y no tener que realizar diversas tablas que llenen la base de datos.


Prueba En consola

--- Películas de Sci-Fi ---
[
  'Interstellar',
  'Spider-Man: Into the Spider-Verse',
  'Interstellar',
  'Spider-Man: Into the Spider-Verse'
]

--- Agregar Peli ---

--- Agregar Reseña ---
 Reseña agregada exitosamente

--- Eliminar Película ---
Película eliminada

--- Estado final del Catálogo ---
[
  {
    _id: ObjectId { i0: 7009164, i1: 4853081, i2: 14997110, i3: 1561703 },
    titulo: 'Interstellar',
    director: 'Christopher Nolan',
    anio: 2014,
    generos: [ 'Sci-Fi', 'Drama', 'Aventura' ],
    calificacion: 8.7,
    resenas: [
      {
        usuario: 'Carlos',
        comentario: 'Obra maestra visual',
        nota: 10
      },
      {
        usuario: 'Elena',
        comentario: 'Excelente banda sonora',
        nota: 9
      },
      {
        usuario: 'Andrés',
        comentario: 'Final muy conmovedor',
        nota: 9
      },
      {
        usuario: 'Andrés',
        comentario: 'Final muy conmovedor',
        nota: 9
      }
    ]
  },
  {
    _id: ObjectId { i0: 7009164, i1: 4853081, i2: 14997110, i3: 1561704 },
    titulo: 'Spider-Man: Into the Spider-Verse',
    director: 'Bob Persichetti',
    anio: 2018,
    generos: [ 'Animación', 'Acción', 'Sci-Fi' ],
    calificacion: 8.4,
    resenas: [
      {
        usuario: 'Mateo',
        comentario: 'Increíble estilo de animación',
        nota: 10
      }
    ]
  },
  {
    _id: ObjectId { i0: 7009164, i1: 4853081, i2: 14997110, i3: 1561706 },
    titulo: 'Oppenheimer',
    director: 'Christopher Nolan',
    anio: 2023,
    generos: [ 'Biografía', 'Drama' ],
    calificacion: 8.9,
    resenas: []
  },
  {
    _id: ObjectId { i0: 7009165, i1: 1341990, i2: 4259492, i3: 8292855 },
    titulo: 'Interstellar',
    director: 'Christopher Nolan',
    anio: 2014,
    generos: [ 'Sci-Fi', 'Drama', 'Aventura' ],
    calificacion: 8.7,
    resenas: [
      {
        usuario: 'Carlos',
        comentario: 'Obra maestra visual',
        nota: 10
      },
      {
        usuario: 'Elena',
        comentario: 'Excelente banda sonora',
        nota: 9
      }
    ]
  },
  {
    _id: ObjectId { i0: 7009165, i1: 1341990, i2: 4259492, i3: 8292856 },
    titulo: 'Spider-Man: Into the Spider-Verse',
    director: 'Bob Persichetti',
    anio: 2018,
    generos: [ 'Animación', 'Acción', 'Sci-Fi' ],
    calificacion: 8.4,
    resenas: [
      {
        usuario: 'Mateo',
        comentario: 'Increíble estilo de animación',
        nota: 10
      }
    ]
  },
  {
    _id: ObjectId { i0: 7009165, i1: 1341990, i2: 4259492, i3: 8292858 },
    titulo: 'Oppenheimer',
    director: 'Christopher Nolan',
    anio: 2023,
    generos: [ 'Biografía', 'Drama' ],
    calificacion: 8.9,
    resenas: []
  }
]
Conexión con MongoDB cerrada
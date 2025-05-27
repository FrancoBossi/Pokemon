# Challenge Pokemon

Division de archivos:
Carpeta api:

# Aca se lleva a cabo el back y la gestion de base de datos de proyecto.

-Cada entidad sera representada por una tabla en la base de datos.

- en BattleService se gestionan las batallas.

Carpeta components:

# Aca se gestionan los componentes de la aplicacion.

-Cada componente es una parte de la aplicacion que se encarga de una funcionalidad especifica.
FetchPokemon: Su función es mostrar una lista de Pokémon (cargados desde pokemon.json) como botones con imágenes.
ShowFighters: Su función es mostrar los Pokémon seleccionados para la batalla.

# Como correr el proyecto:

1. Abrir dos terminales.
2. En la primera terminal, ejecutar el comando `npm run dev` para iniciar el servidor de desarrollo de la API, e ir al link que se genera.
3. En la segunda terminal, ejecutar el comando `npm run start:api` para correr la API REST (maneja la lógica del juego y la base de datos)

   ![image](imagenesdelmd/image.png)
   ![image](imagenesdelmd/image2.png)

# Base de datos:

- Se generara una carpeta llamada "pokemon.db".
- La base de datos se inicializa con dos tablas: "pokemon" y "battles".
- La tabla "pokemon" contiene los datos de los Pokémon, incluyendo su nombre, tipo, vida, ataque y defensa. Que se leen desde el archivo `pokemon.json`.
  -La tabla "battles" contiene los datos de las batallas, qeu se irán agregando a medida que se realicen batallas.
  Para ver el contenido de la base de datos, recomiendo tener la extensión "SQLite Viewer".

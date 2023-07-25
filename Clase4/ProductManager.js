const fs = require ("fs");

let nombreArchivo = "archivoSincrono.txt";
fs.writeFileSync(nombreArchivo, "Hola Mundo");
// Importa la biblioteca Express
const express = require('express');

// Crea una instancia de Express
const app = express();

// Define el puerto
const PORT = 3000;

// Define una ruta básica
app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
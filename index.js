const fs=require("fs");
const express = require('express');
const app = express();
const modelo = require("./servidor/modelo.js");

const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + "/"));
let sistema = new modelo.Sistema();

app.get("/", function(request,response){
    let contenido=fs.readFileSync(__dirname+"/cliente/index.html");
    response.setHeader("Content-type","text/html");
    response.send(contenido);
});

// Ruta para agregar un usuario
app.get("/agregarUsuario/:nick", function(request, response) {
    let nick = request.params.nick; 
    let res = sistema.agregarUsuario(nick);
    response.send(res);
});

// Ruta para eliminar un usuario
app.get("/eliminarUsuario/:nick", function(request, response) {
    let nick = request.params.nick;
    let res = sistema.eliminarUsuario(nick);
    response.send(res);
});

// Ruta para obtener todos los usuarios
app.get("/obtenerUsuarios", function(request, response) {
    let usuarios = sistema.obtenerUsuarios();
    response.json(usuarios); // Enviamos la lista de usuarios como JSON
});

// Ruta para verificar si un usuario está activo
app.get("/usuarioActivo/:nick", function(request, response) {
    let nick = request.params.nick;
    let activo = sistema.usuarioActivo(nick);
    response.send(activo ? `El usuario ${nick} está activo` : `El usuario ${nick} no está activo`);
});

// Ruta para obtener el número de usuarios
app.get("/numeroUsuarios", function(request, response) {
    let cantidad = sistema.numeroUsuarios();
    response.send(`Actualmente hay ${cantidad} usuarios registrados`);
});

app.listen(PORT, () => {
console.log(`App está escuchando en el puerto ${PORT}`);
console.log('Ctrl+C para salir');
});
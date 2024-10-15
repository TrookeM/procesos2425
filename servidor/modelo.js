function Sistema(){
    this.usuarios = {}; //que tipo coleccion?
    // Operaciones sobre la colección
    this.agregarUsuario = function(nick){
        usr=nick;
        if(!nick){
            return false
        }
        if (!this.usuarios[nick]){
            this.usuarios[nick] = new Usuario(nick);
            return "El usuario " + usr + " ha sido agregado correctamente";
        }
        return "El usuario " + usr + " ya existe";
    }
    this.eliminarUsuario = function(nick){
        usr=nick;
        if (this.usuarios[nick]){
            delete this.usuarios[nick];
            return "Usuario " + usr + " eliminado correctamente";
        }
        return "El usuario " + usr + " no se pudo encontrar";
    }
    this.obtenerUsuarios=function(){
        return this.usuarios
    }
    this.usuarioActivo = function(nick){
        if (this.usuarios[nick]){
            return true
        }
        return false
    }
    this.numeroUsuarios = function() {
        return Object.keys(this.usuarios).length;
    };    
}

function Usuario(nick){
    this.nick = nick;
}

module.exports.Sistema=Sistema

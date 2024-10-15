const modelo = require("./modelo.js");

describe('El sistema', function() {
  let sistema;

  beforeEach(function() {
      sistema = new modelo.Sistema();
  });

  it('Inicialmente no hay usuarios', function() {
      expect(sistema.numeroUsuarios()).toEqual(0);
  });

  it('Comprobamos agregar usuario con nick', function() {
    expect(sistema.numeroUsuarios()).toEqual(0);
      expect(sistema.agregarUsuario("pepe"));
      expect(sistema.numeroUsuarios()).toEqual(1); // Comprobamos que ahora hay un usuario
      expect(sistema.usuarioActivo("pepe")).toEqual(true); // Comprobamos que el usuario existe
  });

  it('No se puede agregar el mismo usuario dos veces', function() {
      sistema.agregarUsuario("pepe");
      expect(sistema.agregarUsuario("pepe")).toEqual("El usuario pepe ya existe");
      expect(sistema.numeroUsuarios()).toEqual(1); // Aseguramos que sigue siendo 1
  });

  it('Comprobamos eliminar usuario', function() {
      sistema.agregarUsuario("pepe");
      expect(sistema.eliminarUsuario("pepe")).toEqual("Usuario pepe eliminado correctamente");
      expect(sistema.numeroUsuarios()).toEqual(0); // Aseguramos que no hay usuarios
  });

  it('Intentar eliminar un usuario que no existe', function() {
      expect(sistema.eliminarUsuario("pepe")).toEqual("El usuario pepe no se pudo encontrar");
  });

  it('Comprobamos obtener usuarios', function() {
      sistema.agregarUsuario("pepe");
      sistema.agregarUsuario("maria");
      expect(sistema.obtenerUsuarios()).toEqual({
          pepe: new Usuario("pepe"),
          maria: new Usuario("maria")
      });
  });

  it('Comprobamos si un usuario está activo', function() {
      sistema.agregarUsuario("pepe");
      expect(sistema.usuarioActivo("pepe")).toEqual(true);
      expect(sistema.usuarioActivo("maria")).toEqual(false);
  });
});

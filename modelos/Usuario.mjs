/**
 * id
 * nombre
 * fecha_registro
 * correo
 * contraseña
 * citas
 */

class Usuario {

    #id = null;
    #nombre = null;
    #correo = null;
    #contrasena = null;
    #fecha_registro = null;
    #citas = [];

    constructor(id, nombre, correo, contrasena) {
        this.#id = id;
        this.#nombre = nombre;
        this.#correo = correo;
        this.#contrasena = contrasena;
        this.#fecha_registro = new Date();
    }

    login(esDueno) {}

    getId() {
        return this.#id;
    }

    getNombre() {
        return this.#nombre;
    }
    
    getCorreo() {
        return this.#correo;
    }

    getFechaRegistro() {
        return this.#fecha_registro;
    }
}

export default Usuario;
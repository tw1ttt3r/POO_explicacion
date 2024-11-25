import Usuario from "./Usuario.mjs";

/**
 * Dueño
 * perritos
 */

class Dueno extends Usuario {

    #perritos = [];

    constructor(id, nombre, correo, contrasena) {
        super(id, nombre, correo, contrasena);
    }

    login(esDueno) {
        if (esDueno) {
            console.log("Login Para Dueños");
        }
    }

    pagar() {}

    reservar() {}

    registrarPerrito(idPerrito) {
        this.#perritos = [ ...this.#perritos, idPerrito ];
    }

    getPerritos() {
        return this.#perritos;
    }

}

export default Dueno;
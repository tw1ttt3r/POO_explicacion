import Usuario from "./Usuario.mjs";

/**
 * Empleado
 * puesto
 * perritos
 */

class Empleado extends Usuario {

    #puesto = null;
    #perritos = [];

    constructor(id, nombre, correo, contrasena, puesto) {
        super(id, nombre, correo, contrasena);
        this.#puesto = puesto;
    }

    getPuesto() {
        return this.#puesto;
    }

    login(esDueno) {
        if(!esDueno) {
            console.log("Login Para empleados");
            // const noempledo = prompt("Número de empleado: ");
        }
    }

    aceptarCita() {}

    cancelarCita() {}
}

export default Empleado;
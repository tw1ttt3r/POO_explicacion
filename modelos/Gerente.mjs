import Empleado from "./Empleado.mjs";

/**
 * Gerente
 * id
 * nombre
 * correo
 * contrasena
 * puesto
 * nivel
 * area
 * fecha_registro
 */

class Gerente extends Empleado {

    #nivel = null;
    #area = null;

    constructor(id, nombre, correo, contrasena, puesto, nivel, area) {
        super(id, nombre, correo, contrasena, puesto);
        this.#area = area;
        this.#nivel = nivel;
    }

    login(noEmpleado) {
        console.log("Login para Gerentes");
    }
}

export default Gerente;
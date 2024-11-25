/**
 * Cita
 * id
 * fecha_registro
 * fecha_evento
 * empleado
 * perrito
 * comentarios
 * estatus
 */

class Cita {

    #id = null;
    #fecha_registro = null;
    #fecha_evento = null;
    #empleado = null;
    #perrito = null;
    #comentarios = [];
    #estatus = 0; // 0 noregistrado, 1 registrado, 2 aceptado, 3 terminado, 4 cancelado

    constructor(id, fecha_evento, empleado, perrito) {
        this.#id = id;
        this.#fecha_evento = fecha_evento;
        this.#empleado = empleado;
        this.#perrito = perrito;
        this.#fecha_registro = new Date();
        this.#estatus = 1;
    }

    getId() {
        return this.#id;
    }

    getFechaEvento() {
        return this.#fecha_evento;
    }

    getEmpleado() {
        return this.#empleado;
    }

    getPerrito() {
        return this.#perrito;
    }

    getFechaRegistro() {
        return this.#fecha_registro;
    }

    getEstatus() {
        return this.#estatus;
    }
    
    getEstatusFormateado() {
        switch(this.#estatus) {
            case 1: return 'Registrado';
            case 2: return 'Aceptado';
            case 3: return  'Terminado';
            case 4: return 'Cancelado';
        }
    }

    updateEstatus(estatus) {
        this.#estatus = estatus
    }
}

export default Cita;
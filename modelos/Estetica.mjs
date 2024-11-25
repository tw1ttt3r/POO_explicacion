class Estetica {
    #perritosRegistrados = [];
    #usuariosRegistrados = [];
    #citasRegistradas = [];

    nuevoPerrito(){
        return this.#perritosRegistrados.length + 1;
    }

    nuevoUsuario(){
        return this.#usuariosRegistrados.length + 1;
    }

    nuevaCita(){
        return this.#citasRegistradas.length + 1;
    }

    registraUsuario(usuario) {
        this.#usuariosRegistrados = [ ...this.#usuariosRegistrados, usuario ];
    } 
    
    registraPerrito(perrito) {
        this.#perritosRegistrados = [ ...this.#perritosRegistrados, perrito ];
    } 
    
    registraCita(cita) {
        this.#citasRegistradas = [ ...this.#citasRegistradas, cita ];
    } 

    obtenerInformacionPerrito(idPerrito){
        return this.#perritosRegistrados.filter((perrito) => perrito.getId() === idPerrito);
    }

    mostrarHistorial(tipo){
        switch(tipo) {
            case 'citas': return this.#citasRegistradas;
            case 'usuarios': return this.#usuariosRegistrados;
            case 'perritos': return this.#perritosRegistrados;
            default: return [];
        }
    } 
}

export default Estetica;
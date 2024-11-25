/**
 * Perro
 * raza
 * tamaño
 * color
 * peso
 * nombre
 * alergias
 * comentarios
*/

/**
 * Modificadores
 * final: modificador que no permite la modificación de un valor (atributo) desde el inicio (en ningún nivel)
 * protected: modificador que no permite la modificación de un valor (atributo), solo es permitido entre clases (herencia)
 * private: modificacdor no permite la modicación de un valor (atributo), solo lo permite en modelo
 * public: modificador permite la modificación desde el objeto 
 */

class Perro {

    #id = null;
    #raza = null;
    #tamano = null;
    #color = null;
    #peso = null;
    #nombre = null;
    #alergias= [];
    #comentarios= [];

    constructor(raza, tamano, color, peso, nombre, id) {
        this.#raza = raza;
        this.#tamano = tamano;
        this.#color =color;
        this.#peso = peso;
        this.#nombre = nombre;
        this.#id = id;
    }

    getId() {
        return this.#id;
    }

    getNombre() {
        return this.#nombre;
    }

    getRaza() {
        return this.#raza;
    }

    getTamano() {
        return this.#tamano;
    }

    getColor() {
        return this.#color;
    }

    getPeso() {
        return this.#peso;
    }

    // pasto,verduras,pollo
    setAlergias(alergias) {
        this.#alergias = [ ...this.#alergias, ...alergias.split(",") ]
    }
    
    setComentario(comentario) {
        this.#comentarios = [ ...this.#comentarios, comentario ]
    }

}

export default Perro;

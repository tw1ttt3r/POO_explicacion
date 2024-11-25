import Dueno from "./modelos/Dueno.mjs";
import Empleado from "./modelos/Empleado.mjs";
import Gerente from "./modelos/Gerente.mjs";
import Cita from "./modelos/Cita.mjs";
import Perro from "./modelos/Perro.mjs";
import Estetica from "./modelos/Estetica.mjs";

console.log("Bienvenido a nuestros sistema");

const estetica = new Estetica();

// Registra un nuevo usuario
const empleado1 = new Empleado(estetica.nuevoUsuario(), "Pedrito", "empleado1@sistema.com", "12345678", 'Estilista');
estetica.registraUsuario(empleado1);

// Registrar nuevo dueño
const dueno1 = new Dueno(estetica.nuevoUsuario(), "Antonio", "antonio.s@correo.com", "antoni1");
estetica.registraUsuario(dueno1);


// Registrar nuevo Perrito
const perrito1 = new Perro("rotwiller", "Grande", "obscuro", "30kg", "Killer", estetica.nuevoPerrito());
estetica.registraPerrito(perrito1)
dueno1.registrarPerrito(perrito1.getId());

// Registrar nuevo Perrito
const perrito2 = new Perro("chihuahua", "pequeño", "cafe", "5kg", "Panecito", estetica.nuevoPerrito());
estetica.registraPerrito(perrito2)
dueno1.registrarPerrito(perrito2.getId());


// Mostrar información de Perritos
for(let p of dueno1.getPerritos()) {
    const info = estetica.obtenerInformacionPerrito(p);
    switch(info.length) {
        case 0:
            console.error("No encontramos información de ese perrito.");
            break;
        case 1: 
            console.log("Nombre del perrito: ", info[0].getNombre());
            break;
        default:
            console.log("Lo sentimos, tenemos problemas al procesar tu petición.");
            break;
    }
}

// Registrar una cita
const cita1 = new Cita(estetica.nuevaCita(), '01/12/24', empleado1.getId(), dueno1.getPerritos()[0]);
estetica.registraCita(cita1);

// Visualizar todos los catalogos
console.log(estetica.mostrarHistorial("citas"));
console.log(estetica.mostrarHistorial("usuarios"));
console.log(estetica.mostrarHistorial("perritos"));
console.log(estetica.mostrarHistorial("gerentes"));
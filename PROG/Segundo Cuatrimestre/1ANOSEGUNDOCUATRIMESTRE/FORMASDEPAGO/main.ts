abstract class metodoPago {
    abstract procesarPago(monto: number): void;
        
    }






/*import { efectivo } from './efectivo';
import { tarjeta } from './tarjeta';
import { electronica } from './electronica';
import { cuentacorriente } from './cuentacorriente';
import { HabilidadEspecial } from './habilidadespecial';

const personajes = [
    new Hechicera(),
    new Guerrero(),
    new Asesina(),
    new Mago(new HabilidadEspecial("Manipulación del Tiempo", "Controla el flujo temporal.")),
    new Exploradora()
];

// Demostración de polimorfismo
personajes.forEach(personaje => {
    personaje.mostrarInfo();
    personaje.atacar();  // Cada clase implementa su propio ataque
    console.log('---');
})*/

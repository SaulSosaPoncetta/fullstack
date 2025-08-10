import { RegistroAutomotor } from "./registroautomotor";
import { Titular } from './titular';
import { Auto } from "./auto";
import { Moto } from "./moto";
import { Camion } from "./camion";
import { Lancha } from "./lancha";
import { MaquinaAgricola } from "./magricola";

// Crear un titular
const titular = new Titular("Saul Sosa  Colon 3250");

// Crear un registro automotor
const registro = new RegistroAutomotor("Alsina 2356", titular);

// Crear distintos tipos de vehículos
const auto = new Auto("Toyota", "Corolla", "12345", "54321", "ABC123", 4);
const moto = new Moto("Yamaha", "FZ", "67890", "09876", "DEF456", 150);
const camion = new Camion("Scania", "R450", "11223", "32123", "GHI789", 25);
const lancha = new Lancha("Bayliner", "Element E16", "44556", "55444", "JKL012", "Motor fuera de borda");
const maquinaAgricola = new MaquinaAgricola("John Deere", "X9", "55667", "77655", "MNO345", "Cosechadora");

// Agregar vehículos al registro
registro.agregarVehiculo(auto);
registro.agregarVehiculo(moto);
registro.agregarVehiculo(camion);
registro.agregarVehiculo(lancha);
registro.agregarVehiculo(maquinaAgricola);

// Ver vehículos
console.log("Vehículos registrados:");
registro.verVehiculos().forEach(v => console.log(v.descripcion()));

import { Vehiculo } from './vehiculos';

export class Auto extends Vehiculo {
    cantidadPuertas: number;

    constructor(
        marca: string,
        modelo: string,
        numeroMotor: string,
        numeroChasis: string,
        dominio: string,
        cantidadPuertas: number
    ) {
        super(marca, modelo, "Auto", numeroMotor, numeroChasis, dominio);
        this.cantidadPuertas = cantidadPuertas;
    }

    descripcion(): string {
        return `Auto ${this.marca} ${this.modelo} con ${this.cantidadPuertas} puertas.`;
    }
}

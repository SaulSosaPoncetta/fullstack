import { Vehiculo } from './vehiculos';

export class Camion extends Vehiculo {
    capacidadCarga: number;

    constructor(
        marca: string,
        modelo: string,
        numeroMotor: string,
        numeroChasis: string,
        dominio: string,
        capacidadCarga: number
    ) {
        super(marca, modelo, "Camión", numeroMotor, numeroChasis, dominio);
        this.capacidadCarga = capacidadCarga;
    }

    descripcion(): string {
        return `Camión ${this.marca} ${this.modelo} con capacidad de carga de ${this.capacidadCarga} toneladas.`;
    }
}

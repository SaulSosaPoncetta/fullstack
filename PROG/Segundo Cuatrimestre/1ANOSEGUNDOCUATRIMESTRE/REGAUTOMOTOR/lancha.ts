import { Vehiculo } from './vehiculos';

export class Lancha extends Vehiculo {
    tipoDePropulsion: string;

    constructor(
        marca: string,
        modelo: string,
        numeroMotor: string,
        numeroChasis: string,
        dominio: string,
        tipoDePropulsion: string
    ) {
        super(marca, modelo, "Lancha", numeroMotor, numeroChasis, dominio);
        this.tipoDePropulsion = tipoDePropulsion;
    }

    descripcion(): string {
        return `Lancha ${this.marca} ${this.modelo} con propulsión ${this.tipoDePropulsion}.`;
    }
}

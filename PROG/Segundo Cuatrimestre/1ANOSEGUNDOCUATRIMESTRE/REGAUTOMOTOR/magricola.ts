import { Vehiculo } from './vehiculos';

export class MaquinaAgricola extends Vehiculo {
    tipoDeMaquina: string;

    constructor(
        marca: string,
        modelo: string,
        numeroMotor: string,
        numeroChasis: string,
        dominio: string,
        tipoDeMaquina: string
    ) {
        super(marca, modelo, "Máquina Agrícola", numeroMotor, numeroChasis, dominio);
        this.tipoDeMaquina = tipoDeMaquina;
    }

    descripcion(): string {
        return `Máquina Agrícola ${this.marca} ${this.modelo}, tipo: ${this.tipoDeMaquina}.`;
    }
}

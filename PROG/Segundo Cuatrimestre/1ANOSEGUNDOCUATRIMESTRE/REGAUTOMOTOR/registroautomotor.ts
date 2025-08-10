import { Vehiculo } from './vehiculos';
import { Titular } from './titular';

export class RegistroAutomotor {
    domicilioRegistro: string;
    dueñoRegistro: Titular;
    vehiculos: Vehiculo[];

    constructor(domicilioRegistro: string, dueñoRegistro: Titular) {
        this.domicilioRegistro = domicilioRegistro;
        this.dueñoRegistro = dueñoRegistro;
        this.vehiculos = [];
    }

    agregarVehiculo(vehiculo: Vehiculo): void {
        this.vehiculos.push(vehiculo);
    }

    verVehiculos(): Vehiculo[] {
        return this.vehiculos;
    }

    modificarVehiculo(dominio: string, datosActualizados: Partial<Vehiculo>): boolean {
        const vehiculo = this.vehiculos.find(v => v.dominio === dominio);
        if (vehiculo) {
            Object.assign(vehiculo, datosActualizados);
            return true;
        }
        return false;
    }
}

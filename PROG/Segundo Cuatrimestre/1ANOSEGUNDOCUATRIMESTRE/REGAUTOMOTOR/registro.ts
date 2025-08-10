import { Vehiculo } from './vehiculos';
import { Titular } from './titular';

export class Registro {
    private vehiculos: Vehiculo[] = [];
    private titulares: Titular[] = [];

    constructor(
        public dueno: string,
        public direccion: string,
        public numeroRegistro: string
    ) { }

    agregarVehiculo(vehiculo: Vehiculo): void {
        this.vehiculos.push(vehiculo);
    }

    eliminarVehiculo(numeroChasis: string): void {
        this.vehiculos = this.vehiculos.filter(v => v.numeroChasis !== numeroChasis);
    }

    modificarVehiculo(numeroChasis: string, nuevoVehiculo: Vehiculo): void {
        const index = this.vehiculos.findIndex(v => v.numeroChasis === numeroChasis);
        if (index !== -1) {
            this.vehiculos[index] = nuevoVehiculo;
        }
    }

    listarVehiculos(): Vehiculo[] {
        return this.vehiculos;
    }

    agregarTitular(titular: Titular): void {
        this.titulares.push(titular);
    }

    eliminarTitular(documento: string): void {
        this.titulares = this.titulares.filter(t => t.documento !== documento);
    }

    modificarTitular(documento: string, nuevoTitular: Titular): void {
        const index = this.titulares.findIndex(t => t.documento === documento);
        if (index !== -1) {
            this.titulares[index] = nuevoTitular;
        }
    }

    listarTitulares(): Titular[] {
        return this.titulares;
    }
}
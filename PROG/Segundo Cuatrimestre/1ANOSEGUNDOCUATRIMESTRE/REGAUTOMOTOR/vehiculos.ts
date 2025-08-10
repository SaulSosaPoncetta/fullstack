export abstract class Vehiculo {
    marca: string;
    modelo: string;
    tipoDeVehiculo: string;
    numeroMotor: string;
    numeroChasis: string;
    dominio: string;

    constructor(
        marca: string,
        modelo: string,
        tipoDeVehiculo: string,
        numeroMotor: string,
        numeroChasis: string,
        dominio: string
    ) {
        this.marca = marca;
        this.modelo = modelo;
        this.tipoDeVehiculo = tipoDeVehiculo;
        this.numeroMotor = numeroMotor;
        this.numeroChasis = numeroChasis;
        this.dominio = dominio;
    }

    abstract descripcion(): string;
}

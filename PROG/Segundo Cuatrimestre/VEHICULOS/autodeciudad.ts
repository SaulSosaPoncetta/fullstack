export class AutoCiudad {
    private puertas: number;
    private ruedas: number;

    constructor(puertas: number, ruedas: number) {
        this.puertas = puertas;
        this.ruedas = ruedas;
    }

    getpuertas(): number {
        return this.puertas;
    }

    getruedas(): number {
        return this.ruedas;
    }
}
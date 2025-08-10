interface InterfazServicio {
    getNombre(): string;
    getCosto(): number;
    esGratis(): boolean;
}

class Servicio implements InterfazServicio {
    private nombre: string;
    private costo: number;
    private gratis: boolean;

    constructor(nombre: string, costo: number, esGratis: boolean) {
        this.nombre = nombre;
        this.costo = costo;
        this.gratis = esGratis;
    }
    getnombre():string{
        return this.nombre;
    }
    getCosto() :number{
        return this.costo;
    }
    esGratis():boolean{
        return this.gratis;
    }
}
export { Servicio };
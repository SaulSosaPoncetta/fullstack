export abstract class vehiculo {
    marca:string;
    modelo:string;
    ruedas:string;
    puertas:number;
    precio:number;
    dominio:string;

    constructor(marca:string, modelo:string, ruedas:string, puertas:number, precio:number, dominio:string){
        this.marca = marca;
        this.modelo = modelo;
        this.ruedas = ruedas;
        this.puertas = puertas;
        this.precio = precio;
        this.dominio = dominio;
    }
        abstract acelerar(): void;

}
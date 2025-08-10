export class Camioneta {
    private modelo: string;
    private ano: number;

    constructor(modelo: string, ano: number) {
        this.modelo = modelo;
        this.ano = ano;
    }

    getModelo(): string {
        return this.modelo;
    }

    masDosmil(): boolean {
        if (this.ano >= 2000) {
            return true;
        } else {
            return false;
        }
    }

    getAno(): number {
        return this.ano;
    }
}
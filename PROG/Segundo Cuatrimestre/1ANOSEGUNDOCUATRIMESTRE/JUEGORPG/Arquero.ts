import { Personaje } from './Personaje';

export class Arquero extends Personaje {
    private flechas: number;

    constructor(nombre: string) {
        super(nombre);
        this.flechas = 20;
    }

    public atacar(): void {
        if (this.flechas > 0) {
            console.log(`${this.nombre} dispara una flecha.`);
            this.flechas -= 1;
        } else {
            console.log(`${this.nombre} no tiene flechas.`);
        }
    }

    public defender(): void {
        console.log(`${this.nombre} esquiva el ataque.`);
    }

    public subirNivel(): void {
        super.subirNivel();
        this.flechas += 10;
        console.log(`${this.nombre} ahora tiene ${this.flechas} flechas.`);
    }
}



export default Arquero;

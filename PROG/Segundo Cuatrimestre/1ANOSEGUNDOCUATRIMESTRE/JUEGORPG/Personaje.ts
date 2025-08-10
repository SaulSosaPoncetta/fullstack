export class Personaje {
    nombre: string;
    nivel: number;
    puntosDeVida: number;

    constructor(nombre: string) {
        this.nombre = nombre;
        this.nivel = 1;
        this.puntosDeVida = 100;
    }

    public atacar(): void {
        console.log(`${this.nombre} ataca al enemigo.`);
    }

    public defender(): void {
        console.log(`${this.nombre} se defiende del ataque.`);
    }

    public subirNivel(): void {
        this.nivel += 1;
        this.puntosDeVida += 20;
        console.log(`${this.nombre} ha subido al nivel ${this.nivel}.`);
    }
}

export default Personaje;

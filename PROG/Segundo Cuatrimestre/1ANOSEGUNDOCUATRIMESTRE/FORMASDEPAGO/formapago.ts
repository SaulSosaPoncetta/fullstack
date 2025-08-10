export abstract class FormaPago {
    nombre: string;
    clase: string;
    rasgos: string[];
    evoluciones: string[];

    constructor(nombre: string, clase: string, rasgos: string[], evoluciones: string[]) {
        this.nombre = nombre;
        this.clase = clase;
        this.rasgos = rasgos;
        this.evoluciones = evoluciones;
    }

    // Método abstracto que cada subclase deberá implementar.
    abstract atacar(): void;

    // Método común a todas las subclases.
    evolucionar(nuevaEvolucion: string): void {
        this.evoluciones.push(nuevaEvolucion);
        console.log(`${this.nombre} ha evolucionado a: ${nuevaEvolucion}`);
    }

    // Método para mostrar la información del personaje.
    mostrarInfo(): void {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Clase: ${this.clase}`);
        console.log(`Rasgos: ${this.rasgos.join(', ')}`);
        console.log(`Evoluciones: ${this.evoluciones.join(', ')}`);
    }
}
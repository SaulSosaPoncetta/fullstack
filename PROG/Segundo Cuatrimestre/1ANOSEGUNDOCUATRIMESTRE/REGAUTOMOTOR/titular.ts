export class Titular {
    dueño: string;
    apellido: string;
    dni: number;
    
    constructor(nombre: string) {
        this.dueño = nombre;
        this.apellido = '';
        this.dni = 0;
    }

    verNombre(): void {
        console.log(`Nombre: ${this.dueño}.`);
    }

    verApellido(): void {
        console.log(`Apellido:${this.apellido}.`);
    }

    verDni(): void {
        console.log(`DNI:${this.dni}.`);
    }

}
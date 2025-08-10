import { Alumno } from "./alumno";
import { Profesor } from "./profesor";

export class Escuela {
    private nombre: string;
    private alumnos: Alumno[];
    private profesores: Profesor[];

    constructor(nombre: string, listaDeAlumnos?: Alumno[], listaDeProfesores?: Profesor[]) {
        this.nombre = nombre;

        if (listaDeAlumnos != undefined) {
            this.alumnos = listaDeAlumnos;
        } else {
            this.alumnos = [];
        }

        if (listaDeProfesores != undefined) {
            this.profesores = listaDeProfesores;
        } else {
            this.profesores = [];
        }
    }

    getNombre(): string {
        return this.nombre;
    }

    //para agregar un alumno a la escuela, se pasa por parametro y se pushea al arreglo
    matricularAlumno(alumno: Alumno): void {
        this.alumnos.push(alumno); //metodo push agrega al final del arreglo lo que yo seleccione
    }
    //para agregar un profesor a la escuela, se pasa por parametro y se pushea al arreglo
    contratarProfesor(profesor: Profesor): void {
        this.profesores.push(profesor);
    }

    expulsarAlumno(nombre: string): void {
        this.alumnos = this.alumnos.filter(alumno => alumno.getNombre() !== nombre); //filter revisa el arreglo uno a uno y los que no coinciden se genera un nuevo array, cuando encuentra no lo guarda por ende borra el dato
    }

    despedirProfesor(nombre: string): void {
        this.profesores = this.profesores.filter(profesor => profesor.getNombre() !== nombre);//filter revisa el arreglo uno a uno y los que no coinciden se genera un nuevo array, cuando encuentra no lo guarda por ende borra el dato
    }

    obtenerAlumnos(): Alumno[] {
        return this.alumnos;
    }
    obtenerProfesores(): Profesor[] {
        return this.profesores;
    }
}
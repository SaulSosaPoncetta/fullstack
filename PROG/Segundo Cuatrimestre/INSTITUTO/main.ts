import { Alumno } from "./alumno";
import { Profesor } from "./profesor";
import { Escuela } from "./escuela";

//Crear Alumnos
const alumno1 = new Alumno("Timoteo", 8);
const alumno2 = new Alumno("Genaro", 8);
const alumno3 = new Alumno("Julieta", 8);

//Crear Profesor
const profesor1 = new Profesor("Karen");
const profesor2 = new Profesor("Mauri");

//Alumnos asignados a un profe
profesor1.añadirAlumno(alumno1);
profesor1.añadirAlumno(alumno2);

profesor2.añadirAlumno(alumno3);

//crear escuela
const escuela1 = new Escuela("Primaria");
const escuela2 = new Escuela("Secundaria");

//matricular alumnos escuelas
escuela1.matricularAlumno(alumno1);
escuela1.matricularAlumno(alumno2);
escuela1.matricularAlumno(alumno3);

//contratar profesores
escuela1.contratarProfesor(profesor1);
escuela1.contratarProfesor(profesor2);

//verificar si alumno esta aprobado
console.log(`${alumno1.getNombre()}Esta aprobado: ${alumno1.estaAprobado()}, su nota es ${alumno1.getNota()}`);

console.log(`${alumno2.getNombre()}Esta aprobado: ${alumno2.estaAprobado()}`);

// ver lista de alumnos de la escuela
console.log("Alumnos de la escuela: ", escuela1.obtenerAlumnos().map(alumno => alumno.getNombre()));

//desvincular un alumno de la escuela.
escuela1.expulsarAlumno("Genaro");
console.log("Alumnos de la escuela despues de expulsar a Genaro: ", escuela1.obtenerAlumnos().map(alumno => alumno.getNombre()));

//Desvincular a un profesor.
escuela1.despedirProfesor("Karen");
console.log("Profes de la escuela despues de devincular a Karen: ", escuela1.obtenerProfesores().map(profesor => profesor.getNombre()));

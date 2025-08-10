import { Persona } from "./Persona";

const persona1:Persona=new Persona("Juan", 40555999);
console.log("nombre: "+persona1.getNombre()+" y su dni es : "+persona1.getDni());
persona1.setNombre("Marcos");
console.log("su nuevo nombre es: "+persona1.getNombre());

const persona2:Persona=new Persona("Maria", 40555000);

//let nombre:string=persona2.nombre;
//persona2.nombre="sdfsdfsd";
persona2.setNombre("")

const persona3:Persona=new Persona("denisse", 5000000, 2134234)
console.log(persona3.getAltura());



//pseudo ej: escuela
// class alumnos{
// legajo:number;
// }

// alumno1=new alumnos()
// alumno2=new alumnos()

// let arregoAlumnos=new Array[alumno1,alumno2]

// class profesor{
//     matricula:number;
// }
// profesor1=new profesor()

// class escuela{
//     listadoDeAlumnos:alumnos[];
//     listadoDeProfes:profes[];

// }
// profesor1=new profesor()



//let escuela:escuela=new escuela(listadoAlumnos, ListadoProfesores,nombre)


import {Libro} from "./Libro";
import { GestorLibro } from "./GestorLibros";

let MartinFierro:Libro=new Libro("Martin Fierro", "Jose Hernández", 1970);
let CorazonDelator:Libro=new Libro("EL corazon delator", "Alan Poe", 1930);
let GestorLibro1:GestorLibro=new GestorLibro("LibreriaOlavarria");
//GestorLibro1.agregarLibro("Martin Fierro", "Jose Hernández", 1970);  esto es para agregar de otra manera, se manejan distinto los libros
GestorLibro1.insertarLibro(MartinFierro);
GestorLibro1.insertarLibro(CorazonDelator);

GestorLibro1.getListaLibros().forEach(element => {
    console.log("libro de arreglo original: "+ element.getNombre());
});

let copia:Libro[]=GestorLibro1.getListaLibros();
copia.forEach(element => {
    console.log("libro de arreglo copia: "+ element.getNombre());
});

copia.pop();
GestorLibro1.getListaLibros().forEach(element => {
    console.log("libro de arreglo original luego del pop(): "+ element.getNombre());
});
copia.forEach(element => {
    console.log("libro de arreglo copia luego del pop()"+ element.getNombre());
});

console.log("Ejecutando consulta de libro por nombre");
GestorLibro1.consultarLibro("Martin Fierro");
GestorLibro1.eliminarLibro(MartinFierro);
//console.log("Listado de libros de arreglo original");

GestorLibro1.getListaLibros().forEach(element => {
    console.log("libro de arreglo original luego de la eliminacion del libro Martin Fierro: "+ element.getNombre());
});
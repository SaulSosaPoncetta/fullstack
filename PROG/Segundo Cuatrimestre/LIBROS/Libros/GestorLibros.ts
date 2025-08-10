import {Libro} from "./Libro";
 export class GestorLibro{
    private nombre:string;
    private listaLibros:Libro[];

    constructor(nombre:string){
        this.nombre=nombre;
        this.listaLibros=[];
    }

    // Getters
    public getNombre(): string {//controlar lo que pasamos#
        return this.nombre;
    }

    // public getListaLibros(): Libro[] {//#
    //     const copiaLibros:Libro[]=this.listaLibros.map(lib=>({...lib}) as Libro);
    //     return copiaLibros;
    // }

    public getListaLibros(): Libro[] {
        return this.listaLibros.map(libro => new Libro(libro.getNombre(), libro.getAutor(), libro.getAnioEdicion()));
    }
    

    // public getListaLibros(): Libro[] {
    //     return this.listaLibros; // Retorna la referencia directa
    // }

    // Setters
    public setNombre(nombre: string): void {//controlar siempre lo que llega*
        this.nombre = nombre;
    }

    public setListaLibros(listaLibros: Libro[]): void {//*
        this.listaLibros = listaLibros;
    }

    public eliminarLibro(libroAEliminar:Libro):void{
        if(libroAEliminar!=undefined&&this.listaLibros.includes(libroAEliminar)){
            const posLibro:number= this.listaLibros.indexOf(libroAEliminar);
            this.listaLibros.splice(posLibro,1);
        }
    }

//  ES MEJOR HACER COMO EN EL METODO ELIMINAR, PASAR UN LIBRO YA CREADO EN EL MAIN
//  agregarLibro solo deberia agregar. 
    // public agregarLibro(nombre:string,autor:string,anio:number):Libro{// la opcion seria devolver el Libro, pero hay que retornar algo en caso de error
    //     let nuevoLibro:Libro=new Libro(nombre,autor,anio);//controlar indefinidos
    //     if(!this.listaLibros.some(lib=>lib.getNombre()==nuevoLibro.getNombre() && lib.getAutor()==nuevoLibro.getAutor() && lib.getAnioEdicion()==nuevoLibro.getAnioEdicion())){
    //         this.listaLibros.push(nuevoLibro);
            //return nuevoLibro;
    //     };
    // }
    //Mucho mejor!
    public insertarLibro(libroNuevo: Libro): void {
        if (libroNuevo != undefined && !this.listaLibros.includes(libroNuevo))
            this.listaLibros.push(libroNuevo);
        console.log("Libro insertado");

    }

    public consultarLibro(consultarPorNombre: string): void {//podria devolver libro
        if (consultarPorNombre != undefined) {
            const libroBuscado: any = this.listaLibros.find(libro => libro.getNombre() == consultarPorNombre);//ESTO se puede mejorar
            if (libroBuscado != undefined) {
                console.log(`El libro buscado ${libroBuscado.getNombre()} fue escrito por: ${libroBuscado.getAutor()}`);
            }
        }
    }

}
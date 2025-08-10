//PUEDO ELEGIR QUE METODOS UTILIZO DE LA CLASE SIN IMPLEMENTAR TODO.

abstract class AutoCiudad {                                     //armo la clase abstracta  con las propiedades de las clases
    protected velocidadActual: number;
    private estaPrendido: Boolean;
    
    public constructor() {                                      // contruyo los componentes de la clase inicializandolos
        this.velocidadActual = 0;
        this.estaPrendido = false;
    }
    
    abstract acelerar(): void;                                  // declaro los metodos que voy a compartir o dar en herencia a 
                                                                // una sub clase de auto pero sin implementar nada adentro , 
    public prender(): void {                                    // sino debo usar llaves.            
            this.estaPrendido = true;                           // al implementar uso el this. y la propiedad que quiero cambiar
    }                                                           // o ejecuto alguna tarea dentro de ese metodo

    public apagar(): void {
        this.estaPrendido = false;
    }
}
                                                                //declaro clases hijas usando el extends de la clase madre
class AutoCiudadChico extends AutoCiudad {                      // para indicar la herencia
    public acelerar(): void {                                   // declaro metodo correspondiente que necesite ejecutar.
        this.velocidadActual += 10;
    }
}
    

// DEBO SI O SI GENERAR UNA IMPLEMENTACION DE CADA UNO DE LOS METODOS DE LA CLASE DE MANERA OBLIGATORIA

interface Auto { //armo la interfase con los metodos de las clases
    acelerar() : void;
    getVelocidadActual() : number;
}


class AutoCarrera implements Auto { // declaro la clase implementando interfase auto que me pasa los metodos para que los pueda usar
    private velocidadActual : number = 0;

    public constructor() { // contruyo los componentes de la clase
        this.velocidadActual = 0;
    }

    public acelerar() : void {
        this.velocidadActual += 50;
    }

    public getVelocidadActual() : number {
        return this.velocidadActual;
    }
}

class AutoFamiliar implements Auto {
    private velocidadActual: number = 0;

    public costructor() {
        this.velocidadActual = 0;
    }

    public acelerar(): void {
        this.velocidadActual += 20;
    }

    public getVelocidadActual(): number {
        return this.velocidadActual;
    }
}

let auto : AutoCarrera = new AutoCarrera(); // instancio auto de carrerra a una variable auto
console.log(auto);                          // muestro en pantalla lo que tiene la vriable autoa la cual le paso los datos del objeto autocarrerra
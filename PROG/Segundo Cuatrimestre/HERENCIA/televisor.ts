class Televisor {                               //declaro la clase para el objeto televisor.
    private estaPrendido : boolean = true;
    private volumenActual : number;
    private canalActual : number;

    class SmartTv extends Televisor {           //aplico la herencia para la clase smartv heredando las propiedades de televisor
        private sistemaOperativo: string;
    


    constructor (volumenActual: number, canalActual: number, sistOperativo: string) { //construyo la clase pasando los items como parametros
        super(volumenActual, canalActual);
        
    }

    prenderApagar(): void {                                     // funcion que prende o apaga el telefono
        if(this.estaPrendido){
            this.estaPrendido = false;
        }else {
            this.estaPrendido = true;
        }
    }
    subirVolumen(): void{                                       //funcion que incrementa en uno la caracteristica volumenActual
        this.volumenActual = this.volumenActual + 1;
    }

    subirCanal(): void {
        this.canalActual = this.canalActual + 1;
    }
}
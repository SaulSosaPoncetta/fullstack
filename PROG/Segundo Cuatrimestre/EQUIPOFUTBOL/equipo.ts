import { Jugador } from "./Jugador";
import { Directecnico } from "./diretecnico";

export class Equipo{
    private nombre:string;
    private diretecnico:Directecnico;
    private jugadores:Jugador[];
    //duda de la clase, el arreglo de jugadores ya esta en diretecnico, podria sacarlo del equipo? 
    //Piensen para la proxima clase como trabajarian, que cambios se necesitan en las clases?
    //pista: a quien le pertenecen los jugadores?
    
    constructor (nombre:string,diretecnico:Directecnico,jugadores:Jugador[]){
        this.nombre=nombre;
        this.diretecnico=diretecnico;
        this.jugadores=jugadores;
    }

    public getDt():Directecnico{
        return this.diretecnico;
    }


}
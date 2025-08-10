import { Mago } from './Mago';
import { Luchador } from './Luchador';
import { Arquero } from './Arquero';
import { Personaje } from './Personaje';

const personajes: Personaje[] = [
    new Mago("Merlin"),
    new Luchador("Miviejo"),
    new Arquero("Shullo")
];

personajes.forEach(personaje => {
    personaje.atacar();
    personaje.defender();
    personaje.subirNivel();
});

import { vehiculo } from "./vehiculo";
import { camioneta } from "./camioneta";
import { camion } from "./camion";
import { utilitario } from "./utilitario";

let vehiculotrabajo : utilitario = new utilitario(fiori)
console.log(vehiculotrabajo.acelerar);

let vehiculopaseo: auto = new auto(fiori)
console.log(vehiculopaseo.acelerar);

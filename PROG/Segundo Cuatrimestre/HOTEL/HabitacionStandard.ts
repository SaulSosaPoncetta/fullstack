import { Habitacion } from "./Habitacion";
import { Servicio } from "./InterfazServicio";

class HabitacionStandard extends Habitacion {
        constructor(estado: string, numero: number) {
            super(estado, numero);
            this.precioBase = 7000;
            this.agregarServicio(new Servicio("Limpieza", 10000, true));
            this.agregarServicio(new Servicio("Internet", 2500, false));
        }
        costoTotal(): void {

        }
}
export { HabitacionStandard };

import { Notificacion } from "./notificaciones";

//Crear vias de mensaje
const mail = new Notificacion("Ford Falcon");
const sms = new Notificacion("Fiat uno");
const push = new Notificacion("Chevrolet Corsa");

// escribe mensaje
mail.altaAuto(auto1);
sms.altaAuto(auto2);
push.altaAuto(auto3);

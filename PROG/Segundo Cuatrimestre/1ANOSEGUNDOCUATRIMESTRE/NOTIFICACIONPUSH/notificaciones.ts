export abstract class Notificacion {
    protected texto: String;

    abstract enviar(): void;
}

class Email extends Notificacion {
    public enviar(): void {
        this.texto = "Esto es un mail"
    }
}

class Sms extends Notificacion {
    public enviar(): void {
        this.texto = "Esto es un SMS"
    }
}

class PushNotificacion extends Notificacion {
    public enviar(): void {
        this.texto = "Esto es una notificacion"
    }
}
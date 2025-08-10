//Patrones de diseño y ejemplos de uso en Javascript
//Publicada el 25th enero 2021 por kimagure44
//Patrones de diseño y ejemplos de uso en Javascript
//En esta entrada veremos que son los patrones de diseño, ya que nos aportan una solución que se aplica al diseño de software y no a un lenguaje de programación en concreto.
//Por lo tanto podríamos definir un patrón de diseño como:
//Una solución estandarizada y reutilizable que nos permite solucionar problemas comunes cuando desarrollamos cualquier tipo de software.
//Debemos entender que un patrón de diseño nos permite resolver problemas con soluciones estandarizadas, y por lo tanto acelerar el desarrollo ya que existe una solución establecida.
//Otra cosa que debemos tener en cuenta es no excedernos en el uso de patrones de diseño ya que esto podría volverse en nuestra contra aumentando la complejidad de nuestro software.
//Agrupando los patrones de diseño
//Existen múltiples patrones de diseño pero todos ellos se pueden agrupan en 3 categorías:
//Patrones creacionales
//Solucionan problemas en la creación de instancias, de tal forma que su creación nos permite desacoplarlo de nuestra aplicación.
//Patrones estructurales
//Definen como usar estructuras complejas a partir de elementos simples.
//Patrones de comportamiento
//Nos permiten desacoplar nuestro código.
//Patrones creacionales
//En este grupo se engloban los patrones que permiten la creación de objetos, ofreciendo flexibilidad y reutilización.

//Patrón Constructor:  Este patrón nos permite crear una variedad de objetos complejos 
//desde un objeto raíz, ya que el mismo esta compuesto por diferentes partes que contribuyen a la 
//creación de cada objeto complejo.

class Home {
    constructor() {
        this.bathroom = 0;
        this.bedroom = 0;
        this.diningRoom = 0;
        this.kitchen = 0;
        this.livingRoom = 0;
    }
    setBathroom(value) {
        this.bathroom = value;
        return this;
    }
    setBedroom(value) {
        this.bedroom = value;
        return this;
    }
    setDiningRoom(value) {
        this.diningRoom = value;
        return this;
    }
    setKitchen(value) {
        this.kitchen = value;
        return this;
    }
    setLivingRoom(value) {
        this.livingRoom = value;
        return this;
    }
    getHome() {
        return {
            bathroom: this.bathroom,
            bedrrom: this.bedroom,
            diningRoom: this.diningRoom,
            kitchen: this.kitchen,
            livingRoom: this.livingRoom,
        };
    }
}

const home1 = new Home()
    .setBedroom(4)
    .setBathroom(2)
    .setDiningRoom(1)
    .setKitchen(1)
    .setLivingRoom(2);
const home2 = new Home()
    .setBedroom(1)
    .setBathroom(1)
    .setKitchen(1)
    .setLivingRoom(1);
console.log(home1.getHome()); // {bathroom: 2, bedrrom: 4, diningRoom: 1, kitchen: 1, livingRoom: 2}
console.log(home2.getHome()); // {bathroom: 1, bedrrom: 1, diningRoom: 0, kitchen: 1, livingRoom: 1}


//Patrón Módulo: Con este patrón podemos encapsular toda la lógica de nuestra aplicación, 
//ya que dentro del módulo estarán declaradas todas las variables y métodos.

const LIBRARY = {
    API: async (url = '', params = {}) => {
        const urlAPI = new URL(url);
        urlAPI.search = new URLSearchParams(params).toString();
        return await (await fetch(urlAPI)).json();
    }
};

(async () => {
    const result = await LIBRARY.API('https://jsonplaceholder.typicode.com/todos');
    console.log(result);
    console.log(LIBRARY);
})();


//Patrón Módulo revelador: Misma comportamiento que el anterior patrón pero en este caso 
//tendremos una parte pública y otra privada.

const LIBRARY = (() => {
    // Ámbito privado 
    const API = async (url = '', params = {}) => {
        const urlAPI = new URL(url);
        urlAPI.search = new URLSearchParams(params).toString();
        return await (await fetch(urlAPI)).json();
    }
    return {
        // Ámbito público
        apiCall: async (url = '', params = {}) => await API(url, params)
    }
})();
(async () => {
    const result = await LIBRARY.apiCall('https://jsonplaceholder.typicode.com/todos');
    console.log(result);
    console.log(LIBRARY); // {apiCall: ƒ} 
})();
//Patrón Prototipo: Con este patrón podemos crear un objeto que sirva de modelo para otros objetos mediante la herencia prototípica.Debemos tener en cuenta que nos devuelve un objeto vacío donde las propiedades y los métodos están en el prototipo.
const vivienda = {
    direccion: '',
    cp: '',
    poblacion: '',
    provincia: '',
    set: {},
    get: {},
};
Object.keys(vivienda.valueOf()).forEach(value => {
    if (!['set', 'get'].includes(value)) {
        vivienda.set[value] = function (data) {
            this[value] = data;
        }
        vivienda.get[value] = function () {
            this[value];
        }
    }
});
console.log('OBJETO VIVIENDA', vivienda);
const v1 = Object.create(vivienda);
const v2 = Object.create(vivienda);
console.log(v1, v2, vivienda);
Resultado prototype
//Patrón Singleton: Este patrón nos ofrece una instancia única y proporciona un acceso global a dicha instancia.
class SingletonClass {
    static instance;
    constructor() {
        if (SingletonClass.instance) {
            return SingletonClass.instance;
        }
        SingletonClass.instance = this;
    }
    getInstance() {
        return this.instance;
    }
}
const a = new SingletonClass(); // Primera y única instancia
const b = new SingletonClass(); // Misma instancia que la anterior
console.log(a.getInstance() === b.getInstance()) // true
function SingletonFunction() {
    if (!SingletonFunction.instance) {
        SingletonFunction.instance = this;
    }
    return SingletonFunction.instance;
}
const a = new SingletonFunction();
const b = new SingletonFunction();
console.log(a === b); // true
//Patrones de estructura
//Aquí agruparemos los patrones que hacen referencia a la composición de objetos, y que nos simplifica la relación entre ellos.

//Patrón Mixin: Este patrón nos permite añadir mas funcionalidades a una clase existente sin tener que modificar la clase.
const mixin = {
    getNombre() {
        return this.nombre;
    },
    getEdad() {
        return this.edad;
    }
};
class Persona {
    constructor(nombre = '', edad = 0) {
        this.nombre = nombre;
        this.edad = edad;
    }
}
Object.assign(Persona.prototype, mixin);
const p1 = new Persona('Iván', 43);
console.log(p1, p1.getNombre(), p1.getEdad()); // {nombre: "Iván", edad: 43}, edad: 43, nombre: "Iván"
//Patrón Decorador: Este patrón es parecido al patrón mixin, salvo que en lugar de añadir funcionalidades al prototipo se hace en las instancias de la clase.
class Videoclub {
    constructor(title = '', rented = false) {
        this.title = title;
        this.rented = rented;
        this.time = 0;
    }
}
const person1 = new Videoclub('The mummy', true);
person1.rentedTime = function (value) {
    this.time = value;
};
person1.rentedTime(2);
console.log(person1); // rented: true, rentedTime: ƒ (value), time: 2, title: "The mummy"
//Patrón Facade: Este patrón proporciona una interfaz que nos abstrae de una funcionalidad compleja.Al aplicar este patrón solo exponemos lo necesario haciendo el código más simplificado y fácil de utilizar.
(() => {
    const Maths = function () {
        // Lógica compleja que aislamos
        const multiply = (number, cont = 0, arr = []) => {
            arr.push(number * cont);
            return cont < 10 ? multiply(number, ++cont, [...arr]) : [...arr];
        }
        const saveTable = (number, cb) => {
            if (tableExist(number)) {
                window.localStorage.removeItem(`Table ${number}`);
            }
            window.localStorage.setItem(`Table ${number}`, cb(number));
            return window.localStorage.getItem(`Table ${number}`)
        }
        const tableExist = (number) => {
            return window.localStorage.getItem(`Table ${number}`) !== null;
        }

        // Lógica simple que exponemos (fachada - facade)
        this.numberTable = (number) => saveTable(number, multiply);
    }
    const t1 = new Maths();
    for (let cont = 1; cont <= 10; cont++) {
        t1.numberTable(cont);
    }
})();
//Patrón adaptador: Este patrón nos permite convertir la interfaz de una clase en otra que se adapte a nuestras necesidades, consiguiendo de esta forma que ambas clases puedan convivir sin problema.
(async () => {
    /* ------------------------------ */
    class oldClass {
        constructor() {
            this.url = '';
        }
        setURL(url) {
            this.url = url;
        }
        call(cb) {
            const xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                const readyState = this.readyState;
                const status = this.status;
                if (readyState === 4 && status === 200) {
                    cb(JSON.parse(this.responseText));
                }
            };
            xhttp.open("GET", this.url, true);
            xhttp.send();
        }
    }
    oldC.setURL('https://swapi.dev/api/');
    oldC.call((data) => console.log('Old class', data));
    /* ------------------------------ */
    /* ------------------------------ */
    class newClass {
        constructor() {
            this.url = '';
        }
        setURL(url) {
            debugger;
            this.url = url;
        }
        async call() {
            debugger;
            return await (await fetch(this.url)).json();
        }
    }
    const newC = new newClass();
    newC.setURL('https://swapi.dev/api/');
    const data = await newC.call();
    console.log('New class', data);
    /* ------------------------------ */
    /* ------------------------------ */
    class adapterClass {
        constructor() {
            debugger;
            this.url = '';
            this.newClass = new newClass();
        }
        setURL(url) {
            debugger;
            this.newClass.setURL(url);
        }
        async call(cb) {
            debugger;
            const result = await this.newClass.call();
            cb(result);
        }
    }
    const adapterC = new adapterClass();
    // Tenemos la sintaxis de la clase antigua, pero con la lógica adaptada de la nueva clase
    adapterC.setURL('https://swapi.dev/api/');
    adapterC.call((data) => console.log('Adapter', data));
    /* ------------------------------ */
})();
//Patrón proxy: Este patrón nos permite usar un objeto que haga de intermediario de otro, permitiéndonos controlar el acceso a el objeto.
(() => {
    const proxyPatter = {};
    (function () {
        // this === proxyPatter
        const privateNumber = 100;
        const privateMethod = function () {
            return privateNumber;
        };
        this.publicMethod = function () {
            return privateMethod();
        }
        this.getTHIS = function () {
            return this;
        }
    }).apply(proxyPatter);
    console.log(proxyPatter);
    // { publicMethod: ƒ, getTHIS: ƒ }
    console.log(proxyPatter.publicMethod());
    // 100
})();
//Patrones de comportamiento
//En este último grupo añadiremos los patrones que se encargan de la comunicación entre objetos.
//
//Patrón observador: Este patrón nos permite tener el control y la gestión de eventos mediante dos objetos, ya que uno de los objetos se encarga de publicar los eventos y el otro suscribirse.Un ejemplo muy usado en Javascrtipt lo podemos ver cuando usamos addEventListener.
(() => {
    class ObserverPattern {
        constructor() {
            this.observers = [];
        }
        on(observer) {
            return this.observers.push(observer);
        }
        off(observer) {
            const index = this.observers.indexOf(observer);
            if (index > -1) {
                this.observers.splice(index, 1);
            }
        }
        notify(observer, message) {
            const [ob] = this.observers.filter(ob => ob === observer);
            ob?.notify?.(message);
        }
    }

    class Person {
        constructor(name) {
            debugger;
            this.name = name;
        }
        notify(message) {
            debugger;
            console.log('MENSAJE', message);
        }
    }
    const p1 = new Person('Person 1');
    const p2 = new Person('Person 2');
    const p3 = new Person('Person 3');
    const notify = new ObserverPattern();
    notify.on(p1);
    notify.on(p2);
    notify.on(p3);
    notify.notify(p1, 'Hola P1'); // MENSAJE Hola P1
    notify.notify(p2, 'Hola P2'); // MENSAJE Hola P2
    notify.notify(p3, 'Hola P3'); // MENSAJE Hola P3
    notify.off(p1);               // Eliminamos el observer a P1
    notify.off(p2);               // Eliminamos el observer a P2
    notify.notify(p1, 'Hola P1'); //
    notify.notify(p2, 'Hola P2'); //
    notify.notify(p3, 'Hola P3'); // MENSAJE Hola P3
})();
//Patrón mediador:  Este patrón define un objeto que será el encargado de gestionar la comunicación entre el resto de los objetos.
(() => {
    // Mediator 
    class ControlTower {
        constructor() {
            this.airplane = {};
        }
        add(airplane) {
            this.airplane[airplane.name] = airplane;
            airplane.mediator = this;
        }
        send(message, from, to = null) {
            if (to) {
                to.receive(message, from);
            } else {
                Object.values(this.airplane).forEach((item, index, arr) => {
                    if (item.id !== from.id) {
                        item.receive(message, from);
                    }
                });
            }
        }
    }
    class Airplane {
        constructor(name) {
            this.name = name;
            this.mediator = null;
            const [id] = window.crypto.getRandomValues(new Uint32Array(1));
            this.id = id;
        }
        send(message, to) {
            this.mediator.send(message, this, to);
        }
        receive(message, from) {
            console.log(`[${this.name}]: You have a message from....${from.name} ==> ${message}`);
        }
    }
    const plane1 = new Airplane('P1');
    const plane2 = new Airplane('P2');
    const plane3 = new Airplane('P3');
    const plane4 = new Airplane('P4');
    const control = new ControlTower();
    control.add(plane1);
    control.add(plane2);
    control.add(plane3);
    control.add(plane4);
    plane1.send('Prueba1');
    plane2.send('Prueba2');
    plane3.send('Prueba3');
    plane4.send('Prueba4');
    plane1.send('1 to 2', plane2);
    plane4.send('4 to 3', plane3);
})();
//Patrón comando: Con este patrón ejecutamos una operación sin saber el contenido de la misma, encapsulando la petición y facilitando su parametrización.
(() => {
    const Command = function () {
        this.item = [];
        this.add = function (...args) {
            debugger;
            this.item.push(...args);
        }
        this.getItems = function () {
            debugger;
            return this.item;
        }
        return {
            cmd: (command, ...args) => {
                return this?.[command]?.(args);
            }
        }
    };

    const exec = new Command();
    debugger;
    exec.cmd('add', 1, 2, 3, 4, 5, 'a', 'b', 'c', 'd', true, false, () => 'function');
    console.log(exec.cmd('getItems'));
})();
//Patrón cadena de responsabilidad: Este patrón permite pasar solicitudes entre manejadores, ya que cada manejador decide si procesar o pasar al siguiente.
(() => {
    class ManipulationText {
        constructor(text, seed) {
            this.text = text;
            this.seed = seed;
        }
        cut() {
            this.text = Array.from(this.text)
            return this;
        }
        letterToNumber() {
            this.text = this.text.map(i => {
                if (i.toLowerCase() === 'a') return 4;
                else if (i.toLowerCase() === 'b') return 6;
                else if (i.toLowerCase() === 'e') return 3;
                else if (i.toLowerCase() === 'l') return 1;
                else if (i.toLowerCase() === 'o') return 0;
                else if (i.toLowerCase() === 't') return 7;
                else return i;
            });
            return this;
        }
        convertToBinary() {
            this.text = this.text.map(i => {
                const isString = typeof i === 'string';
                return parseInt(isString ? i.charCodeAt().toString(2) : i.toString(2));
            });
            return this;
        }
        compact() {
            this.text = this.text.map(i => i & this.seed);
            return this;
        }
        join() {
            this.text = this.text.join('.');
            return this;
        }
    }
    const seed = Math.floor(Math.random() * 100000) + 1;
    const text1 = new ManipulationText('Hello World', parseInt(seed.toString(2)));
    const crypto = text1.cut().letterToNumber().convertToBinary().compact().join();
})();
//Patrón iterador: Con este patrón podemos acceder a los elementos de un objeto secuencialmente sin necesidad de conocer su estructura, y además la responsabilidad de recorrer los elementos recae sobre el iterador.
(async () => {
    async function* Iterator(data) {
        let index = 0;
        while (index < data.length) {
            const response = await (await fetch(data[index++])).json();
            yield response;
        }
    }
    const baseURL = 'https://jsonplaceholder.typicode.com/';
    const urls = {
        todos: 'todos/',
        posts: 'posts/',
        comments: 'comments/',
        albums: 'albums/',
        photos: 'photos/',
        users: 'users/',
    };
    const list = Object.values(urls).map(i => `${baseURL}${i}`);
    const urlIterator = Iterator(list);
    debugger;
    console.log(await urlIterator.next());
    console.log(await urlIterator.next());
    console.log(await urlIterator.next());
    console.log(await urlIterator.next());
    console.log(await urlIterator.next());
    console.log(await urlIterator.next());
    console.log(await urlIterator.next());
    console.log(await urlIterator.next());
})();
//Patrón state: Con este patrón podemos modificar el comportamiento de un objeto en base a lo que suceda dentro del mismo.
(() => {
    const QueueManagement = function () {
        var count = 0;
        var currentState = new x1(this);
        this.change = function (state) {
            console.log(count);
            currentState = state;
            count++;
            if (count > 10) count = 0;
            currentState.next();
        };
        this.count = function () {
            return count;
        }
        this.run = function () {
            currentState.next();
        };
    };
    const x1 = function (data) {
        this.data = data;
        this.next = function () {
            console.log('X1', data)
            const send = data.count() < 10 ? new x1(data) : new x10(data);
            data.change(send)
        }
    };
    const x10 = function (data) {
        this.data = data;
        this.next = function () {
            console.log('X10', data)
            const send = data.count() < 10 ? new x10(data) : new x100(data);
            data.change(send)
        }
    };
    const x100 = function (data) {
        this.data = data;
        this.next = function () {
            console.log('FIN - X100', data)
        }
    };
    const statePattern = new QueueManagement();
    statePattern.run();
})();
//Aunque existen mas patrones de diseño, he añadido los que he usado y he podido aplicar tanto a proyectores reales como personales.
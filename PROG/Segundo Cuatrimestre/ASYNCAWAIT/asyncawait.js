// trae los datos para posteriori mostrarlos
async function traerData(url) {
    const respuesta = await fetch(url); // trae la informacion del url pasado por parametro

    const data = await respuesta.json(); // lo convierte en json para poder trabajarlo
    return data;
}

async function mostrarDatos() {
    try {
        const data = await traerData('https://.typicode.com/users'); // trae los datos a data
        console.log(data); // imprime en consola.
    }catch (error) {
        console.error("Este es el error:", error);
    }
}

mostrarDatos();











//funcion que retorna una promise

const obtenerResultado = () => {
    return new Promise ((resolve, reject) => {
        setTimeout (() => {
            resolve("Promesa Exitosa")
        }, 2000);
    });
}

// funcion async await que permite continuar ejecucion del programa hasta que se retorne la promesa
const procesarDatos = async () => {
    let respuesta = await obtenerResultado(); //EL AWAIT HACE QUE SE ESPERE LA RESPUESTA

    console.log(respuesta);
}

procesarDatos();
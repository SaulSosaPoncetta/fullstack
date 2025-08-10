let materiales = [
    {
        codigo: 16001,
        cantidad: 1,
        descripcion: "Lanza 63"
    },
    {
        codigo: 16002,
        cantidad: 2,
        descripcion: "Mangas 63"
    }
]

let promesa = () => {
    return new Promise((resolve, reject) => {   // Declaro una promesa es una funcion promise
    let exito = false;
        if (exito) {
            resolve(materiales)
        } else {
            reject("Promesa fallida")
        }
    })
}
//console.log(promesa);
// o
promesa.then(resp => console.log(materiales)) //si se cumple la promesa proseso el then, proceso la promesa e imprimo la respuesta.

promesa.catch(error => console.log(error)) // si la promesa me da error, capturo el error y imprimo el error por consola.
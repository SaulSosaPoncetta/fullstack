let promesa = new Promise((resolve, reject) => {
    let exito = false;

    if (exito) {
        resolve(prod)
    }else {
        reject("Fallo")
    }
})

console.log(promesa);

promesa
    .then(resp => console.log(resp)); // ok lo muestro o proceso
    .catch(err => console.log(err)) // error lo capturo
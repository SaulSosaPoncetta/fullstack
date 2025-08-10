/* como leo una api de manera global y me devuelve un arreglo, no accesible todavia
fetch("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0")
    .then(respuesta => respuesta.json())
    .then(datos => console.log(datos))*/

//como leo una api de manera global y me devuelve un arreglo, ahra si accesible a los datos
fetch("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0")
    .then(resp => resp.json())
    .then(data => {
            data.results.forEach(pokemon => {
                caja.innerHTML += `<h2> Personaje: ${pokemon.name} </h2>`
            })       
        })







/* fetch("https://hp-api.onrender.com/api/characters")
    .then(respuesta => respuesta.json())
    .then(datos => {
        const personajes = datos.slice(0, 20); 
        personajes.forEach(personajes => {
            const tarjeta = document.createElement("div");// Creo un nuevo div para cada personaje
            tarjeta.classList.add("tarjeta"); 
            tarjeta.innerHTML = `<h2> Personaje: ${personajes.name}</h2>           
                                <h4> Casa: ${personajes.house}</h4>
                                <h4> Especie: ${ personajes.sepecies }</h4 >
                                <h4> Genero: ${ personajes.gender }</h4 >
                                <h4> Fecha Nacimiento: ${ personajes.dateOfBirth }</h4 >
                                <h4> Color de ojos: ${ personajes.eyeColour }</h4 >
                                <h4> Color de cabello: ${ personajes.hairColour }</h4 >`;
            caja.appendChild(tarjeta); // genero el contenido a cada div del formulario html
        });
    })
*/

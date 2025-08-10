
// --------------------    Boton obtener datos ---------------------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded',()=>{                                  // cuando se carga el documento se carga todo el js
    const obtenerDatos = document.getElementById('obtenerDatos');                   // capturo el boton
    obtenerDatos.addEventListener('click',()=>{                                     // me pongo a escuchar el boton al hacer click
        fetch('http://localhost:3000/track')                                        
        .then(res=>res.json())                                                      // comnvierte los datos a json
        .then(data=>{                                                               // me traigo todo al data
            console.log(data);                                                      // muestro en consola a data
            const contenedor=document.querySelector('#lista-canciones');            // muestro los datos en lista de canciones
            contenedor.innerHTML='';                                                // armo el contenedor vacio
             data.forEach(cancion => {                                              // recorro con el data con un foreach
                const itemCancion=document.createElement('li');                     // creo elementos de la lista en html para mostrar los datos
                const detalles= document.createElement('ul');

                Object.entries(cancion).forEach(([clave,valor])=>{                  // por cada entrada de cancion tengo clave valor, y lo guardo en un li (lista)
                    const liDetalle=document.createElement('li');
                    liDetalle.textContent= `${clave}: ${valor}`;                    // me guarda clave y valor
                    detalles.appendChild(liDetalle);                                
                });
                itemCancion.appendChild(detalles);
                contenedor.appendChild(itemCancion)

                
             });

        })
    })
})
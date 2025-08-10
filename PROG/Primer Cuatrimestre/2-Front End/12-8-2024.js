const arr = [1,2,3,4,5];

arr.forEach(item => {
    console.log(item);
})
//console.log(arr);
 
//every() :verifica que todos los elementos del arreglo cumplan con una condicion (deben cumplirla todos)
  
const everyCumple= arr.every(item=> item>0 )
console.log(everyCumple);

const menosque= arr.every(item =>item<4 )
console.log(menosque);

// some()  este metodo nos dice si ALGUN elemento del arreglo cumple con la condicion
const algun= arr.some(item=>item>4 )
console.log(algun);

//reduce

//const suma= arr.reduce(par1, par2)
const suma= arr.reduce((total, valor)=>total+valor,0)
console.log(suma);

// map  se ejecuta sobre cada elemento del arreglo. Crea un nuevo arreglo sin modificar el original 

const sumar1=arr.map(item => item +1);
console.log(sumar1);
console.log(arr);

// filter se ejecuta sobre c/elemento y crea un nuevo array con los que cumplen la condicion

let elemFiltrados= arr.filter(item =>item>2&&item<5);
console.log(elemFiltrados);
            //    0        1        2        3
let nombres=["jose", "juana", "maria", "marta"]
let filtrados= nombres.slice(1,3)
console.log(filtrados);


let arrDesordenado=[5,9,7,3,2,1,4];
let arrOrdenados= arrDesordenado.sort((a,b)=>a-b);
console.log(arrOrdenados);








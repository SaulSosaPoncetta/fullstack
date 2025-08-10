let cadena : string = 'Juan Perez';

let inicialNombre:string= cadena[0];
let inicialApellido: string= cadena[5];

console.log("Posicion 0 " + inicialNombre);
console.log("Posicion 5 " + inicialApellido);


//length

// let arreglo: string[] = ["a","b","c"];
// console.log(arreglo.length);

//indexOf(textoBuscado)

let texto: string= "Tengo que hacer muchos ejercicios";

// console.log(texto.indexOf("hacer"));
// console.log(texto.indexOf("hacer",20));

// //lastIndexOf(textoBuscado)

// let texto2 : string ="Tengo que hacer y hacer y hacer muchos ejercicios";
// console.log(texto2.lastIndexOf('hacer'));

// //substring(inicio, final)
// console.log(texto2.substring(10,15));

// //substr(inicio, largo)
// console.log(texto2.substr(10,5));

//toLowerCase & toUpperCase
 let textoCombinado: string= "AaAaA";

 console.log(textoCombinado.toLowerCase()); //todo a minuscula
 console.log(textoCombinado[1].toUpperCase()); //todo a mayuscula


 //toString()
let numero: number = 234;

console.log(numero.toString());

let numeroString: string = "abcde";

// console.log(parseInt(numeroString));
// console.log(typeof parseInt(numeroString));
// console.log(typeof numeroString);

// let numDecimalString: string = "3.20";

// console.log(parseFloat(numDecimalString));

// let numeroNumber : number = parseInt(numeroString);

// split(a)

let arrayDeNumeros : string[] = numeroString.split("");
console.log(arrayDeNumeros);
console.log(texto.split(" "));









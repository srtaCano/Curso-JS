// String -> Cadenas de texto
let saludo = 'Hola mundo';

// Number -> Numeros enteros y decimales
let Numeros = 3.1415;

// Booleano -> Valores logicos
let Laura = true;

// En general existen los valores truthy que son los valores que
// al convertirlos en booleando dan trur y son todos los valores 
// menos los falsy, los cuales son:
// 0, -0, null,n NaN, Undefined, false

// Undefined -> Variable declarada sin valor
let indefinido;

// Null -> Ausencia intencional de valor
let vacio = null;

// BigInt -> Numeros enteros muy grandes
let grande = 1234567812345678;

// Symbol -> Identificador Unico e inutable
const id = 1020110100;

// PARA CONCATENAR 
// Forma tipica 
console.log("Hola, usuario nro "+id)

// Forma super
let cadenaConPoderes = `Hola, usuario ${id}
Como se encientra hoy?
Espero que se encuentre de maravilla`

console.log(cadenaConPoderes)
console.log(typeof Laura)

// OBJETOS LITERALES
// Estructuras de clave-valor que agrupan datos relacionados.
const Usuario = {
    nombre: 'ROBERTOOOO',
    edad: 48,
    esPremium: true
};

// FUNCIONES: Aunque se pueden llamar, 
// en JS las funciones también son objetos de primera clase.

function saludar() {
  return "¡Hola!";
}

console.log(saludar())

// Arrays: Listas ordenadas de valores. 
// En JS, los arrays técnicamente son un tipo especial de objeto.

const colores = ["rojo", "verde", "azul"];
console.log(colores[0]); // "rojo"



// ACTIVIDAD: Vamos a hacer una calculadora, para esto debemos tener
// en cuenta que el metodo prompt siempre nos va a dar el valor como
// un String, por eso usamos ParseInt

// let numero1 = prompt("Ingresa un numero"),
// numero2 = prompt("Ingresa otro numero");

// numero1 = parseInt(numero1);
// numero2 = parseInt(numero2);

// console.log(numero1);
// console.log(numero2);

// let suma = numero1+numero2;

// alert(`la suma de ${numero1} y ${numero2} es: ${suma}`)
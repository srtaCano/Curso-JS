// COERSION EN JS
// Es el proceso automático o manual de convertir un valor de un 
// tipo de dato a otro (por ejemplo, de un String a un Number).

// Coersion Implicita:
// Ocurre cuando JavaScript intenta "ayudarte" 
// convirtiendo los tipos por ti para que una operación no falle.

// El caso de la Suma (+)
// Si usas el signo + y uno de los valores es un String, 
// JavaScript prioriza la concatenación (unir textos).

// El caso de otros operadores
//A diferencia de la suma, estos operadores solo 
// funcionan con números, por lo que JavaScript intentará 
// convertir todo a Number.


// OPERADORES BASICOS BINARIOS
// Operadores binarios que necesitan de minimo 2 variables para operar

let a = 15,
b = 3;

// Suma
console.log(a+b);

// Resta
console.log(a-b);

// Multiplicacion
console.log(a*b);

// Division
console.log(a/b);

// Operadores especiales
// Modulo -> Devuelve el residuo de una division entera
console.log(a%b);

// Exponenciación -> Eleva el primer número a la potencia del segundo.
console.log(a**b);


// OPERADORES UNARIOS
// Solo necesitan una variable para operar

// ++ se utiliza como un contador
console.log(a);
a++; // Aumenta en 1 el valor de a
console.log(a);
console.log(++a); // Incrementa sin necesidad de modificacion previa

// Lo mismo ocurre con el --
console.log(b);
b--; // Disminuye en 1 el valor de b
console.log(b);
console.log(--b); // Decrementa sin necesidad de modificacion previa


// OPERADOR LOGICO
// ! Negacion
console.log(!true) // Niega el true
console.log(!!true) // Niega la negacion

// And -> && Devuelve true solo si ambos operandos son verdaderos. 
// Si uno es falso, todo es falso.

// Este operador tambien sirve coo un condicional, ejemplo

let dia = "Domingo";

function saludar(){
    let nombre = prompt('¿Cual es su nombre?');
    console.log(`FELIZ DOMINGO ${nombre}!!!`)
}

// Si dia es domingo entones ejecuta saludar
dia == "Domingo" && saludar();


// Or -> || Devuelve true si al menos uno de los operandos es verdadero. 
// Solo es falso si ambos lo son.

// += -> Asignacion con suma, es decir, acumulador
// -= -> Resta con la variable indicada

// Operadores de comparacion
// < -> Menor que
// > -> Mayor que
// <= -> Menor igual que
// >= -> Mayor igual que
// == -> Igual a 
// != -> Diferente que
// !== -> Diferente que estricto (Sin cohersion)

// OPERADOR TERCIARIO
// Este reemplaza a la sentencia if-else
// Su estructura es como una pregunta rápida: 
// "¿Se cumple esto? Si sí, haz esto; si no, haz aquello".
/* 
La sintaxis utiliza los símbolos ? (la pregunta) y : (el "si no")
CONDICION?EXPRESION_SI_ES_TRUE:EXPRESION_SI_ES_FALSE
*/

// Ejemplo con un if-else tradicional para verificra si el usuario es +18:

let edad = 20;
let mensaje;

if (edad >= 18) {
  mensaje = "Puedes votar";
} else {
  mensaje = "Eres muy joven";
}
console.log(mensaje); // "Puedes votar"

// Con operador terciario
edad = 14;
mensaje = (edad >= 18) ? "Puedes votar" : "Eres muy joven";

console.log(mensaje); // "Eres muy joven"

// Es bueno usarlo  ya que es súper útil dentro de cadenas de texto 
// (Template Strings) o frameworks como React. PEEEROOO...
// Si la lógica es muy compleja o tiene muchas condiciones, 
// es mejor usar un if o un switch. El código debe ser legible.
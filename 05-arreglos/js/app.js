// Arreglos -> Son considerados objetos y permiten almacenar valores
// como valores, objetos, arreglos o valores primitivos
// Son como un casillero y cada uno puede almacenar un tipo
// de dato diferente en cada uno

// let array = [valor1, valor2, valor3]

let frutasFav = ['Fresa', 'Manzana', 'Piña', 'Uva', 1500, true];

console.log(frutasFav); // Para ver toodos los datos del array

console.log(frutasFav[3]); // Para acceder al arreglo segun una posicion
console.log(frutasFav[3][0]); // Para acceder al arreglo segun una posicion y a una letra segun posicion
console.log(frutasFav.length); // Para ver el tamaño del arreglo
console.log(frutasFav[frutasFav.length-1]); // Para ver el penultimo item del array
// Con el metodo at no debo llamar el arreglo para poder ver el penultimo elemento
console.log(frutasFav.at(1));
console.log(frutasFav.at(-1)); // Ultimo elemento
console.log(frutasFav.at(-2)); // antepenultimo elemento

// PARA AÑADIR ELEMENTOS AL ARREGLO usamos el push

frutasFav.push("arandanos");
console.log(frutasFav); // Para ver toodos los datos del array

frutasFav.push("kiwi", "Naranja"); // Pueedo añadir mas de uno a la vez
console.log(frutasFav); // Para ver toodos los datos del array

// PARA ELEMINAR UN VALOR metodo pop
frutasFav.pop(); // Siempre elimina el ultimo item del array
console.log(frutasFav); // Para ver toodos los datos del array

// Para agg uno o mas elementos al inicio del array -> Metodo unshift
frutasFav.unshift("Pera"); // En esta tambein se puede pasar mas de uno como en el push
console.log(frutasFav); // Para ver toodos los datos del array

// Para quitar un elemento al inicio del array -> Metodo shift
frutasFav.shift() // Elimina el primer elemento del arreglo
console.log(frutasFav); // Para ver toodos los datos del array

// NOTA: push y pop son mas rapidos que shift y unshift

/* Los arreglos en js pueden contener arreglos dentro de si mismos*/

// Aqui cada elemento del array es otro array, por lo cual tenemos ahora una matriz
const equipoGanadoresChamp = [
    ["Barcelona", "Real Madrid"], ["City", "United", "liverpool"], ["Juve", "Intern", "Milan"]
]
console.log(equipoGanadoresChamp)

// Para acceder a los valores del arreglo
console.log(equipoGanadoresChamp[0]); // Para acceder a toda una fila
console.log(equipoGanadoresChamp[1][2]); // Para acceder a una fila y una columna

equipoGanadoresChamp[1][2]="Chelsea"; // Asi puedo cambiar un valor de un lugar especifico
console.log(equipoGanadoresChamp[1][2]);

equipoGanadoresChamp.at(-1).push("Arsenal"); // Añadimos un equipo extra
console.log(equipoGanadoresChamp)

equipoGanadoresChamp.at(2).pop(); // Borro el ultimo elemento del ultimo array
console.log(equipoGanadoresChamp)


/* Para iterar un arreglo (Ir a cada valor de forma secuencial de inicio a fin)
    podemos usar el metodo .forEach(function()){} en este lo que hace es que
    en cada valor del arreglo se va a ejecutar la funcion que definamos
*/

const tablaMutliplicar = [1,2,3,4,5,6,7,8,9,10];
let numeroMultiplicar = Number(prompt('¿Qué tabla de multiplicar quieres?'))

tablaMutliplicar.forEach(function(numero){
    let operacion = numero*numeroMultiplicar,
    mensaje = `Multiplicar ${numeroMultiplicar} x ${numero} no da como resultado: ${operacion}`;
    console.log(mensaje);
});

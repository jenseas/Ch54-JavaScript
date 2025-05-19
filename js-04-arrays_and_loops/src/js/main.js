
// =============== Declarar un arreglo ===============
const myArray = []; // []
const myArray2 = new Array(); // []

const myArray3 = [5]; // [5]
const myArray4 = new Array(5); // [undefined, undefined, undefined, undefined, undefined]

const myArray5 = [5,6]; // [5,6]
const myArray6 = new Array(5,6); // [5,6]

// ============ Iterar un  arreglo con for loop ============
/*
 Sintaxis:
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }

*/
const nombres = ["Juan", "Pedro", "María", "Ana"];
for ( let index = 0; index < nombres.length; index++ ){
    console.log( nombres[index] ); // Juan, Pedro, María, Ana
}



// Simplificaciones en la iteración de un arreglo
// ----------------------- Uso de for... of ------------------
/* Ejecuta una sentencia por cada elemento de un objeto iterable(array, colección, string).
Sintaxis:
    for (const iterator of object) {
    
    }
*/

const colores = ["Rojo", "Azul", "Verde", "Amarillo"];

for (let i = 0; i < colores.length; i++) {
    const element = colores[i];
    console.log(element);    
}

for ( const color of colores ) {
    console.log( color );
}

// ---------------------- Ejercicio con for of ---------------------
/**
 *  Del siguiente arreglo de cantantes, mostrar en el DOM, el listado como unorder list.
 *  const cantantes = ["Juan Gabriel", "José José", "Rocío Dúrcal", "Ana Gabriel"];
 *  - Usar for of
 *  - De preferencia usar una función 
 *    <li>Juan Gabriel</li>
 */
const cantantes = ["Juan Gabriel", "José José", "Rocío Dúrcal", "Ana Gabriel"];
const refListaCantantes = document.getElementById("cantantes-lista");

const mostrarListaEnDOM = arr => {
    let ul = document.getElementById('cantantes-lista');
    let listaDesordenada = "";
    
    for (const cantante of arr) {
        listaDesordenada += `<li>${cantante}</li>`;
    }
    ul.innerHTML = listaDesordenada;
}
mostrarListaEnDOM(cantantes);

/*
const imprimirCantantes = (listaCantantes) => {
    for (const cantante of listaCantantes){
        console.log(cantante);
    }
}
imprimirCantantes(cantantes);
*/
/*
const imprimirCantantes = (listaCantantes) => {
    let cantantesConcatenados = "";
    for (const cantante of listaCantantes){
        console.log(cantante);
       // cantantesConcatenados = cantantesConcatenados + cantante + " - "
        cantantesConcatenados += cantante + " - " //operador compuesto
    }
    return cantantesConcatenados;
}
console.log(imprimirCantantes(cantantes));
*/
/**
 *  Del siguiente arreglo de cantantes, mostrar en el DOM, el listado como unorder list.
 *  const cantantes = ["Juan Gabriel", "José José", "Rocío Dúrcal", "Ana Gabriel"];
 *  - Usar for of
 *  - De preferencia usar una función 
 *    <li>Juan Gabriel</li>
 */



// ------------------- Uso de break en ciclos ----------------------------
// break detiene la ejecución de la iteración en curso y termina el ciclo.

let iteracion = 0;

for ( ;   ;  ){
    console.log( `Núm de iteración: ${iteracion}` ); // 0, 1, 2, 3, 4
    iteracion++;
    if ( iteracion === 5 ){
        break;
    }
}




// ------------------- Uso de break y label en ciclos anidados ----------------------------
multiplicando:
for (let i = 1; i <= 7; i++ ){
    multiplicador:
    for (let j = 1; j <= 10 ; j++){        
        console.log(`${i} x ${j} = ${i * j}`);             
        if( i >= 4 ) break multiplicando;
    }

}
// ejercicios mentales

let myIteration; //undefined
//   paso 1           paso 2 <---- regresa; paso 4
for (myIteration = 0; myIteration <= 5; myIteration++){
    console.log("For Loop", myIteration ); //paso 3

}
console.log("Final", myIteration); // imprime 6 porque no se?




// ------------------- Uso de continue en ciclos ----------------------------
// break: Termina completamente un bucle (for, while, switch, etc.).
// continue: Salta la iteración actual y pasa a la siguiente sin salir del bucle.

console.log(   NaN === NaN );  // false
for (let i = 0 ; i <= 5; i++ ){
    if ( i === 3) continue;
    console.log("Estoy dentro del ciclo for"); 
    console.log("Valor de i ", i ); // 0, 1, 2,  4 , 5
}

for (let i = 0 ; i <= 5; i++ ){
    if ( i !== 3){ 
    console.log("Estoy dentro del ciclo for"); 
    console.log("Valor de i ", i ); // 0, 1, 2,  4 , 5
    }
}



// ============== Ciclo While ======================
//                (while loop)
/*
 Crea un bucle que ejecuta una sentencia mientras la condición especificada
 se cumpla.

 Sintaxis:
    while( condición) sentencia;

    while ( condición ){
        sentencias;
    }

*/
/*
 Pregunta al usuario si quire que se genere su númer de la suerte.
 Si la respuesta es "si", genera de forma aleatoria un número.
 En cas contrario, despedirse.
*/ 
/*
while(  confirm("¿Quieres tu número de la suerte")  ){
    const numeroSuerte = Math.random();
    console.log("Tu número de la suerte es: " + numeroSuerte);
}


const generarNumerosAleatorios2 = (cantidad, minNum = 0, maxNum = 10) => {
    for (let i = 0; cantidad; i++) {
        const numeroAleatorio = Math.random(); //
        const escalarNumero = numeroAleatorio * (maxNum - minNum);//0.0 - 10.9999
        const numerosEntero = Math.floor(escalarNumero + minNum);// 0 ...9
        console.log(`numero aleatorio entre ${minNum} y ${maxNum}: ${numerosEntero}`);//0...9
    }
}
generarNumerosAleatorios2(5);
generarNumerosAleatorios2(5, 50, 60);
*/

/*
      Melate Chocolate
      1.- Al puldar el botón Generar mis número de la suerte.
      1. Generar 6 números aleatorios entre el 1 y el 54.
      2.- Mostrar el resultado en el DOM.
*/

/**
 * Generar un número aleatorio entre un rango de números
 * @param {number} minNum 
 * @param {number} maxNum 
 */
//----- funcion que genera un solo nuemro aleatorio ------
const generarNumeroAleatorio = (minNum, maxNum) => {
    const numeroAleatorio = Math.random();
    const escalarNumero = numeroAleatorio * ( (maxNum - minNum ) + 1);
    const numeroEntero = Math.floor(escalarNumero + minNum);
    return numeroEntero;
};

const elNumeroExisteEnArreglo = (arreglo, numero) => {
    for (const elemento of arreglo) {
        if (elemento === numero) return true
    }
    return false;
}

//
const imprimirMelateChocolate = (numeros) => {
    const referencia = document.getElementById("melate-chocolate");
    referencia.innerHTML = `${numeros.join(' - ')}`;
};

const generarNumeroAleatorio = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const elNumeroExisteEnArreglo = (arreglo, numero) => {
    return arreglo.includes(numero);
};

const generarNumerosDeLaSuerte = (size = 6, minNum = 1, maxNum = 54) => {
    const numeros = [];
    let iteracion = 0;
    while (numeros.length < size) {
        const numAleatorio = generarNumeroAleatorio(minNum, maxNum);
        if (!elNumeroExisteEnArreglo(numeros, numAleatorio)) {
            numeros.push(numAleatorio);
        }
        iteracion++;
        console.log("Iteración:", iteracion);
    }
    imprimirMelateChocolate(numeros);
};
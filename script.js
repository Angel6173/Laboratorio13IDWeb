function ejercicio3() {
    let numeros = [];
    let continuar = true;
    while (continuar) {
        let entrada = prompt("Ingrese un número (o escriba 'no' para terminar):");
        if (!entrada) continue;
        if (entrada.toLowerCase() === "no") {
            continuar = false;
        } else {
            let num = parseFloat(entrada);
            if (!isNaN(num)) {
                numeros.push(num);
            } else {
                alert("Por favor, ingrese un número válido.");
            }
        }
    }
    if (numeros.length === 0) {
        alert("No ingresaste números.");
        return;
    }
    let resultado = doblarNumeros(numeros);
    alert("Números originales: " + numeros.join(", ") + "\nNúmeros doblados: " + resultado.join(", "));
}
function doblarNumeros(arreglo) {
    let nuevoArreglo = [];
    for (let i = 0; i < arreglo.length; i++) {
        nuevoArreglo.push(arreglo[i] * 2);
    }
    return nuevoArreglo;
}
function ejercicio4() {
    let numeros = [];
    let continuar = true;
    while (continuar) {
        let entrada = prompt("Ingrese un número (o escriba 'no' para terminar):");
        if (!entrada) continue;
        if (entrada.toLowerCase() === "no") {
            continuar = false;
        } else {
            let num = parseFloat(entrada);
            if (!isNaN(num)) {
                numeros.push(num);
            } else {
                alert("Por favor, ingrese un número válido.");
            }
        }
    }
    if (numeros.length === 0) {
        alert("No ingresaste números.");
        return;
    }
    let resultado = filtrarYTransformar(numeros);
    alert("La suma de los cuadrados de los números positivos es: " + resultado);
}
function filtrarYTransformar(arr) {
    let suma = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 0) {
            suma += arr[i] ** 2;
        }
    }
    return suma;
}
function ejercicio5() {
    let oracion = prompt("Ingrese una oración con palabras separadas por espacios:");
    if (!oracion || oracion.trim() === "") {
        alert("No ingresaste ninguna palabra.");
        return;
    }
    let resultado = reordenarPalabras(oracion);
    alert("Palabras ordenadas alfabéticamente en mayúsculas:\n" + resultado.join(", "));
}
function reordenarPalabras(oracion) {
    let palabras = oracion.split(" ");
    let mayusculas = [];
    for (let i = 0; i < palabras.length; i++) {
        mayusculas.push(palabras[i].toUpperCase());
    }
    mayusculas.sort();
    return mayusculas;
}

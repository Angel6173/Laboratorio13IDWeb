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
function ejercicio6(){
  let nombres = prompt("Ingrese nombres separados por comas:").split(",");
  let conjunto = new Set(nombres);
  let texto = "Nombres sin repetidos:\n";
  conjunto.forEach(function(nombre){
    texto += nombre.trim() + "\n";
  });
  alert(texto);
}

function ejercicio7(){
  function tieneDuplicados(arr){
    let conjunto = new Set(arr);
    return conjunto.size < arr.length;
  }
  let datos = prompt("Ingrese elementos separados por comas:").split(",");
  if(tieneDuplicados(datos)){
    alert("El arreglo tiene elementos duplicados.");
  } else {
    alert("El arreglo no tiene duplicados.");
  }
}

function ejercicio8(){
  let productos = new Map();
  let cantidad = Number(prompt("¿Cuántos productos desea agregar al Map?"));
  for(let i=0;i<cantidad;i++){
    let nombre = prompt("Nombre del producto " + (i+1) + ":");
    let precio = Number(prompt("Precio de " + nombre + ":"));
    productos.set(nombre, precio);
  }
  let lista = prompt("Ingrese los productos de su compra separados por comas:").split(",");
  let total = 0;
  for(let i=0;i<lista.length;i++){
    let p = lista[i].trim();
    if(productos.has(p)){
      total = total + productos.get(p);
    }
  }
  alert("El precio total de la compra es: " + total.toFixed(2));
}

function ejercicio9(){
  function contarPalabras(texto){
    let palabras = texto.toLowerCase().split(" ");
    let mapa = new Map();
    for(let i=0;i<palabras.length;i++){
      let p = palabras[i];
      if(mapa.has(p)){
        mapa.set(p, mapa.get(p)+1);
      } else {
        mapa.set(p,1);
      }
    }
    return mapa;
  }
  let texto = prompt("Ingrese un texto:");
  let resultado = contarPalabras(texto);
  let salida = "Conteo de palabras:\n";
  resultado.forEach(function(valor, clave){
    salida += clave + ": " + valor + "\n";
  });
  alert(salida);
}

function ejercicio10(){
  function invertirMap(mapa){
    let nuevo = new Map();
    mapa.forEach(function(valor, clave){
      nuevo.set(valor, clave);
    });
    return nuevo;
  }
  let capitales = new Map();
  capitales.set("Perú", "Lima");
  capitales.set("Chile", "Santiago");
  capitales.set("Argentina", "Buenos Aires");
  let invertido = invertirMap(capitales);
  let texto = "Mapa invertido:\n";
  invertido.forEach(function(valor, clave){
    texto += clave + " → " + valor + "\n";
  });
  alert(texto);
}

function ejercicio11(){
  let auto = {
    marca: prompt("Ingrese la marca del auto:"),
    modelo: prompt("Ingrese el modelo del auto:"),
    anio: prompt("Ingrese el año del auto:"),
    detalles: function(){
      return "Auto: " + this.marca + " " + this.modelo + " (" + this.anio + ")";
    }
  };
  alert(auto.detalles());
}

function ejercicio12(){
  function contarLetras(texto){
    let resultado = {};
    let letras = texto.toLowerCase();
    for(let i=0;i<letras.length;i++){
      let letra = letras[i];
      if(letra >= "a" && letra <= "z"){
        if(resultado[letra]){
          resultado[letra] = resultado[letra] + 1;
        } else {
          resultado[letra] = 1;
        }
      }
    }
    return resultado;
  }
  let texto = prompt("Ingrese una palabra o texto:");
  let conteo = contarLetras(texto);
  let salida = "Conteo de letras:\n";
  for(let letra in conteo){
    salida += letra + ": " + conteo[letra] + "\n";
  }
  alert(salida);
}

function ejercicio13(){
  function combinarCatalogos(tiendaA, tiendaB){
    let combinado = {};
    for(let producto in tiendaA){
      combinado[producto] = tiendaA[producto];
    }
    for(let producto in tiendaB){
      if(combinado[producto]){
        if(tiendaB[producto] < combinado[producto]){
          combinado[producto] = tiendaB[producto];
        }
      } else {
        combinado[producto] = tiendaB[producto];
      }
    }
    for(let p in combinado){
      combinado[p] = combinado[p].toFixed(2);
    }
    return combinado;
  }
  let tiendaA = { laptop: 3500.5, mouse: 100.35, teclado: 250.9 };
  let tiendaB = { mouse: 95.2, monitor: 720.457, teclado: 260.1 };
  let resultado = combinarCatalogos(tiendaA, tiendaB);
  let texto = "Catálogo combinado:\n";
  for(let prod in resultado){
    texto += prod + ": $" + resultado[prod] + "\n";
  }
  alert(texto);
}

function ejercicio14(){
  function gestionarEmpleados(empleados){
    let mapa = new Map();
    for(let i=0;i<empleados.length;i++){
      let e = empleados[i];
      if(!mapa.has(e.area)){
        mapa.set(e.area, { empleados: [], total: 0 });
      }
      let areaData = mapa.get(e.area);
      areaData.empleados.push(e.nombre);
      areaData.total = areaData.total + e.salario;
      mapa.set(e.area, areaData);
    }
    let resultado = {};
    mapa.forEach(function(valor, clave){
      let promedio = valor.total / valor.empleados.length;
      resultado[clave] = { empleados: valor.empleados, promedio: promedio };
    });
    return resultado;
  }

  let lista = [];
  let cantidad = Number(prompt("¿Cuántos empleados desea ingresar?"));
  for(let i=0;i<cantidad;i++){
    let nombre = prompt("Nombre del empleado " + (i+1) + ":");
    let area = prompt("Área del empleado:");
    let salario = Number(prompt("Salario del empleado:"));
    lista.push({id: i+1, nombre: nombre, area: area, salario: salario});
  }

  let datos = gestionarEmpleados(lista);
  let texto = "Resumen de empleados por área:\n";
  for(let area in datos){
    texto += "\nÁrea: " + area + "\nEmpleados: " + datos[area].empleados.join(", ") +
             "\nPromedio: " + datos[area].promedio + "\n";
  }
  alert(texto);
}


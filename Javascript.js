//Para comparar una expresión y llamar una función
let operator = 1;
operator == 1 && doSomething();

function doSomething() {
	console.log('hola');
}

//Operador terceario o if/else reducido
//Si se cumple "operator == 1" myValue será 10, caso contrario será 20
let operator = 1;
let myValue = operator == 1 ? 10 : 20;

//Forma rápida de transformar un numero en string a number
var number = "42";
var myNumber = +number; //Resultado: 42 y NO "42"

//Función Map para recorrer objetos y manipularlo
const array = [1,2,3,4,5,6];
const square = x => Math.pow(x, 2);
const squares = array.map(square);
console.log(`Array original: ${array}`);
console.log(`Array raíz: ${squares}`);

//Funcion filter para filtrar objetos en base a una condición
const array = [1,2,3,4,5,6];
const even = x => x % 2 === 0;
const even_array = array.filter(even);
console.log(`Even numbers in array ${array}: ${even_array}`);

//Formatear precios con puntos
monto.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
// PreEntrega2 Javascript Manzotti

//uso de Objeto - Class y Constructores - mostrado por consola
//registro de datos de usuario

class Usuario {
    constructor (nombre, edad, pais) {
        this.nombre = nombre;
        this.edad = edad;
        this.pais = pais;
    }
}

const usuario1 = new Usuario (prompt("ingrese su nombre"), prompt("ingrese su edad"), prompt("ingrese su pais"))

console.log (usuario1)

//Uso de Arrays - mostrado por Consola
//lista de compras de supermercado

const listaDeSuper = ["leche", "queso", "frutas", "verduras", "carnes", "mermelada", "manteca", "galletitas", "café", "cacao", "azúcar"]

let ultimoElemento= listaDeSuper.length - 1

console.log(listaDeSuper)

console.log(ultimoElemento)

listaDeSuper.forEach(element => console.log(element));

//Uso de FILTER con array - mostrado por consola
//filtrar productos de verduleria
let verduleria = ['frutas', 'verduras'];

function filterItems(query) {
    return verduleria.filter(function(el) {
        return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
        })
    }

console.log(filterItems('fr')); 
console.log(filterItems('ver')); 

//USO de FIND con array - mostrado por consola
//encontrar frutas, verduras

let frutasVerduras = ["frutas", "verduras"];

const index = frutasVerduras.findIndex(fruit => fruit === "frutas");

console.log(frutasVerduras[index]); 

//uso de FUNCION
//función notificar fecha y hora

function fechaYHora (){
    alert("Hoy es: " + Date ())
}

fechaYHora ()

//uso de CONDICIONAL
//ingresar día del mes para recordar pagos, ahorro o inversión

let day = parseInt(prompt("Ingrese día del mes en números"))

if (day < 10){
    alert ("IMPORTANTE! recuerde abonar impuestos y gastos fijos del mes")
} else if (day < 20){
    alert ("Recuerde ahorrar el 10% de su sueldo")
} else {
    alert ("Recuerde invertir el dinero restante de su sueldo")
}

//uso de FUNCION
//simulador de ahorros por mes

let money = parseInt(prompt("ingrese el monto que quiere ahorrar por mes"));
let months = parseInt(prompt("ingrese el número de meses"));
let resultado = 0;

function ahorro (){
    resultado = money * months;
}

function mensaje (){
    alert("Su ahorro TOTAL es de $" + resultado)
}

ahorro ()
mensaje ()

//Uso de WHILE - se muestra por consola
// Asesoría gratuita a 3 personas 

let asesoria = 1
while(asesoria <= 5){
    console.log("¡Gracias por solicitar su asesoría gratuita! Ud recibió la promo número: " + asesoria)
    asesoria++
}

console.log(asesoria)

//Botón enviar Form contacto con EVENTS
//event "click"

const boton = document.getElementById ("botonEnviar");

boton.addEventListener("click", () => {
    console.log("Se apretó el botón")
});

function callbackClick () {
    console.log("Se apretó el botón")
}

//events "mouseover" y "mouseout"
const hoverBoton = document.getElementById ("botonEnviar");

hoverBoton.addEventListener("mouseover", () => {
    hoverBoton.style.backgroundColor = "red"
})

hoverBoton.addEventListener("mouseout", () => {
    hoverBoton.style.backgroundColor = "black"
})
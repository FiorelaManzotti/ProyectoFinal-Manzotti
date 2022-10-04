// iniciando proyecto para preEntrega1 Javascript Manzotti

//uso de WHILE
//saludo de bienvenida

while( !(input = prompt('¿Cómo te llamas?')) ){
    alert("No recibimos la información.")
}

alert("¡Bienvenid@ " + input + " a nuestra página!") 

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
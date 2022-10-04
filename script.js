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
    alert ("Ahora sí puede invertir el saldo de su sueldo")
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
    alert("Su ahorro es de $" + resultado)
}

ahorro ()
mensaje ()


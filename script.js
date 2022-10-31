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

//INICIO LISTA SUPERMERCADO

function guardarProductoEnLocalStorage (producto) {

    // Traigo en localStorage
    const productosEnLS = localStorage.getItem("productos");

    if(productosEnLS !== null) {

        // Parseo lo que tengo en localStorage
        const productos = JSON.parse(productosEnLS);

        // Encuentro el índice en donde se encuentra el elemento a buscar
        const indiceProductoEncontrado = productos.findIndex( (elemento) => {
            return elemento.nombre === producto.nombre;
        });

        // Utilizo el índice buscado para pisar el stock por el que tiene el nuevo producto
        productos[indiceProductoEncontrado].stock = producto.stock;

        // Vuelvo a cambiar el localStorage
        localStorage.setItem("productos", JSON.stringify(productos));

        // Renderizar tabla
        renderizarTabla(productos);
    }
}

function renderizarTabla (productos) {

    const bodyTabla = document.getElementById("body_productos");

    // Limpio body de la tabla
    bodyTabla.innerHTML = "";

    for(const producto of productos) {

        // Creo la fila
        const tr = document.createElement("tr");

        // Columna nombre
        const td1 = document.createElement("td");
        td1.innerText = producto.nombre;

        // Columna stock
        const td2 = document.createElement("td");
        td2.innerText = producto.stock;

        // Columna acciones
        const td3 = document.createElement("td");

        // Creo los botones
        const botonSumarStock = document.createElement("button");
        botonSumarStock.innerText = "+";
        const botonRestarStock = document.createElement("button");
        botonRestarStock.innerText = "-";

        // Agregar eventos del botón
        botonSumarStock.addEventListener("click", () => {
            producto.stock += 1;

            guardarProductoEnLocalStorage(producto);
        });

        botonRestarStock.addEventListener("click", () => {
            producto.stock -= 1;

            guardarProductoEnLocalStorage(producto);
        });

        // Agregar botones a la columna "Acciones"
        td3.append(botonSumarStock);
        td3.append(botonRestarStock);

        tr.append(td1);
        tr.append(td2);
        tr.append(td3);

        // Agregar tr al body
        bodyTabla.append(tr);
    }

}

let productos = [];

// Chequeo si tengo productos en localStorage
const productosStorage = localStorage.getItem("productos");

if(productosStorage !== null) {
    productos = JSON.parse(productosStorage);
}

// Detectamos evento SUBMIT de formulario
const formularioAgregarProducto = document.getElementById("formulario_agregar_producto");
formularioAgregarProducto.addEventListener("submit", (e) => {

    e.preventDefault();

    // Obtengo nombre y stock
    const inputNombreProducto = document.getElementById("nombre_producto");
    const inputStockProducto = document.getElementById("stock_producto");

    const nombreProducto = inputNombreProducto.value;
    const stockProducto = inputStockProducto.value;

    // Limpiar inputs
    inputNombreProducto.value = "";
    inputStockProducto.value = "";

    // Agrego producto al array y luego al localStorage
    productos.push({
        nombre: nombreProducto,
        stock: parseInt(stockProducto),
    });

    localStorage.setItem("productos", JSON.stringify(productos));

    // Renderizar tabla
    renderizarTabla(productos);
});

// Renderizar los productos por primera vez
renderizarTabla(productos);

//FIN LISTA SUPER

//Botón enviar Form contacto con EVENTS
//EVENTO DE MOUSE "click"

const boton = document.getElementById ("botonEnviar");

boton.addEventListener("click", () => {
    console.log("Se apretó el botón")
});

function callbackClick () {
    console.log("Se apretó el botón")
}

//EVENTO DE MOUSE "mouseover" y "mouseout"
const hoverBoton = document.getElementById ("botonEnviar");

hoverBoton.addEventListener("mouseover", () => {
    hoverBoton.style.backgroundColor = "red"
})

hoverBoton.addEventListener("mouseout", () => {
    hoverBoton.style.backgroundColor = "black"
})

//Recarga FORMULARIO usando EVENT-TARGET-SUBMIT

const nombreApellido = document.getElementById("nombreApellido");
const mail = document.getElementById("mail");
const tipoConsulta = document.getElementById("tipoConsulta");
const textoMensaje = document.getElementById("textoMensaje");
const contacto = document.getElementById("contacto");

contacto.addEventListener("submit", (event) => {

    event.preventDefault();
    const target = event.target;

    nombreApellido.value = "";
    mail.value = "";
    tipoConsulta.value = "";
    textoMensaje.value = "";

console.log("SE ENVIÓ EL FORMULARIO");

});

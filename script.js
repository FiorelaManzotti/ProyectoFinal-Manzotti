// PreEntrega2 Javascript Manzotti

//uso de Objeto - Class y Constructores - mostrado por consola
//registro de datos de usuario

/* class Usuario {
    constructor (nombre, edad, pais) {
        this.nombre = nombre;
        this.edad = edad;
        this.pais = pais;
    }
}

const usuario1 = new Usuario (prompt("ingrese su nombre"), prompt("ingrese su edad"), prompt("ingrese su pais"))

console.log (usuario1) */

//Uso de Arrays - mostrado por Consola
//lista de compras de supermercado

/* const listaDeSuper = ["leche", "queso", "frutas", "verduras", "carnes", "mermelada", "manteca", "galletitas", "café", "cacao", "azúcar"]

let ultimoElemento= listaDeSuper.length - 1

console.log(listaDeSuper)

console.log(ultimoElemento)

listaDeSuper.forEach(element => console.log(element)); */

//Uso de FILTER con array - mostrado por consola
//filtrar productos de verduleria
/* let verduleria = ['frutas', 'verduras'];

function filterItems(query) {
    return verduleria.filter(function(el) {
        return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
        })
    }

console.log(filterItems('fr')); 
console.log(filterItems('ver')); 
 */
//USO de FIND con array - mostrado por consola
//encontrar frutas, verduras

/* let frutasVerduras = ["frutas", "verduras"];

const index = frutasVerduras.findIndex(fruit => fruit === "frutas");

console.log(frutasVerduras[index]);  */

//uso de FUNCION
//función notificar fecha y hora

/* function fechaYHora (){
    alert("Hoy es: " + Date ())
}

fechaYHora () */

//uso de CONDICIONAL
//ingresar día del mes para recordar pagos, ahorro o inversión

/* let day = parseInt(prompt("Ingrese día del mes en números"))

if (day < 10){
    alert ("IMPORTANTE! recuerde abonar impuestos y gastos fijos del mes")
} else if (day < 20){
    alert ("Recuerde ahorrar el 10% de su sueldo")
} else {
    alert ("Recuerde invertir el dinero restante de su sueldo")
} */

//uso de FUNCION
//simulador de ahorros por mes

/* let money = parseInt(prompt("ingrese el monto que quiere ahorrar por mes"));
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
 */
//Uso de WHILE - se muestra por consola
// Asesoría gratuita a 3 personas 

/* let asesoria = 1
while(asesoria <= 5){
    console.log("¡Gracias por solicitar su asesoría gratuita! Ud recibió la promo número: " + asesoria)
    asesoria++
}

console.log(asesoria) */

//INICIO AGENDA

let events = [];
let arr = [];

const eventName = document.querySelector("#eventName");
const eventDate = document.querySelector("#eventDate");
const buttonAdd = document.querySelector("#buttonAdd");
const eventsContainer = document.querySelector("#eventsContainer");

const json = load();

try {
    arr = JSON.parse(json);
} catch (error) {
    arr = [];
}
events = arr ? [...arr] : [];

renderEvents();

document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    addEvent();
});

buttonAdd.addEventListener("click", (e) => {
    e.preventDefault();
    addEvent();
});

function addEvent(){
    if (eventName.value === "" || eventDate.value === ""){
        return;
    }
    if (dateDiff(eventDate.value) < 0){
        return;
    }
    const newEvent = {
        id: (Math.random() * 100).toString(36).slice(3),
        name: eventName.value,
        date: eventDate.value,
    };

    events.unshift(newEvent);

    save(JSON.stringify(events));

    eventName.value = "";

    renderEvents();
}

function dateDiff(d){
    const targetDate = new Date (d);
    const today = new Date ();
    const difference = targetDate.getTime() - today.getTime();
    const days = Math.ceil(difference / (1000 * 3600 * 24));
    return days;
}

function renderEvents(){
    const eventsHTML = events.map(event => {
        return `
            <div class="event">
                <div class="days">
                    <span class="daysNumber">${dateDiff(event.date)}</span>
                    <span class="daysText">days</span>
                </div>

                <div class="eventName">${event.name}</div>
                <div class="eventDate">${event.date}</div>
                <div class="actions">
                    <button class="buttonDelete" data-id="${event.id}">Delete</button>
                </div>
            </div>
        `;
    });
    eventsContainer.innerHTML = eventsHTML.join("");
    document.querySelectorAll('.buttonDelete').forEach(button => {
        button.addEventListener('click', e => {
            const id = button.getAttribute('data-id');
            events = events.filter(event => event.id !== id);

            save(JSON.stringify(events));

            renderEvents();
        });
    });
}

function save (data){
    localStorage.setItem('items', data);
}

function load (){
    return localStorage.getItem("items");
}


//FIN AGENDA

//INICIO LISTA SUPER

/* //Usando Local Storage
function guardarProductoEnLocalStorage (producto) {

    const productosEnLS = localStorage.getItem("productos");

    if(productosEnLS !== null) {

        const productos = JSON.parse(productosEnLS);

        const indiceProductoEncontrado = productos.findIndex( (elemento) => {
            return elemento.nombre === producto.nombre;
        });

        productos[indiceProductoEncontrado].stock = producto.stock;

        localStorage.setItem("productos", JSON.stringify(productos));

        // Renderizar tabla
        renderizarTabla(productos);
    }
}

function renderizarTabla (productos) {

    const bodyTabla = document.getElementById("bodyProductos");

    bodyTabla.innerHTML = "";

    for(const producto of productos) {

        // Creo la tabla
        const tr = document.createElement("tr");

        const td1 = document.createElement("td");
        td1.innerText = producto.nombre;

        const td2 = document.createElement("td");
        td2.innerText = producto.cantidad;

        const td3 = document.createElement("td");

        // Creo los botones
        const botonSumarCantidad = document.createElement("button");
        botonSumarCantidad.innerText = "+";
        const botonRestarCantidad = document.createElement("button");
        botonRestarCantidad.innerText = "-";

        botonSumarCantidad.addEventListener("click", () => {
            producto.cantidad += 1;

            guardarProductoEnLocalStorage(producto);
        });

        botonRestarCantidad.addEventListener("click", () => {
            producto.cantidad -= 1;

            guardarProductoEnLocalStorage(producto);
        });

        // Agregar botones a la columna "Acciones"
        td3.append(botonSumarCantidad);
        td3.append(botonRestarCantidad);

        tr.append(td1);
        tr.append(td2);
        tr.append(td3);

        // Agregar tr al body
        bodyTabla.append(tr);
    }

}

let productos = [];

const productosStorage = localStorage.getItem("productos");

if(productosStorage !== null) {
    productos = JSON.parse(productosStorage);
}

// evento SUBMIT
const formularioSupermercado = document.getElementById("formularioSupermercado");
formularioSupermercado.addEventListener("submit", (e) => {

    e.preventDefault();

    const inputNombreProducto = document.getElementById("nombreProducto");
    const inputCantidadProducto = document.getElementById("cantidadProducto");

    const nombreProductos = inputNombreProducto.value;
    const cantidadProductos = inputCantidadProducto.value;

    inputNombreProducto.value = "";
    inputCantidadProducto.value = "";

    // Agrego producto al array y luego al localStorage
    productos.push({
        nombre: nombreProductos,
        cantidad: parseInt(cantidadProductos),
    });

    localStorage.setItem("productos", JSON.stringify(productos));

    // Renderizar tabla
    renderizarTabla(productos);
});

// Renderizar los productos por primera vez
renderizarTabla(productos); */

//FIN LISTA SUPER




























































//INICIO FORM DE CONTACTO

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

})


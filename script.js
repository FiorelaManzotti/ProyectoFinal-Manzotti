// PreEntrega3 Javascript Manzotti

//INICIO AGENDA

let events = [];
let arr = [];

//uso de querySelectors

const eventName = document.querySelector("#eventName");
const eventDate = document.querySelector("#eventDate");
const buttonAdd = document.querySelector("#buttonAdd");
const eventsContainer = document.querySelector("#eventsContainer");

//usando JSON
const json = load();

try {
    arr = JSON.parse(json);
} catch (error) {
    arr = [];
}
events = arr ? [...arr] : [];

renderEvents();

//usando EventListeners

document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    addEvent();
});

buttonAdd.addEventListener("click", (e) => {
    e.preventDefault();
    addEvent();
});

//funcion para agregar eventos

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

//funcion para calcular cuenta regresiva

function dateDiff(d){
    const targetDate = new Date (d);
    const today = new Date ();
    const difference = targetDate.getTime() - today.getTime();
    const days = Math.ceil(difference / (1000 * 3600 * 24));
    return days;
}

//usando PLANTILLA LITERALS
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

    //Modificando NODO con DOM y usando querySelectorAll

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

//usando LOCAL STORAGE - CLAVE/VALOR

function save (data){
    localStorage.setItem('items', data);
}

function load (){
    return localStorage.getItem("items");
}

//FIN AGENDA

//INICIO WEATHER CHANNEL

function cargarCiudad(ciudad) {
    $.getJSON(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=95176c8edea30e33338e0eaddd53a916&units=metric&lang=es`, function(data){
        document.querySelector("#ciudad").textContent = data.name
        document.querySelector("#temperatura").textContent = (Math.round((data.main.temp)*10))/10
        document.querySelector("#temperatura").innerHTML += "<sup>°C</sup>"
        document.querySelector("#wicon").src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`
        document.querySelector("#descripcion").textContent = data.weather[0].description
        document.querySelector(".container").style.visibility = "visible"
        console.dir(data)
    })
    .fail(function() {
        alert("Ciudad no encontrada");
    })
}
document.querySelector("button").addEventListener("click", function () {
    if (!document.querySelector("input").value) {
        alert("Debe ingresar una ciudad") 
    } else {
        let ciudad = document.querySelector("input").value.split(" ").join("%20")
        document.querySelector("input").value = ""
        cargarCiudad(ciudad)
    }
})
document.body.addEventListener("keydown", function (info) {
    if (info.key === "Enter") {
        if (!document.querySelector("input").value) {
            alert("Debe ingresar una ciudad") 
        } else {
            let ciudad = document.querySelector("input").value.split(" ").join("%20")
            document.querySelector("input").value = ""
            cargarCiudad(ciudad)
        }
    }
})

//FIN WEATHER CHANNEL

//INICIO FORM DE CONTACTO

//Botón enviar Form contacto con EVENTS y accediendo a NODOS con DOM
//EVENTO DE MOUSE "click"

const boton = document.getElementById ("botonEnviar");

boton.addEventListener("click", () => {
    console.log("Se apretó el botón")
});

function callbackClick () {
    console.log("Se apretó el botón")
}

//EVENTO DE MOUSE "mouseover" y "mouseout" y accediendo a NODOS con DOM
const hoverBoton = document.getElementById ("botonEnviar");

hoverBoton.addEventListener("mouseover", () => {
    hoverBoton.style.backgroundColor = "red"
})

hoverBoton.addEventListener("mouseout", () => {
    hoverBoton.style.backgroundColor = "black"
})

//Recarga FORMULARIO usando EVENT-TARGET-SUBMIT
//accediendo a NODOS con DOM

const nombreApellido = document.getElementById("nombreApellido");
const mail = document.getElementById("mail");
const tipoConsulta = document.getElementById("tipoConsulta");
const textoMensaje = document.getElementById("textoMensaje");
const contacto = document.getElementById("contacto");

//usando evento SUBMIT

contacto.addEventListener("submit", (event) => {

    event.preventDefault();
    const target = event.target;

    nombreApellido.value = "";
    mail.value = "";
    tipoConsulta.value = "";
    textoMensaje.value = "";

console.log("SE ENVIÓ EL FORMULARIO");

})

//FIN FORM DE CONTACTO

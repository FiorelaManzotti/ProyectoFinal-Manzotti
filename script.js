// PreEntrega3 Javascript Manzotti

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

//INICIO FORM DE CONTACTO

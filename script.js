// PreEntrega3 Javascript Manzotti

//INICIO AGENDA

let events = [];
let arr = [];

//uso de querySelectors

const eventName = document.querySelector("#eventName");
const eventDate = document.querySelector("#eventDate");
const buttonAdd = document.querySelector("#buttonAdd");
const eventsContainer = document.querySelector("#eventsContainer");

//usando JSON y Operador Ternario
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

//funcion para agregar eventos y operador lógico or

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

            const swalWithBootstrapButtons = Swal.mixin({
                customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
                },
                buttonsStyling: false
            })
            
            swalWithBootstrapButtons.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, delete it!',
                cancelButtonText: 'No, cancel!',
                reverseButtons: true
            }).then((result) => {
                if (result.isConfirmed) {
                swalWithBootstrapButtons.fire(
                    'Deleted!',
                    'Your task has been deleted.',
                    'success'
                    )
                    save(JSON.stringify(events));
                    renderEvents();
                } else if (
                result.dismiss === Swal.DismissReason.cancel
                ) {
                swalWithBootstrapButtons.fire(
                    'Cancelled',
                    'Your info is safe :)',
                    'error'
                    )
                }
            })
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

//usando AJAX y JSON - API externa
//Funcion ingresar ciudad para ver el clima
function enterCity(city) {
    $.getJSON(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=95176c8edea30e33338e0eaddd53a916&units=metric&lang=es`, function(data){
        document.querySelector("#city").textContent = data.name
        document.querySelector("#temperature").textContent = (Math.round((data.main.temp)*10))/10
        document.querySelector("#temperature").innerHTML += "<sup>°C</sup>"
        document.querySelector("#wicon").src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`
        document.querySelector("#description").textContent = data.weather[0].description
        document.querySelector(".containerWeather").style.visibility = "visible"
        console.dir(data)
    })
    //Uso Sweet Alert
    .fail(function() {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'City Not Found!',
        });
    })
}
document.querySelector("#buttonWeather").addEventListener("click", function () {
    if (!document.querySelector("#inputWeather").value) {
        //uso de Sweet Alert
        Swal.fire({
            icon: 'warning',
            title: 'Oops...',
            text: 'Must Enter a City',
        })
    } else {
        let city = document.querySelector("#inputWeather").value.split(" ").join("%20")
        document.querySelector("#inputWeather").value = ""
        enterCity(city)
    }
})
document.body.addEventListener("keydown", function (info) {
    if (info.key === "Enter") {
        if (!document.querySelector("inputWeather").value) {
            alert("Must enter a city") 
        } else {
            let city = document.querySelector("inputWeather").value.split(" ").join("%20")
            document.querySelector("inputWeather").value = ""
            enterCity(city)
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
    hoverBoton.style.backgroundColor = "darkgreen"
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

    //uso Libreria Sweet Alert
Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Your message has been sent',
    showConfirmButton: false,
    timer: 3000
    })

})

//FIN FORM DE CONTACTO

/* fetch('https://api.github.com/users/manishmshiva', {
    method: "GET",
    headers: {"Content-type": "application/json;charset=UTF-8"}
})
.then(response => response.json()) 
.then(json => console.log(json));  */

fetch('www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
    .then(response => response.text())
    .then(data => console.log(data));


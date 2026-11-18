// ==============================================================
// ARCHIVO: reservas.js
// Funcionalidad: Procesamiento y validación del formulario de reservas
// Materia: Recursos Informáticos y Multimediales
// Profesor: Joaquín Molinos
// ==============================================================

// Función tradicional para procesar y enviar la reserva por WhatsApp
function enviarReserva() {
    // Variables para obtener los valores ingresados por el usuario
    var nombre = document.getElementById("res-nombre").value;
    var tel = document.getElementById("res-telefono").value;
    var fecha = document.getElementById("res-fecha").value;
    var hora = document.getElementById("res-hora").value;
    var personas = document.getElementById("res-personas").value;
    var sector = document.getElementById("res-sector").value;
    var mensaje = document.getElementById("res-mensaje").value;

    // Validación con condicional if para comprobar campos obligatorios
    if (nombre === "" || tel === "" || fecha === "" || hora === "") {
        alert("Por favor completá tu nombre, teléfono, fecha y horario para la reserva.");
        return;
    }

    // Construcción del texto a enviar
    var texto = "¡Hola Mi Pantano! 🧌 Quisiera hacer una reserva:%0A%0A" +
                "• *Nombre:* " + encodeURIComponent(nombre) + "%0A" +
                "• *Teléfono:* " + encodeURIComponent(tel) + "%0A" +
                "• *Fecha:* " + encodeURIComponent(fecha) + "%0A" +
                "• *Horario:* " + encodeURIComponent(hora) + "%0A" +
                "• *Comensales:* " + encodeURIComponent(personas) + "%0A" +
                "• *Sector:* " + encodeURIComponent(sector);

    if (mensaje !== "") {
        texto += "%0A• *Comentarios:* " + encodeURIComponent(mensaje);
    }

    console.log("Enviando reserva a WhatsApp para:", nombre);
    window.open("https://wa.me/5491161159802?text=" + texto, "_blank");
}

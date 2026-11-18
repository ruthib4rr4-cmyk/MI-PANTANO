// ==============================================================
// ARCHIVO: contacto.js
// Funcionalidad: Procesamiento y validación del formulario de contacto
// Materia: Recursos Informáticos y Multimediales
// Profesor: Joaquín Molinos
// ==============================================================

// Función tradicional para armar y enviar la consulta por WhatsApp
function enviarConsulta() {
    // Variables para almacenar los datos ingresados
    var nombre = document.getElementById("con-nombre").value;
    var tel = document.getElementById("con-telefono").value;
    var asunto = document.getElementById("con-asunto").value;
    var mensaje = document.getElementById("con-mensaje").value;

    // Validación con condicional if para campos obligatorios
    if (nombre === "" || mensaje === "") {
        alert("Por favor completá tu nombre y el mensaje antes de enviar.");
        return;
    }

    // Construcción del mensaje para WhatsApp
    var texto = "¡Hola Mi Pantano! 🧌 Tengo una consulta:%0A%0A" +
                "• *Nombre:* " + encodeURIComponent(nombre) + "%0A";

    if (tel !== "") {
        texto += "• *Teléfono:* " + encodeURIComponent(tel) + "%0A";
    }

    texto += "• *Motivo:* " + encodeURIComponent(asunto) + "%0A" +
             "• *Mensaje:* " + encodeURIComponent(mensaje);

    console.log("Enviando consulta a WhatsApp de:", nombre);
    window.open("https://wa.me/5491161159802?text=" + texto, "_blank");
}

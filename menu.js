// ==============================================================
// ARCHIVO: menu.js
// Funcionalidad: Abrir y cerrar el menú de navegación en celulares
// Materia: Recursos Informáticos y Multimediales
// Profesor: Joaquín Molinos
// ==============================================================

// Función tradicional para alternar el menú móvil
function alternarMenu() {
    // Obtenemos el elemento nav por su ID
    var menu = document.getElementById("menu-navegacion");

    // Condicional if / else para comprobar y alternar la clase
    if (menu.className === "abierto") {
        menu.className = "";
    } else {
        menu.className = "abierto";
    }

    // Comprobamos el estado en consola
    console.log("Estado del menú:", menu.className);
}

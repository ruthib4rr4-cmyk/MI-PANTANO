// ==============================================================
// ARCHIVO: frases.js
// Funcionalidad: Frases aleatorias de Shrek y sus amigos
// Materia: Recursos Informáticos y Multimediales
// Profesor: Joaquín Molinos
// ==============================================================

// 1. Array que guarda objetos con las frases de los personajes
const frasesDelPantano = [
    { texto: "¡Mejor afuera que adentro, siempre digo!", autor: "Shrek" },
    { texto: "¡Los ogros son como cebollas! ¡Tienen capas!", autor: "Shrek" },
    { texto: "En la mañana, ¡yo preparo los waffles!", autor: "Burro" },
    { texto: "¿Ya merito llegamos? ¿Ya merito?", autor: "Burro" },
    { texto: "De noche soy una y de día otra... esa es mi verdad.", autor: "Fiona" },
    { texto: "No estoy loco, ¡solo soy un ogro que busca tranquilidad!", autor: "Shrek" },
    { texto: "¡Cuidado con la dragona, que tiene debilidad por los burros!", autor: "Burro" },
    { texto: "¡Bienvenidos a Duloc, un lugar perfecto!", autor: "Lord Farquaad" }
];

// 2. Función tradicional para elegir una frase al azar y mostrarla en pantalla
function mostrarFraseAleatoria() {
    // Generamos un número entero aleatorio entre 0 y el total de frases menos 1
    var posicionAleatoria = Math.floor(Math.random() * frasesDelPantano.length);

    // Guardamos el objeto correspondiente en una variable
    var fraseElegida = frasesDelPantano[posicionAleatoria];

    // Comprobamos el resultado en la consola del navegador
    console.log("Frase seleccionada:", fraseElegida.texto);

    // Modificamos el texto y autor en el HTML mediante innerHTML
    document.getElementById("texto-frase").innerHTML = '"' + fraseElegida.texto + '"';
    document.getElementById("autor-frase").innerHTML = "— " + fraseElegida.autor;
}

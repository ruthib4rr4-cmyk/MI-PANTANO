// Todas las páginas de platos usan la misma clave del navegador.
const claveCarrito = "mi-pantano-carrito";
let productosSeleccionados = [];
let almacenamientoDisponible = true;

function cargarCarrito() {
    if (!almacenamientoDisponible) {
        return;
    }

    try {
        // localStorage guarda texto. JSON.parse recupera el array.
        const guardado = localStorage.getItem(claveCarrito);
        const productos = JSON.parse(guardado);

        productosSeleccionados = [];
        if (Array.isArray(productos)) {
            for (let i = 0; i < productos.length; i++) {
                const producto = productos[i];
                if (producto && typeof producto.nombre === "string" &&
                    Number.isSafeInteger(producto.precio) && producto.precio > 0) {
                    productosSeleccionados.push(producto);
                }
            }
        }
    } catch (error) {
        // Si el navegador bloquea el almacenamiento, el carrito funciona en memoria.
        if (error instanceof SyntaxError) {
            productosSeleccionados = [];
        } else {
            almacenamientoDisponible = false;
        }
    }
}

function guardarCarrito() {
    if (!almacenamientoDisponible) {
        return;
    }

    try {
        localStorage.setItem(claveCarrito, JSON.stringify(productosSeleccionados));
    } catch {
        almacenamientoDisponible = false;
    }
}

function agregarProducto(idPlato, precio) {
    cargarCarrito();
    const nombre = document.getElementById(idPlato).textContent;
    productosSeleccionados.push({ nombre: nombre, precio: precio });
    guardarCarrito();
    mostrarCarrito();
}

function formatoPrecio(precio) {
    return "$ " + precio.toLocaleString("es-AR", { useGrouping: true });
}

function mostrarCarrito() {
    const lista = document.getElementById("productos-carrito");
    let total = 0;
    lista.textContent = "";

    // Creamos una fila por producto y sumamos los importes numéricos.
    for (let i = 0; i < productosSeleccionados.length; i++) {
        const producto = productosSeleccionados[i];
        const fila = document.createElement("li");
        fila.textContent = producto.nombre + " — " + formatoPrecio(producto.precio);
        lista.appendChild(fila);
        total += producto.precio;
    }

    if (productosSeleccionados.length === 0) {
        const fila = document.createElement("li");
        fila.textContent = "El carrito está vacío.";
        lista.appendChild(fila);
    }

    document.getElementById("total-carrito").textContent = formatoPrecio(total);
}

function vaciarCarrito() {
    productosSeleccionados = [];
    guardarCarrito();
    mostrarCarrito();
}

function actualizarCarrito() {
    cargarCarrito();
    mostrarCarrito();
}

// pageshow vuelve a leer el carrito al recargar o volver con Atrás o Adelante.
window.addEventListener("pageshow", actualizarCarrito);

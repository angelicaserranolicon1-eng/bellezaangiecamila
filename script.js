// Cambiar el contenido del párrafo al hacer clic
document.getElementById("cambiarTexto").addEventListener("click", function() {
    document.getElementById("miParrafo").textContent = "¡El texto ha cambiado!";
});

// Validación del formulario
document.getElementById("validarBtn").addEventListener("click", function() {
    const nombre = document.getElementById("nombre").value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa tu nombre.");
    } else {
        alert("¡Gracias, " + nombre + "! Tu mensaje ha sido enviado.");
    }
});



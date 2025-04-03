document.getElementById("BVer").addEventListener('click', function() {
    document.getElementById("resultado").style.display = "block";
})

document.getElementById("BotonCerrar").addEventListener('click', function() {
    document.getElementById("resultado").style.display = "none";
    document.querySelector(".Contenedor-Binicio").style.display = "none";
    document.querySelector(".Con-2").style.display = "block";
})

document.addEventListener("DOMContentLoaded", function() {
    const botonOculto = document.getElementById("botonOculto");
    const botonTocaAqui = document.getElementById("BVer"); // El botón "Toca aquí"

    // Agregar el evento de clic al botón "Toca aquí"
    botonTocaAqui.addEventListener('click', function() {
        // Ocultar el botón de la esquina ("Toca acá si me viste")
        botonOculto.style.display = "none";
    });
});



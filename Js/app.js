let Titulo = document.title;

window.addEventListener('blur', () => {
    Titulo = document.title;
    document.title = "No te vayas, regresa :(";
});

window.addEventListener('focus', () => {
    document.title = Titulo;
});

let h1 = document.getElementById("Titulo");
let Boton1 = document.getElementById("B1");
Boton1.addEventListener('click', function() {
    const ContenedorBotones = document.querySelector(".Con");
    document.querySelector(".Texto").style.display = "block";
    ContenedorBotones.style.display = "none";
    let videoDiv = document.getElementById("videoTikTok1");
    videoDiv.style.display = "block";
    DibujarFlor(canvas.width / 2, canvas.height / 2, 12, 60, 100, 300);
    h1.remove();
});

document.getElementById("B12").addEventListener('click', function() {
    const ContenedorBotones = document.querySelector(".Con");
    document.querySelector(".Texto").style.display = "block";
    ContenedorBotones.style.display = "none";
    let videoDiv12 = document.getElementById("videoTikTok12");
    videoDiv12.style.display = "block";
    CrearVarias();
    h1.remove();
});

const canvas = document.getElementById('Flor');
const ctx = canvas.getContext('2d');

function DibujarPetalo(x, y, RadioX, scala, Rotacion, color, pasos) {
    const Numero = scala;
    const AnguloIncrement = (Math.PI / pasos) * 2;

    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(Rotacion);
    ctx.scale(1, Numero);
    
    ctx.beginPath();
    for (let i = 0; i <= pasos; i++) {
        const AnguloActual = i * AnguloIncrement;
        const currentRadius = Math.sin(AnguloActual) * RadioX;
        const PuntoY = Math.sin(AnguloActual) * currentRadius;
        const PuntoX = Math.cos(AnguloActual) * currentRadius;
        if (i === 0) {
            ctx.moveTo(PuntoX, PuntoY);
        } else {
            ctx.lineTo(PuntoX, PuntoY);
        }
        ctx.strokeStyle = color;
        ctx.fillStyle = color;
        ctx.fill();
        ctx.stroke();
    }
    
    ctx.restore();
}

function DibujarFlor(x, y, NumeroPetalos, RadioXPetalo, RadioYPetalo, AltoTrazo, colorPetalos = 'white') {
    DibujarTallo(x, y, AltoTrazo);
    const AnguloIncrement = (Math.PI * 2) / NumeroPetalos;
    let contadorPetalos = 0;
    function dibujarSiguientePetalo() {
        if (contadorPetalos < NumeroPetalos) {
            const Angulo = contadorPetalos * AnguloIncrement;
            DibujarPetalo(x, y, RadioXPetalo, 2, Angulo, colorPetalos, 100);
            contadorPetalos++;
            setTimeout(dibujarSiguientePetalo, 150);
        } else {
            ctx.beginPath();
            ctx.arc(x, y, 15, 0, Math.PI * 2);
            ctx.fillStyle = 'yellow';
            ctx.fill();
        }
    }
    dibujarSiguientePetalo();
}

function DibujarTallo(x, y, AltoTrazo) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x, y + AltoTrazo);
    ctx.lineWidth = 4;
    ctx.strokeStyle = '#002d00';
    ctx.stroke();
}

function CrearVarias() {
    const numFlores = 12;
    const espacioX = canvas.width / 4;
    const espacioY = canvas.height / 3;
    const TamañoFlor = 130;

    for (let i = 0; i < numFlores; i++) {
        const fila = Math.floor(i / 4);
        const columna = i % 4;
        const x = espacioX * columna + espacioX / 2;
        const y = espacioY * fila + espacioY / 2;
        const colorPetalos = i % 2 === 0 ? 'white' : '#ffccdd'; // Alternar entre blanco y rosa claro
        DibujarFlor(x, y, 8, 30, 80, TamañoFlor, colorPetalos);
    }
}

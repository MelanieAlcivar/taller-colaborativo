// Archivo: app.js

// Arreglo inicial de frases
let frases = [
  "¡No te rindas! Cada día es una nueva oportunidad. 💪",
  "El café no resuelve problemas, pero te da energía ☕😂",
  "El éxito son pequeños esfuerzos repetidos cada día.✅",
  "Si la vida te da limones, haz limonada 🍋",
  "No cuentes los días, haz que los días cuenten.☀️"
];

//Contador de frases
let contador = 0;

//Colores para fondo aleatorio (solo en modo claro)
const colores = ["#f5f7fa", "#ffeaa7", "#fab1a0", "#a29bfe", "#81ecec", "#55efc4", "#fd79a8"];

/* PRESENTAR FRASE ALEATORIA */
function mostrarFrase() {
  const indice = Math.floor(Math.random() * frases.length);
  const fraseAleatoria = frases[indice];
  document.getElementById("frase").textContent = fraseAleatoria;
  //Si esta en modo claro, cambia color de fondo
  if (document.body.classList.contains("light")) {
    const color = colores[Math.floor(Math.random() * colores.length)];
    document.body.style.background = color;
  }

  //Incrementar contador
  contador++;
  document.getElementById("contador").textContent = `Frases mostradas: ${contador}`;
}

/* AGREGAR FRASES PERSONALIZADAS */
function agregarFrase() {
  const input = document.getElementById("nueva-frase");
  const nuevaFrase = input.value.trim();

  if (nuevaFrase !== "") {
    frases.push(nuevaFrase);
    alert("Frase agregada correctamente ✅");
    input.value = "";
  } else {
    alert("Por favor escribe una frase antes de agregar.");
  }
}

/* ALTERNAR MODO CLARO Y OSCURO */
function alternarTema() {
  const btn = document.getElementById("btn-tema");
  if (document.body.classList.contains("light")) {
    document.body.classList.remove("light");
    document.body.classList.add("dark");
    btn.textContent = "☀️ Modo Claro";
    //limpiar color aleatorio
    document.body.style.background = ""; 
  } else {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
    btn.textContent = "🌙 Modo Oscuro";
  }
}

/* EVENTOS */
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btn-frase").addEventListener("click", mostrarFrase);
  document.getElementById("btn-agregar").addEventListener("click", agregarFrase);
  document.getElementById("btn-tema").addEventListener("click", alternarTema);
});
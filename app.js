// app.js - Lógica de frases motivacionales
const frases = [
  "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
  "No podemos resolver nuestros problemas con el mismo razonamiento que usamos cuando los creamos. — Albert Einstein",
  "Nunca pares de aprender, la práctica hace al maestro.",
  "Si te caes 7 veces, levántate 8.",
  "El café es el mejor amigo de los programadores ☕"
];

// Mostrar frase aleatoria
function mostrarFrase() {
  const indice = Math.floor(Math.random() * frases.length);
  const contenedor = document.getElementById("frase");
  contenedor.textContent = frases[indice];
}



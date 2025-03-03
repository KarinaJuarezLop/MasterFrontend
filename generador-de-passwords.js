// Obtener elementos del DOM
const passwordDisplay = document.getElementById('password-display');
const lengthInput = document.getElementById('length');
const lengthValue = document.getElementById('length-value');
const uppercaseCheckbox = document.getElementById('uppercase');
const lowercaseCheckbox = document.getElementById('lowercase');
const numbersCheckbox = document.getElementById('numbers');
const symbolsCheckbox = document.getElementById('symbols');
const strengthDisplay = document.getElementById('strength');
const generateButton = document.getElementById('generate');
const copyButton = document.getElementById('copy-button');

// Función para generar la contraseña
function generarContraseña(longitud, incluirMayusculas, incluirMinusculas, incluirNumeros, incluirSimbolos) {
  let caracteres = "";
  if (incluirMayusculas) caracteres += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (incluirMinusculas) caracteres += "abcdefghijklmnopqrstuvwxyz";
  if (incluirNumeros) caracteres += "0123456789";
  if (incluirSimbolos) caracteres += "!@#$%^&*()_+~`|}{\:;?><,./-=";

  let contraseña = "";
  for (let i = 0; i < longitud; i++) {
    const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
    contraseña += caracteres.charAt(indiceAleatorio);
  }

  return contraseña;
}

// Función para actualizar la visualización
function actualizarVisualizacion() {
  const longitud = lengthInput.value;
  const incluirMayusculas = uppercaseCheckbox.checked;
  const incluirMinusculas = lowercaseCheckbox.checked;
  const incluirNumeros = numbersCheckbox.checked;
  const incluirSimbolos = symbolsCheckbox.checked;

  const contraseña = generarContraseña(longitud, incluirMayusculas, incluirMinusculas, incluirNumeros, incluirSimbolos);

  passwordDisplay.value = contraseña;
  lengthValue.textContent = longitud;
  // Aquí puedes agregar la lógica para actualizar el indicador de fuerza (strengthDisplay)
}

// Event listeners
generateButton.addEventListener('click', actualizarVisualizacion);
lengthInput.addEventListener('input', actualizarVisualizacion);
uppercaseCheckbox.addEventListener('change', actualizarVisualizacion);
lowercaseCheckbox.addEventListener('change', actualizarVisualizacion);
numbersCheckbox.addEventListener('change', actualizarVisualizacion);
symbolsCheckbox.addEventListener('change', actualizarVisualizacion);

// Copiar al portapapeles
copyButton.addEventListener('click', () => {
  navigator.clipboard.writeText(passwordDisplay.value)
    .then(() => {
      // Opcional: Mostrar un mensaje de éxito
      console.log("Contraseña copiada al portapapeles!");
    })
    .catch(err => {
      console.error("Error al copiar al portapapeles: ", err);
    });
});

// Inicializar la visualización
actualizarVisualizacion();
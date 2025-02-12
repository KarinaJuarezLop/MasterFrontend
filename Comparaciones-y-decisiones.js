// Declarar la variable llamada nota y asignarle un valor entre 0 y 100
var nota = prompt('Ingresa tu nota'); // Se puede cambiar este valor

// Verificar si la nota es un valor mayor que 0
if (nota >= 0 && nota <= 100) {
    // Si la nota es 90 o más, el estudiante aprueba con "Excelente".
    if (nota >= 90) {
        console.log("Excelente :D");
    // Si la nota está entre 75 y 89, el estudiante aprueba con "Bien".
    } else if (nota >= 75 && nota <= 89) {
        console.log("Bien :)");
    // Si la nota está entre 60 y 74, el estudiante aprueba con "Suficiente".
    } else if (nota >= 60 && nota <= 74) {
        console.log("Suficiente :/");
    // Si la nota es menor de 60, el estudiante no aprueba.
    } else {
        console.log("Estas reprobado :(");
    }
} else {
    console.log("Este valor no es válido. Debe estar entre 0 y 100.");
}
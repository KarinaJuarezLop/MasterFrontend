// Array para almacenar libros leídos
let librosLeidos = [];

// Función para agregar un libro al array
function agregarLibro(titulo) {
    librosLeidos.push(titulo);
}

// Función para mostrar todos los libros leídos
function mostrarLibrosLeidos() {
    console.log("Libros leídos:");
    for (let i = 0; i < librosLeidos.length; i++) {
        console.log(librosLeidos[i]);
    }
}

// Agregar libros que he leído
agregarLibro("Quien se ha llevado mi queso");
agregarLibro("El principito");
agregarLibro("El psicoanalista");
agregarLibro("La tregua");
agregarLibro("Jaque al psicoanalista");

// Mostrar libros leídos
mostrarLibrosLeidos();
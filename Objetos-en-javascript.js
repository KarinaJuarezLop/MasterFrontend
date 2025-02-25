// Crear el objeto libro
let libro = {
    titulo: "La tregua",
    autor: "Mario Benedetti",
    anio: 1960,
    estado: "disponible",
    capitulos: [],

    // describir el libro
    describirLibro: function() {
        console.log(`Libro titulado "${this.titulo}", escrito por ${this.autor} en el año ${this.anio}, el estado es: ${this.estado}.`);
    },

    // agregar un capítulo
    agregarCapitulo: function(capitulo) {
        this.capitulos.push(capitulo);
        console.log(`Capítulo "${capitulo}" agregado.`);
    },

    // mostrar la lista de capítulos
    mostrarCapitulos: function() {
        if (this.capitulos.length > 0) {
            console.log("Capítulos del libro:");
            this.capitulos.forEach((capitulo, index) => {
                console.log(`${index + 1}. ${capitulo}`);
            });
        } else {
            console.log("El libro no tiene capítulos aún.");
        }
    }
};

// Describir el libro
libro.describirLibro();

// Agregar algunos capítulos
libro.agregarCapitulo("Capítulo 1: El comienzo");
libro.agregarCapitulo("Capítulo 2: Los conflictos");
libro.agregarCapitulo("Capítulo 3: La resolución");

// Mostrar los capítulos
libro.mostrarCapitulos();
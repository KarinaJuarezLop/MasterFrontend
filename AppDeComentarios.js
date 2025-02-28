document.addEventListener('DOMContentLoaded', function() {
    console.log("Inicializando comentarios.");

    // Cargar comentarios guardados al cargar la página
    loadComments();

    document.getElementById('commentForm').addEventListener('submit', function(event) {
        event.preventDefault();

        // Obtener el comentario y el nombre del usuario
        let commentText = document.getElementById('commentInput').value;
        let userName = document.getElementById('nameInput').value; // Obtener el nombre

        console.log("Comentario enviado:", { userName, commentText });

        // Crear un nuevo elemento de comentario
        let commentDiv = createCommentElement(commentText, userName); // Pasar el nombre

        // Agregar el comentario al contenedor de comentarios
        document.getElementById('commentsContainer').appendChild(commentDiv);

        // Guardar comentarios en localStorage
        saveComments();

        // Limpiar el campo de texto
        document.getElementById('commentInput').value = '';
    });
});

function createCommentElement(commentText, userName) {
    // Crear un nuevo elemento de comentario
    let commentDiv = document.createElement('div');
    commentDiv.classList.add('comment');

    // Crear el párrafo para el nombre del usuario
    if (userName) { // Si hay un nombre, agregarlo
        let nameParagraph = document.createElement('p');
        nameParagraph.classList.add('name');
        nameParagraph.textContent = userName + ".";
        commentDiv.appendChild(nameParagraph);
    }

    // Crear el párrafo para el texto del comentario
    let commentParagraph = document.createElement('p');
    commentParagraph.textContent = commentText;

    // Crear el párrafo para la fecha y hora
    let dateParagraph = document.createElement('p');
    dateParagraph.classList.add('date');
    dateParagraph.textContent = new Date().toLocaleString();

    // Crear el botón de eliminar
    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Eliminar';
    deleteButton.addEventListener('click', function() {
        console.log("Comentario eliminado:", commentText);
        commentDiv.remove();
        saveComments(); // Actualizar localStorage al eliminar
    });

    // Agregar el texto, la fecha y el botón al comentario
    commentDiv.appendChild(commentParagraph);
    commentDiv.appendChild(dateParagraph);
    commentDiv.appendChild(deleteButton);

    return commentDiv;
}

function saveComments() {
    let comments = [];
    let commentElements = document.getElementById('commentsContainer').children;

    for (let commentElement of commentElements) {
        comments.push(commentElement.innerHTML);
    }

    localStorage.setItem('comments', JSON.stringify(comments));
    console.log("Comentarios guardados en localStorage:", comments);
}

function loadComments() {
    let comments = JSON.parse(localStorage.getItem('comments')) || [];
    let commentsContainer = document.getElementById('commentsContainer');

    console.log("Comentarios cargados desde localStorage:", comments);

    comments.forEach(commentHTML => {
        let commentDiv = document.createElement('div');
        commentDiv.classList.add('comment');
        commentDiv.innerHTML = commentHTML;
        commentsContainer.appendChild(commentDiv);

        // Re-attach event listener to delete buttons
        let deleteButton = commentDiv.querySelector('button');
        if (deleteButton) {
            deleteButton.addEventListener('click', function() {
                console.log("Comentario eliminado (cargado desde localStorage):", commentDiv.textContent);
                commentDiv.remove();
                saveComments();
            });
        }
    });
}
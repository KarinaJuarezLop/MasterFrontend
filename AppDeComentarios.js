document.getElementById('commentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener el valor del comentario
    let commentText = document.getElementById('commentInput').value;

    // Crear un nuevo elemento de comentario
    let commentDiv = document.createElement('div');
    commentDiv.classList.add('comment');

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
        commentDiv.remove();
    });

    // Agregar el texto, la fecha y el botón al comentario
    commentDiv.appendChild(commentParagraph);
    commentDiv.appendChild(dateParagraph);
    commentDiv.appendChild(deleteButton);

    // Agregar el comentario al contenedor de comentarios
    document.getElementById('commentsContainer').appendChild(commentDiv);

    // Limpiar el campo de texto
    document.getElementById('commentInput').value = '';
});
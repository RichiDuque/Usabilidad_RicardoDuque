var contrasteActivado = false;

    function contraste() {
        // Cambiar todos los componentes a colores más oscuros o restaurar a la normalidad
        if (!contrasteActivado) {
            // Modo contraste
            document.body.style.backgroundColor = '#333';  // Fondo oscuro
            document.body.style.color = '#fff';  // Texto blanco
            // Puedes agregar más estilos según tus necesidades
        } else {
            // Restaurar a la normalidad
            document.body.style.backgroundColor = '';  // Restaura el fondo a su valor predeterminado
            document.body.style.color = '';  // Restaura el color del texto a su valor predeterminado
            // Puedes agregar más estilos según tus necesidades
        }

        // Cambiar el estado del contraste
        contrasteActivado = !contrasteActivado;
    }

function aumentarTexto() {
    // Aumentar el tamaño del texto
    var elementosTexto = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, a, li, td, th');
    elementosTexto.forEach(function(elemento) {
        var fontSize = window.getComputedStyle(elemento, null).getPropertyValue('font-size');
        var fontSizeNum = parseFloat(fontSize);
        elemento.style.fontSize = (fontSizeNum * 1.2) + 'px';  // Aumentar en un 20%
    });
}

function disminuirTexto() {
    // Disminuir el tamaño del texto
    var elementosTexto = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, a, li, td, th');
    elementosTexto.forEach(function(elemento) {
        var fontSize = window.getComputedStyle(elemento, null).getPropertyValue('font-size');
        var fontSizeNum = parseFloat(fontSize);
        elemento.style.fontSize = (fontSizeNum * 0.8) + 'px';  // Disminuir en un 20%
    });
}
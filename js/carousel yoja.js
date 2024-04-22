// BOTONES Transparentes
$(document).ready(function() {
    $('.card').mouseenter(function() {
        $(this).animate({ opacity: 0.8 }, 'fast'); // Cambia la opacidad al 80% al pasar el cursor sobre el card
    }).mouseleave(function() {
        $(this).animate({ opacity: 1 }, 'fast'); // Restaura la opacidad al 100% al quitar el cursor del card
    });
});


// flechas slide- movimiento carousel CODIGO script

document.addEventListener('DOMContentLoaded', function () {
    // Obtener referencias a las flechas
    const flechaIzquierda = document.querySelector('.prev-button');
    const flechaDerecha = document.querySelector('.next-button');

    // Función para desplazar las ofertas a la izquierda
    flechaIzquierda.addEventListener('click', function () {
        document.getElementById('ofertas').scrollBy({
            left: -300,
            behavior: 'smooth'
        });
    });

    // Función para desplazar las ofertas a la derecha
    flechaDerecha.addEventListener('click', function () {
        document.getElementById('ofertas').scrollBy({
            left: 300,
            behavior: 'smooth'
        });
    });
});

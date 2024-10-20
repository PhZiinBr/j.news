$(document).ready(function() {
    $('.menu-hamburguer').click(function() {
        $('nav').toggleClass('open'); // Alterna a classe 'open'
        if ($('nav').hasClass('open')) {
            // Calcula a altura total do nav e define
            const fullHeight = $('nav')[0].scrollHeight + 'px';
            $('nav').css('height', fullHeight);
        } else {
            $('nav').css('height', '0'); // Colapsa
        }
    });
});
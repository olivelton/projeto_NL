$(document).ready(function () {
    $('.modal').modal();
    $('select').formSelect();
    M.updateTextFields();

    $('.sidenav').sidenav();

    // SIDENAV INIT
    $('.button-collapse').sidenav();

    $('.parallax').parallax();

    $('.slider').slider({
        indicators: false,
        // we don't want the little dots to show
        height: 500,
        transition: 500,
        interval: 4000
        // how long the slide stays for
    });

});

$(document).ready(function () {


    // M.textareaAutoResize($('#textarea-contato'));
    $('.modal').modal();

    $('select').formSelect();
    M.updateTextFields();

    $('.sidenav').sidenav();

    $('.button-collapse').sidenav();

    $('.parallax').parallax();

    $('.slider').slider({
        indicators: false,

        height: 500,
        transition: 500,
        interval: 4000


    });







});

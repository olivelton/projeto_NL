//ao carregar a pagina muda a cor de fundo de todos os inputs
window.onload = function () {

    let listaInputs = document.querySelectorAll('input');
    for (let i = 0; i < listaInputs.length; i++) {
        listaInputs[i].style.backgroundColor = 'white';
    }

};

//funcção para pegar id do DOM  
function $(id) {
    return document.getElementById(id);
}

let inputNome = $('input-nome');
let inputSobrenome = $('input-sobrenome');
let inputCpf = $('input-cpf');


inputCpf.addEventListener('keypress', function (e) {

    if (e.keyCode < 45 || e.keyCode > 57 || e.keyCode == 47) {

        e.preventDefault();

    }

    if (inputCpf.value.length == 3 || inputCpf.value.length == 7) {
        inputCpf.value += '.';
    }
    if (inputCpf.value.length == 11) {
        inputCpf.value += '-';
    }

    if ((e.keyCode == 46) && (inputCpf.value.length != 3 || inputCpf.value.length != 7)) {
        e.preventDefault();
    }
    if (e.charCode == 45 && inputCpf.value.length != 11) {
        e.preventDefault();
    }

});




inputCpf.onblur = function () {

    //adicionamos a variavel os valores encontratos pelo regex dentro do input
    let valor = regex.exec(inputCpf.value);
    console.log(valor);
    if (inputCpf != valor) {
        console.log('diferente do regex');
    } else {
        console.log('igual');
    }
}


/*function campoVazio(campo) {
    console.log("teste" + campo.value);
    if (campo.value === '') {
        campo.classList.add('invalid');

    }

}*/
// criando mascara para cpf com regex 

function valida() {

    alert('registrado');
    return false;


}

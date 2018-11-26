//ao carregar a pagina muda a cor de fundo de todos os inputs
window.onload = function () {

    let listaInputs = document.querySelectorAll('input');
    for (let i = 0; i < listaInputs.length; i++) {
        listaInputs[i].style.backgroundColor = 'white';
    }

};

//funcção para pegar id do DOM  
/*function $(id) {
    return document.getElementById(id);
}
*/
let inputNome = $('#input-nome');
let inputSobrenome = $('#input-sobrenome');
let inputCpf = document.getElementById('input-cpf');
let senha = $('#input-senha');
let confirmaSenha = $('#input-senha-confirma');
let inputEmail = $('#email');
let inputRua = $('#input-rua');
let inputNumero = $('#input-numero');
let inputCidade = $('#input-cidade');
let inputCep = $('#input-cep');
let inputCheckbox = $('#input-checkbox');
let ClassCliente = function (nome, sobrenome, cpf, sexo, mail, senha, rua, numero, cidade, estado, cep) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.cpf = cpf;
    this.sexo = sexo;
    this.email = mail;
    this.senha = senha;
    this.rua = rua;
    this.numero = numero;
    this.cidade = cidade;
    this.estado = estado;
    this.cep = cep;
}



$('a').click((evento) => {
    if (!confirm('tem certeza que deseja deixar essa pagina?')) {
        console.log('Cancelado');
        evento.preventDefault();

    } else {
        console.log('saiu');
    }
});

function verificarSenha() {
    let verificador = false;
    if (senha.val() == confirmaSenha.val()) {
        confirmaSenha.removeClass('invalid');
        senha.removeClass('invalid');
        $('#alerta-confirma-senha').fadeOut('slow');
        $('#alerta-confirma-senha1').fadeOut('slow');
        verificador = true;
    } else {
        confirmaSenha.addClass('invalid');
        senha.addClass('invalid');
        $('#alerta-confirma-senha').fadeIn('slow');
        $('#alerta-confirma-senha1').fadeIn('slow');
        verificador = false;

    }
    return verificador;

}

confirmaSenha.focusout(() => {
    verificarSenha();
});

senha.focusout(() => {
    if (confirmaSenha.val()) {
        verificarSenha();
    }
})


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


//tratamento para pegar numero ou s/n
function pegaNumero() {
    if ($('input:checked').val()) {
        $('#div-numero').fadeOut('slow');

        return 's/n';
    } else {
        $('#div-numero').fadeIn('slow');
        return inputNumero.val();
    }
    return 's/n';
}
//evento de clique no checkbox esconde campo numero 
inputCheckbox.click(pegaNumero);

function pegaSexo() {

    return 'm';
}

function pegaEstado() {
    return 'PR';
}

/* teste recuperar json
let aaa = JSON.parse(localStorage.getItem('Olivelton'));
console.log(aaa);
console.log(typeof (aaa));
console.log(aaa.nome);
*/
function valida() {
    if (!verificarSenha()) {
        alert('senhas não conferem');
        return false;
    } else {


        if (!localStorage.getItem($('#input-nome').val())) {
            localStorage.setItem(inputNome.val(), JSON.stringify(new ClassCliente(inputNome.val(), inputSobrenome.val(), inputCpf.value, pegaSexo(), inputEmail.val(), senha.val(), inputRua.val(), pegaNumero(), inputCidade.val(), pegaEstado(), inputCep.val())));

            alert('Úsuario cadastrado com sucesso \nPara Acessar o portal entre com o nome e a senha');


            return false;
        } else {
            alert('usuario ja cadastrado');
            return false;
        }

    }
    return false;


}

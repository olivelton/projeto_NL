//ao carregar a pagina muda a cor de fundo de todos os inputs
window.onload = function () {

    let displayNome = document.getElementById('display-nome');



    /*evento de carregamento da pagina pedindo o nome do leitor 
     */







    let listaInputs = document.querySelectorAll('input');
    for (let i = 0; i < listaInputs.length; i++) {
        listaInputs[i].style.backgroundColor = 'white';
    }



    let leitor = '';

    if (!localStorage.getItem('userAtivo')) {
        // leitor = prompt('Seja bem vindo \n Qual seu nome?');
    } else {
        leitor = localStorage.getItem('userAtivo');

    }

    if (leitor) {
        displayNome.innerHTML = 'Olá! ' + leitor;
        displayNome.classList.remove('hide');
    }



    let tempoOnline = 0;
    let usuarioAtivo = localStorage.getItem('userAtivo');
    tempoOnline = parseInt(localStorage.getItem('chave'));
    let key = setInterval(() => {
        if (tempoOnline > 0) {
            tempoOnline += -1000;
            localStorage.setItem('chave', tempoOnline);
        } else {
            localStorage.removeItem('userAtivo');
            //localStorage.removeItem('chave');
            window.setTimeout(function () {
                //  window.location.href = 'login.html';
            }, 5000);
        }
        if (tempoOnline == -4000) {
            clearInterval(key);
        }

    }, 1000);


};

//funcção para pegar id do DOM  
/*function $(id) {
    return document.getElementById(id);
}
*/
let stri = "";
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
let bdUser = [];


$('a').click((evento) => {
    if (!confirm('tem certeza que deseja deixar essa pagina?')) {
        console.log('Cancelado');
        evento.preventDefault();

    } else {
        console.log('saiu');
    }
});

let name = document.getElementsByName('nome-usuario')[0];
console.log(name);
name.onfocus = function () {
    $('#pdica').slideDown('slow');
};
name.onblur = function () {
    $('#pdica').slideUp('slow');
}


function verificarSenha() {
    let verificador = false;
    if (senha.val() == confirmaSenha.val()) {
        confirmaSenha.removeClass('invalid');
        senha.removeClass('invalid');
        $('#confirma-senha').fadeOut('slow');
        $('#confirma-senha1').fadeOut('slow');
        verificador = true;
    } else {
        confirmaSenha.addClass('invalid');
        senha.addClass('invalid');
        $('#confirma-senha').fadeIn('slow');
        $('#confirma-senha1').fadeIn('slow');
        verificador = false;

    }
    return verificador;

}

confirmaSenha.focusout(() => {
    verificarSenha();
});
/*
senha.focusout(() => {
    if (confirmaSenha.val()) {
        verificarSenha();
    }
});
*/
document.getElementById('input-senha').onblur = function () {

    if (confirmaSenha.val()) {
        verificarSenha();
    }
};

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


//tratando do cep
inputCep.keypress(function (e) {

    if (e.keyCode < 45 || e.keyCode > 57 || e.keyCode == 47 || e.keyCode == 46) {
        alert('digito não valido somente numero e - são aceitos ');
        e.preventDefault();

    }

    if (inputCep.val().length == 5) {
        inputCep.val(inputCep.val() + '-');
    }


});

//tratamento para pegar numero ou s/n
function pegaNumero() {
    if ($('input:checked').val()) {
        $('#div-numero').fadeOut('slow');

        return 's/n';
    }
    if (!$('input:checked').val()) {
        $('#div-numero').fadeIn('slow');
        return inputNumero.val();
    }

}
//evento de clique no checkbox esconde campo numero 
inputCheckbox.click(pegaNumero);

function pegaSexo() {
    let marcado = $('[name=sexo]:checked').val();

    return marcado;
}

function pegaEstado() {

    return $('select option:selected').val();
}


function valida() {
    //verifica se foi marcado opção de sexo 
    if ($('[name=sexo]:checked').val() == undefined) {
        alert('favor marque qual sexo é?');
        return false;
    }

    //verifica se foi marcado estado 
    if (pegaEstado() == '') {
        alert('Por favor selecione um estado');
        return false;
    }

    //verificando as senhas antes de enviar 
    if (!verificarSenha()) {
        alert('senhas não conferem');
        return false;
    }






    //verifica se usuario ja foi cadastrado ou não
    if (!localStorage.getItem($('#input-nome').val())) {

        let novoUser = new ClassCliente(inputNome.val(), inputSobrenome.val(), inputCpf.value, pegaSexo(), inputEmail.val(), senha.val(), inputRua.val(), pegaNumero(), inputCidade.val(), pegaEstado(), inputCep.val());

        localStorage.setItem(inputNome.val(), JSON.stringify(novoUser));

        alert('Úsuario cadastrado com sucesso \nPara Acessar o portal entre com o nome e a senha');
        bdUser.push(novoUser);


        stri += " <tr><td>" + novoUser.nome + "</td><td>" + novoUser.sobrenome + "</td><td>" + novoUser.sexo + "</td></tr>";
        console.log(stri);
        $('tbody').html(stri);



        return false;
    } else {
        alert('usuario ja cadastrado');
        return false;
    }


    return false;


}

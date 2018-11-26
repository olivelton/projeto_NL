(function () {


    $("#clickme").click(function () {
        $("#book").fadeIn("slow", function () {
            // Animation complete
        });
    });


    document.getElementById('input-usuario').addEventListener('invalid', () => {

        //customiza a mensagem do html 5 validação 
        if (document.getElementById('input-usuario').validity.valueMissing) {

            document.getElementById('input-usuario').setCustomValidity('É necessario preencher este campo');
        } else {
            document.getElementById('input-usuario').setCustomValidity('');
        }

    });
    document.getElementById('input-senha').addEventListener('invalid', () => {



    });

    function validaUsuario(user, senha) {
        let resultadouser = false;
        let resultadosenha = false;
        let userCadastrado = 'admin';
        let senhaCadastrado = 'admin';

        function recuperaJson() {
            let resultado;
            if (!JSON.parse(localStorage.getItem(user))) {
                alert('Usuario não cadastrado');


            } else {
                resultado = JSON.parse(localStorage.getItem(user));
            }
            return resultado;
        }


        let cliente = recuperaJson();


        if (user == cliente.nome) {
            resultadouser = true;
            $('#alerta-usuario').fadeOut('slow');
            $('#input-usuario').removeClass('invalid');

        } else {
            //exibe alerta com efeito em uma div com p
            $('#alerta-usuario').fadeIn('slow');
            resultadouser = false;
            $('#input-usuario').addClass('invalid');
        }

        if (senha == cliente.senha) {
            resultadosenha = true;
            $('#alerta-senha').fadeOut('slow');
            $('#input-senha').removeClass('invalid');
        } else {
            //exibe alerta com efeito em uma div com p
            $('#alerta-senha').fadeIn('slow');
            resultadosenha = false;
            $('#input-senha').addClass('invalid');
        }


        if (resultadosenha == true && resultadouser == true) {
            return true;
        } else {
            $('body').css({
                backgroundColor: 'black'
            });
            return false;
        }
        return false;
    }


    $('#link-esqueci-senha').click(() => {
        let modalES = $('#modal-solicita-senha')
        let instance = M.Modal.getInstance(modalES);
        instance.open();
    });


    //tratamento submit pegando com tagName
    let formLogin = document.getElementsByTagName('form')[0];

    formLogin.onsubmit = () => {

        if (validaUsuario($('#input-usuario').val(), $('#input-senha').val())) {

            localStorage.setItem('chave', '600000');
            localStorage.setItem('userAtivo', $('#input-usuario').val());
            window.location.href = 'portalcliente.html';
            // return false;
        } else {
            alert('não foi possivel Acesso');
            return false;
        }

        return false;
    };


    $('#nome-senha').focusout(() => {


        if (localStorage.getItem($('#nome-senha').val()) == null) {
            alert('Esse Nome não é cadastrado em nosso banco de dados');
            $('#nome-senha').val('');

        } else {}
    });


    let novaSenha = $('#nova-senha');
    novaSenha.submit(() => {
        let usuarioSemMemoria = JSON.parse(localStorage.getItem($('#nome-senha').val()));

        if (usuarioSemMemoria.nome == $('#nome-senha').val()) {
            if (usuarioSemMemoria.email == $('#email-senha').val()) {
                novaSenha.html('<center><h3> solicitação recebida<br>Verifique seu E-mail</h3></center>');
            } else {
                alert('Esse e mail não é compativel com esse Usuario');
            }

        } else {}
    });



})();

(function () {



    $(document).ready(function () {

        if (localStorage.getItem('chave') == null) {
            $('body').css({
                    backgroundColor: 'red'
                }

            );

            $('body').html('<center><h1> ACESSO NEGADO!!</h1><\center>');
            window.setTimeout(function () {
                window.location.href = 'login.html';
            }, 3000);
        } else {

        }





    });




    let tempoOnline = 0;
    let usuarioAtivo = localStorage.getItem('userAtivo');
    tempoOnline = parseInt(localStorage.getItem('chave'));
    let key = setInterval(() => {
        if (tempoOnline > 0) {
            tempoOnline += -1000;
            localStorage.setItem('chave', tempoOnline);

            let seg = (tempoOnline / 1000) % 60;
            let min = Math.trunc((tempoOnline / 60000) % 60);
            if (seg < 10) {
                $('#display-time').html('Expira ' + min + ':0' + seg + ' minutos');
            } else {
                $('#display-time').html('Expira ' + min + ':' + seg + ' minutos');
            }



        } else {
            $('body').html('<center><h1> Sessão terminada!!</h1><\center>');
            localStorage.removeItem('userAtivo');
            //localStorage.removeItem('chave');
            window.setTimeout(function () {
                window.location.href = 'login.html';
            }, 5000);
        }

        if (tempoOnline == -4000) {
            clearInterval(key);
        }

    }, 1000);


    $('h3').html('Seja Bem Vindo ' + usuarioAtivo);

    let cliente = JSON.parse(localStorage.getItem(usuarioAtivo));
    console.log(usuarioAtivo);

    console.log(cliente);

    $('#mostra-nome').val(cliente.nome);
    $('#mostra-sobrenome').val(cliente.sobrenome);
    $('#mostra-cpf').val(cliente.cpf);
    $('#mostra-mail').val(cliente.email);
    $('#mostra-sexo').val(cliente.sexo);

    $('#mostra-estado').val(cliente.estado);
    $('#mostra-rua').val(cliente.rua);
    $('#mostra-cidade').val(cliente.cidade);
    $('#mostra-numero').val(cliente.numero);
    $('#mostra-cep').val(cliente.cep);






})();

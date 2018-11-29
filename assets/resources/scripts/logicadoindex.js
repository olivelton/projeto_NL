(function () {
    function $(id) {
        return document.getElementById(id);
    }

    /*validação do formulario de mensagem na ancora contato do index
     */

    let btnEnviar = $('btn-enviar-msg');
    let mensagem = $('textarea-contato');
    let nome = $('input-nome-contato');
    let contatoRetorno = $('input-contato-retorno');
    let displayNome = $('display-nome');

    /*evento de carregamento da pagina pedindo o nome do leitor 
     */
    let leitor;
    window.addEventListener('load', () => {
        if (!localStorage.getItem('userAtivo')) {
            leitor = prompt('Seja bem vindo \n Qual seu nome?');
        } else {
            leitor = localStorage.getItem('userAtivo');

        }

        if (leitor) {
            displayNome.innerHTML = 'Olá! ' + leitor;
            displayNome.classList.remove('hide');
        }
        //adiciona o nome ao campo nome do formulario contato 
        nome.value = leitor;

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

    });

    //verifica se os inputs estao vazios para habilitar ou não 
    function habilitaEnviar() {
        if (nome.value != '') {
            btnEnviar.disabled = false;
            $('alerta-input-nome').classList.add('hide');
            nome.style.borderColor = 'green';
        }
        if (mensagem.value != '') {
            btnEnviar.disabled = false;
            $('alerta-textarea-contato').classList.add('hide');
            mensagem.style.borderColor = 'green';
        }
        if (contatoRetorno.value != '') {
            btnEnviar.disabled = false;
            $('alerta-input-contato-retorno').classList.add('hide');
            contatoRetorno.style.borderColor = 'green';
        }




    }

    //trata os eventos digitação dentro de cada input
    mensagem.addEventListener('keyup', habilitaEnviar);
    nome.addEventListener('keyup', habilitaEnviar);
    contatoRetorno.addEventListener('keyup', habilitaEnviar);

    //abre modal de carregamento de envio de mensgaem
    btnEnviar.addEventListener('click', function () {
        let modalCarregando = $('modal-carregando-msg')
        var instance = M.Modal.getInstance(modalCarregando);
        instance.open();

    });

    //verifica se todos os campos preenchidos caso não exibe alerta neles e desabilita enviar
    btnEnviar.addEventListener('mouseover', function () {

        //$('modal-carregando-msg').modal().open();
        if (nome.value == '') {
            nome.style.borderColor = 'red';
            $('alerta-input-nome').classList.remove('hide');
            btnEnviar.disabled = true;

        }
        if (contatoRetorno.value == '') {
            contatoRetorno.style.borderColor = 'red';
            $('alerta-input-contato-retorno').classList.remove('hide');
            btnEnviar.disabled = true;
        }
        if (mensagem.value == '') {
            mensagem.style.borderColor = 'red';
            $('alerta-textarea-contato').classList.remove('hide');
            btnEnviar.disabled = true;
        }
    });


    /* fim da validação do formulario de mensagem na ancora contato do index
     */



    /*tratamento dos links dos cards de serviço*/

    //evento modal card suporte tecnico
    document.getElementById('saibamais-suporte').addEventListener('click', function () {
        let modalCarregando = $('modal-servico-suporte')
        var instance = M.Modal.getInstance(modalCarregando);
        instance.open();

    });

    // evento modal card redes
    document.getElementById('saibamais-redes').addEventListener('click', function () {
        let modalCarregando = $('modal-servico-redes')
        var instance = M.Modal.getInstance(modalCarregando);
        instance.open();

    });

    //evento modal card marketing
    document.getElementById('saibamais-marketing').addEventListener('click', function () {
        let modalCarregando = $('modal-servico-marketing')
        var instance = M.Modal.getInstance(modalCarregando);
        instance.open();

    });


    //evento modal card monitoramento

    document.getElementById('saibamais-musical').addEventListener('click', function () {
        let modalCarregando = $('modal-servico-musical')
        var instance = M.Modal.getInstance(modalCarregando);
        instance.open();

    });


    // evento modal card musical 

    document.getElementById('saibamais-eventos').addEventListener('click', function () {
        let modalCarregando = $('modal-servico-eventos')
        var instance = M.Modal.getInstance(modalCarregando);
        instance.open();

    });


    //evento modal card asseoria eventos
    document.getElementById('saibamais-monitoramento').addEventListener('click', function () {
        let modalCarregando = $('modal-servico-monitoramento')
        var instance = M.Modal.getInstance(modalCarregando);
        instance.open();

    });


    /* fim tratamento dos links dos cards de serviço*/


})();

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





})();

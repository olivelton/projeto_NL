<?php
$Nome		= $_POST["input-nome-contato"];	// Pega o valor do campo Nome
	// Pega o valor do campo Telefone
$Email		= "olivelton00@gmail.com";	// Pega o valor do campo Email
$Mensagem	= $_POST["textarea-contato"];	// Pega os valores do campo Mensagem
$Retorno    = $_POST["input-contato-retorno"];
// Variável que junta os valores acima e monta o corpo do email

$Vai 		= "Nome: $Nome \n\ncontato de retorno: $Retorno\n\nMensagem:\n\n $Mensagem\n";

require_once("phpmailer/class.phpmailer.php");

define('GUSER', 'olivelton00@gmail.com');	// <-- Insira aqui o seu GMail
define('GPWD', 'senhadoemailaqui');		// <-- Insira aqui a senha do seu GMail

function smtpmailer($para, $de, $de_nome, $assunto, $corpo) { 
	global $error;
	$mail = new PHPMailer();
	$mail->IsSMTP();		// Ativar SMTP
	$mail->SMTPDebug = 0;		// Debugar: 1 = erros e mensagens, 2 = mensagens apenas
	$mail->SMTPAuth = true;		// Autenticação ativada
	$mail->SMTPSecure = 'tls';	// SSL REQUERIDO pelo GMail
	$mail->Host = 'smtp.gmail.com';	// SMTP utilizado
	$mail->Port = 587;  		// A porta 587 deverá estar aberta em seu servidor
	$mail->Username = GUSER;
	$mail->Password = GPWD;
	$mail->SetFrom($de, $de_nome);
	$mail->Subject = $assunto;
	$mail->Body = $corpo;
	$mail->AddAddress($para);
	if(!$mail->Send()) {
		//$error = 'Mail error: '.$mail->ErrorInfo; 
        echo "<script> 
    alert('Erro ao enviar a Mensagem tente mais tarde');
    window.location.href = 'index.html#contato';
</script>)";
		return false;
	} else {
		//$error = 'Mensagem enviada!';
		return true;
	}
}

// Insira abaixo o email que irá receber a mensagem, o email que irá enviar (o mesmo da variável GUSER), 
//o nome do email que envia a mensagem, o Assunto da mensagem e por último a variável com o corpo do email.

 if (smtpmailer('olivelton00@gmail.com', 'olivelton00@gmail.com.com', 'Site Nova Logica', 'contato via site', $Vai)) {
echo "<script> 
    alert('Mensagem enviada com Sucesso');
    window.location.href = 'index.html#contato';
</script>)";
	

}
if (!empty($error)) echo $error;
?>

<?php
require '/PHPMailerAutoload.php';
if(empty($_POST['name'])  		||
   empty($_POST['phone'])       ||
   empty($_POST['email']) 		||
   empty($_POST['bizvalue'])    ||
   empty($_POST['selectmenow'])  ||
   empty($_POST['message'])	||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
{
	echo "No arguments Provided!";
	return false;
}
$name = $_POST['name'];
$email_address = $_POST['email'];
$message = $_POST['message'];
$phone = $_POST['phone'];
$value = $_POST['bizvalue'];
$buysell = $_POST['selectmenow'];
$to = 'info@bizchain.co.uk';
$email_subject = "$name has messaged you";
$email_body = "You have received a new message. n".
	"Here are the details:n".
	"Name: $name n".
	"Email: $email_address n".
	"Phone: $phone n".
	"Interest: $buysell for $value".
	"Message n $message";
$mail = new PHPMailer();
$mail->IsHTML(true);
$mail->isSMTP();
$mail->SMTPDebug = 0;
$mail->Host = "localhost";
$mail->Port = 25;
$mail->addReplyTo($email_address);
$mail->setFrom($email_address);
$mail->addAddress($to, "Bizchain");
$mail->Subject = $email_subject;
$mail->Body = $email_body;
if($mail->Send()) {
	return true;
} else {
	return false;
}
?>
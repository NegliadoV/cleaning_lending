<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer\src\PHPMailer.php';
require 'PHPMailer\src\PHPMailer.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru', 'phpmailer/language/');
$mail->IsHTML(true);

$mail->setForm('ipnegliadov@gmmail.ru', 'Заявка из сайта');
$mail->addAddres('clean60home@gmail.com');
$mail->Subgect = 'Заявка';


$body = '<h1> Письмо из сайта</h1>';

if (trim(!empty($_POST['name']))) {
    $body .= '<p><strong>Имя:</strong>' . $_POST['name'] . '</p>';
}

$body = '<h1> Письмо из сайта</h1>';

if (trim(!empty($_POST['phone']))) {
    $body .= '<p><strong>Телефон:</strong>' . $_POST['phone'] . '</p>';
}


if (trim(!empty($_POST['message']))) {
    $body .= '<p><strong>Сообщение:</strong>' . $_POST['message'] . '</p>';
}

$mail->Body = $body;

if (!$mail->send()) {
    $message = 'Ошибка';
} else {
    $message = 'Данные отправлены!';
}

header('Content-type: applicacion/json');
echo json_encode($resporense);

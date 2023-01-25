<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

// Для более ранних версий PHPMailer
//require_once '/PHPMailer/PHPMailerAutoload.php';

$mail = new PHPMailer;
$mail->CharSet = 'UTF-8';

// Настройки SMTP
$mail->isHTML(true);
$mail->SMTPAuth = true;
$mail->SMTPDebug = 0;

$mail->setFrom('clean60hom@clean60home.ru', 'сайт');
$mail->addAddress('clean60home@gmail.com');


// Тема письма
$mail->Subject = 'Сообщение клининг сайт';

// Тело письма

if (trim(!empty($_POST['name']))) {
    $body .= '<p><strong>Имя: </strong>' . $_POST['name'] . '</p>';
}
if (trim(!empty($_POST['phone']))) {
    $body .= '<p><strong>Телефон: </strong>' . $_POST['phone'] . '</p>';
}
if (trim(!empty($_POST['message']))) {
    $body .= '<p><strong>Коммент: </strong>' . $_POST['message'] . '</p>';
}

$mail->Body = $body;

if ($mail->send()) {
    $message = 'Данные отправлены!';
}



$responce = ['message' => $message];

header('Content-type: application/json');
echo json_encode($responce);

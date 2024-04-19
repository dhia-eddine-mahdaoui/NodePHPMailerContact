<?php
require 'vendor/autoload.php'; // Load all composer packages including phpdotenv

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load(); // Load environment variables from .env file

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

header("Access-Control-Allow-Origin: http://localhost:3000");
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json'); // Ensure JSON output

$mail = new PHPMailer(true);

$data = json_decode(file_get_contents("php://input"), true);

try {
    // Server settings
    $mail->isSMTP();
    $mail->Host = $_ENV['SMTP_HOST'];
    $mail->SMTPAuth = true;
    $mail->Username = $_ENV['SMTP_USERNAME'];
    $mail->Password = $_ENV['SMTP_PASSWORD'];
    $mail->SMTPSecure = 'tls';
    $mail->Port = $_ENV['SMTP_PORT'];

    // Recipients
    $mail->setFrom($_ENV['MAIL_FROM'], 'Mailer');
    $mail->addAddress($_ENV['MAIL_TO'], 'Joe User');

    // Content
    $mail->isHTML(true);
    $mail->Subject = 'New Contact Message';
    $mail->Body    = 'Name: ' . $data['name'] . '<br>Email: ' . $data['email'] . '<br>Message: ' . $data['message'];

    $mail->send();
    echo json_encode(['status' => 'success', 'message' => 'Message has been sent']);
} catch (Exception $e) {
    echo json_encode(['status' => 'error', 'message' => 'Message could not be sent. Mailer Error: ' . $mail->ErrorInfo]);
}
?>

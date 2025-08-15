<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { http_response_code(200); exit(); }
function respond($success, $payload) { echo json_encode($success ? array_merge(['success'=>true], $payload) : array_merge(['success'=>false], $payload)); exit(); }
$name = trim($_POST['name'] ?? '');
$email = trim($_POST['email'] ?? '');
$subject = trim($_POST['subject'] ?? 'Website Contact');
$message = trim($_POST['message'] ?? '');
if (!$name || !$email || !$message) respond(false, ['error'=>'Missing required fields.']);
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) respond(false, ['error'=>'Invalid email address.']);
$to = 'benjaminuwa60@gmail.com';
$fullSubject = '[Website Contact] ' . $subject;
$body = "You received a new message from the website contact form:\n\n"
      . "Name: {$name}\n"
      . "Email: {$email}\n"
      . "Subject: {$subject}\n\n"
      . "Message:\n{$message}\n";
$headers = [];
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-type: text/plain; charset=UTF-8';
$headers[] = 'From: ' . ($name ? $name . ' ' : '') . "<{$email}>";
$headers[] = 'Reply-To: ' . $email;
$ok = @mail($to, $fullSubject, $body, implode("\r\n", $headers));
if ($ok) respond(true, ['message'=>'Thanks! Your message has been sent.']); else respond(false, ['error'=>'Mail function failed on the server. Please contact the admin.']);
?>
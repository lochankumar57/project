$name = $_POST['name'];

$email = $_POST['email'];

$to = 'you@example.com';

$subject = 'New form submission';

$message = "Name: $name\nEmail: $email";

$headers = 'From: webmaster@example.com' . "\r\n" .

    'Reply-To: webmaster@example.com' . "\r\n" .

    'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $message, $headers);

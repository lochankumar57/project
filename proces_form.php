<?php

// Get the form data

$name = $_POST['name'];

$email = $_POST['email'];

// Do something with the form data

// For example, save it to a database or file

// Redirect the user to a thank-you page

header('Location: thankyou.html');

exit;

?>


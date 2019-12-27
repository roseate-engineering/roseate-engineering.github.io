<?php
$name = $_POST['name'];
$email = $_POST['email'];
$tel = $_POST['tel'];
$message = $_POST['message'];
$headers = "From: " . $email;
$message = "Name: " . $name . "\n" . "Tel: " . $tel . "\n\n" . $message; 
if(
    mail("roseate2015@Gmail.com", "Message sent from website", $message, $headers)
)
{
    echo "Mail sent successfully";
}
else{
    echo "Failure";
}
?>
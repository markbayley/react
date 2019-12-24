<?php

if (isset($ POST['submit'])) {
    $name = $_POST['name'];
    $subject = $_POST['subject'];
    $mailFrom = $_POST['mail'];
    $message = $_POST['message'];

    $mailTo = "markyb152@hotmail.com";
    $headers = "From: ".$mailFrom;
    $text = "You have received an email from: ".$name.".\n\n".$message;

    mail($mailTo, $subject, $text, $headers);
    header("Location: index.php?mailsend");
}
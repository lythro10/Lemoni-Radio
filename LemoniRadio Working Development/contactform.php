<?php

if (isset($_POST['submit']))  {

    $name = $_POST['name'];
    $emailFrom = $_POST['email'];
    $message = $_POST['message'];

    $mailTo ="hello@lemoniradio.com";
    $headers ="From: ".$emailFrom .".\n\n" ."The message is ".$message;
    $txt ="You have received an e-mail from ".$name. ".\n\n".$message; 


    mail($mailTo, $txt, $headers);
    header("Location: index.html?mailsend");
    
}
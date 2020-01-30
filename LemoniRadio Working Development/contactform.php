<?php

if (isset($_POST['submit']))  {

    $name = $_Post['name'];
    $emailFrom = $_Post['email'];
    $message = $_Post['message'];

    $mailTo = "george@georgiosmichael.com";
    $headers = "From: ".$emailFrom;
    $txt = "You have received an e=mail from ".$name. ".\n\n".$message; 


    mail($mailTo, $txt, $headers);
    header("Location: index.html?mailsend");
    
}
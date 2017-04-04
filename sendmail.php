<?php


$username = $_REQUEST['humanname'];
$useremail = $_REQUEST['humanmail'];
$userphone = $_REQUEST['humanphone'];
$usercomments = $_REQUEST['humancomments'];


// the message
$msg = "Nombre: " . $username . " Correo: " . $useremail . " Telefono: " . $userphone . " Comentarios: " . $usercomments;


// send email
if(mail("ventas@bhmexico.net", "Contacto website Body Health", $msg)){
    echo 'sent';
}else{
    echo 'went wrong';
}


?>
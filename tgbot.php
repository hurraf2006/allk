<?
$name = $_POST['name'];
$email = $_POST['email'];
$tel = $_POST['tel'];
$comment = $_POST['comment'];

if (isset($name)) {
    if (!empty($name)) {
        $name = strip_tags($name);
        $nameTitle = "First Name : ";
    }
}
if (isset($email)) {
    if (!empty($email)) {
        $email = strip_tags($email);
        $emailTitle = "Email address: ";
    }
}
if (isset($tel)) {
    if (!empty($tel)) {
        $tel = strip_tags($tel);
        $telTitle = "Phone Number : ";
    }
}
if (isset($comment)) {
    if (!empty($comment)) {
        $comment = strip_tags($comment);
        $commentTitle = "Comment : ";
    }
}

$arr = array(
    $nameTitle=>$name,
    $emailTitle=>$email,
    $telTitle=>$tel,
    $commentTitle=>$comment,
);
$text= "";
    foreach ($arr as $key => $value) {
        $text .= "<b>".$key."</b>".$value."%0A";
    }


$token ="5117253873:AAGkT5iXyPX6h3_2xKI6Gm2iSa25S9kuuxw";
$chat_id = "670084688";

 $send = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$text}","r");

 if ($send) {
     header('location: sent.html');
 }
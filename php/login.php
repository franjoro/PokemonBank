<?php session_start();
$user = $_POST['user'];
$pass = $_POST['pass'];
if($user=='user' && $pass == 'pass'){
    $json = array("allowed"=>"true","usuario"=>$user);
}else{
    $json = array("allowed"=>"false","usuario"=>"false");
}
$_SESSION['user'] = 'user';
echo json_encode($json);

?>
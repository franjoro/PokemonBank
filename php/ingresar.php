<?php
include_once('conexion.php');
$date = $_POST['fecha'];
$operacion = $_POST['operacion'];
$saldo = $_POST['saldo'];
$sql = "SELECT * FROM SaldoTb";
$query = mysqli_query($mysqli, $sql);
$row= mysqli_fetch_array($query);
$saldoActual = $row[1];
if ($operacion == "Deposito") {
    $mat = $saldoActual + $saldo;
} elseif ($saldoActual == '0') {
    return "error";
} elseif ($operacion == "Retiro") {
    $mat = $saldoActual - $saldo;
} elseif ($operacion == "Pago de Servicios") {
    $mat = $saldoActual - $saldo;
}
$sql = "INSERT INTO movimientos(concepto, debitado, saldo, nuevoS, fecha) VALUES('".$operacion."', '".$saldo."', '".$saldoActual."', '".$mat."', '".$date."')  ";
$query = mysqli_query($mysqli, $sql);
    echo mysqli_error($mysqli);

$sql = "UPDATE SaldoTb SET saldo='".$mat."' ";
$query = mysqli_query($mysqli,$sql);
if($query){
    echo "Ok";
}else{
    echo mysqli_error($mysqli);
}

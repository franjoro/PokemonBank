<?php
include_once('conexion.php');
$sql = "SELECT * FROM movimientos ORDER BY code DESC";
$query = mysqli_query($mysqli, $sql);
echo mysqli_error($mysqli);
?>
<table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
    <thead>
        <tr>
            <th>#</th>
            <th>Concepto</th>
            <th>Debitado</th>
            <th>Saldo</th>
            <th>Nuevo Saldo</th>
            <th>Fecha</th>
        </tr>
    </thead>
    <tbody>
        <?php
        $i=1;
        while ($row = mysqli_fetch_array($query)) {
            if ($row[1]=="Deposito") {
                $color= "green";
            } else {
                $color = "red";
            } ?>
        <tr>
            <td><?php echo $i?></td>
            <td style="color:<?php echo $color?>"><?php echo $row[1]?></td>
            <td>$<?php echo number_format($row[2], 2)  ?></td>
            <td>$<?php echo number_format($row[3], 2)  ?></td>
            <td>$<?php echo number_format($row[4], 2) ?></td>
            <td><?php echo $row[5]?></td>

        </tr>
        <?php $i++;
        } ?>


    </tbody>
</table>

<?php mysqli_close($mysqli)?>
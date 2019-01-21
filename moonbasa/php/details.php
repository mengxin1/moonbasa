<?php
    include "connect.php";

    $id=$_GET["sid"];
    $result=mysqli_query($conn,"select * from recom where sid='$id'");    
    $recomlist=mysqli_fetch_array($result,MYSQLI_ASSOC);
    echo json_encode($recomlist);
?>
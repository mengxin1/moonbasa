<?php
    include "connect.php";

    $result=mysqli_query($conn,"select * from recom");

    $recomlist=array();
    for($i=0;$i<mysqli_num_rows($result);$i++){
        $recomlist[$i]=mysqli_fetch_array($result,MYSQLI_ASSOC);
    }

    echo json_encode($recomlist);
?>
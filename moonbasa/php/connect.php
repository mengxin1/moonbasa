<?php
header('content-type:text/html;charset=utf-8');
$severname='localhost';
$username='root';
$password='';
$dbname='moonbasa';

$conn=new mysqli($severname,$username,$password,$dbname);

mysqli_query($conn,"SET NAMES UTF8");
?>
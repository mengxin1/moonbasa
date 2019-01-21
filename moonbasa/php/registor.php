<?php
    include "connect.php";

    $tel=isset($_POST['tel'])?$_POST['tel']:'';


    $result=mysqli_query($conn,"select * from user where tel='$tel'");

    if(mysqli_fetch_array($result)){
        echo 'false';
    }else{
        
        echo 'true';
        if(isset($_POST['submit'])){
            $tel=$_POST['tel'];
            $password=$_POST['password'];
            $hash=password_hash($password,PASSWORD_DEFAULT);
            mysqli_query($conn,"insert into user values(default,'$tel','$hash',now())");
            header('Location:http://10.31.161.32/1807/moonbasa/src/login.html');
        }
    }

    
?>
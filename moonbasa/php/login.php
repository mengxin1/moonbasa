<?php
include "connect.php";

$tel = isset($_POST['tel']) ? $_POST['tel'] : '';
$password = isset($_POST['password']) ? $_POST['password'] : '';


$result = mysqli_query($conn, "select * from user where tel='$tel'");

$row = mysqli_fetch_assoc($result);

if (password_verify($password, $row['password'])) {
    echo true;
} else {
    echo false;
}
?>
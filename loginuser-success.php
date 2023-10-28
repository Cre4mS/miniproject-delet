<?php
require 'conn.php';
$sql_update="INSERT INTO tb_regis (Username,Password,Email,Firstname,Lastname,Sex,Address,Zipcode,Tel) VALUES ('$_POST[Username]','$_POST[Password]','$_POST[Email]' ,'$_POST[Firstname]' ,'$_POST[Lastname]','$_POST[Sex]','$_POST[Address]','$_POST[Zipcode]','$_POST[Tel]')";
$result= $conn->query($sql_update);

if(!$result) {
    die("Error God Damn it : ". $conn->error);
} else {
echo "Insert Success <br>";
header("refresh: 1; url=http://localhost/miniproject/index.html");
}
?>
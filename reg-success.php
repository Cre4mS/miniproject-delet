<?php

$open_connect = 1;
require('conn.php');

if(isset($_POST['Username'])&& isset($_POST['Firstname'])&& isset($_POST['Lastname'])&& isset($_POST['Sex']) && isset($_POST['Email']) && isset($_POST['Password']) && isset($_POST['Password2'])&& isset($_POST['Address'])&& isset($_POST['Zipcode'])&& isset($_POST['Tel'])){
     $Username = htmlspecialchars(mysqli_real_escape_string($connect, $_POST['Username']));
     $Firstname = htmlspecialchars(mysqli_real_escape_string($connect, $_POST['Firstname']));
     $Lastname = htmlspecialchars(mysqli_real_escape_string($connect, $_POST['Lastname']));
     $Sex = htmlspecialchars(mysqli_real_escape_string($connect, $_POST['Sex'])); 
     $Email = htmlspecialchars(mysqli_real_escape_string($connect, $_POST['Email']));
     $Password = htmlspecialchars(mysqli_real_escape_string($connect, $_POST['Password']));
     $Password2 = htmlspecialchars(mysqli_real_escape_string($connect, $_POST['Password2']));
     $Address = htmlspecialchars(mysqli_real_escape_string($connect, $_POST['Address']));
     $Zipcode = htmlspecialchars(mysqli_real_escape_string($connect, $_POST['Zipcode']));
     $Tel = htmlspecialchars(mysqli_real_escape_string($connect, $_POST['Tel']));

     if(empty($Username)){
        die(header('Location: registeruser.php')); //คุณไม่ได้กรอกชื่อผู้ใช้
     }elseif(empty($Firstname)){
        die(header('Location: registeruser.php')); //คุณไม่ได้กรอกอีเมล
     }elseif(empty($Lastname)){
        die(header('Location: registeruser.php')); //คุณไม่ได้กรอกรหัสผ่าน
     }elseif(empty($Sex)){
        die(header('Location: registeruser.php')); //คุณไม่ได้กรอกการยืนยันรหัสผ่าน
    }elseif(empty($Email)){
        die(header('Location: registeruser.php'));
     }elseif($Password != $Password2){
        die(header('Location: registeruser.php')); //กรุณายืนยันรหัสผ่านให้ถูกต้อง
    }elseif(empty($Address)){
        die(header('Location: registeruser.php'));
    }elseif(empty($Zipcode)){
        die(header('Location: registeruser.php'));
    }elseif(empty($Tel)){
        die(header('Location: registeruser.php'));
     }else{
         $query_check_email_account = "SELECT Email FROM tb_regis WHERE Email = '$Email'";
         $call_back_query_check_Email = mysqli_query($connect, $query_check_Email);
         if(mysqli_num_rows($call_back_query_check_Email) > 0){
            die(header('Location: registeruser.php')); //มีผู้ใช้อีเมลนี้แล้ว
         }else{
             $query_create_account = "INSERT INTO tb_regis VALUES ('', '$Username', '$Firstname', '$Lastname', '$Sex', '$Password', '$Email', '$Address', '$Zipcode', '$Tel', '')";
             $call_back_create_account = mysqli_query($conn, $query_create_account);
             if($call_back_create_account){
                 die(header('Location: loginuser.php')); //สร้างบัญชีสำเร็จ
             }else{
                die(header('Location: registeruser.php')); //สร้างบัญชีล้มเหลว
             }
         }
     }

}else{
    die(header('Location: form-register.php')); //ไม่มีข้อมูล
}

?>
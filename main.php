<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>แพ็คเกจทัวร์ภายในประเทศ</title>
    <style>
        * {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
   font-size: 100%;
   font-family: "Roboto", sans-serif;
 }
 body {
   min-height: 100vh;
   display: flex;
   justify-content: center;
   align-items: center;
   background: rgb(252, 248, 243);
 }
 form {
   background-color: #fff;
 /*   display: none; */
   border-radius: 15px;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   padding: 40px 30px 30px 30px;
 }
 .head h2 {
     text-align: center;
     font-weight: 550;
     font-size: 30px;
     margin: 10px 0;
     padding: 10px 30px 50px 50px;
 }
 .image{
     width: 100%;
     height: 100%;
     margin: 10px 0;
     padding: 50px 50px 50px 50px;
 }
.bio p1{
    font-weight: 400;
     font-size: 20px;
    margin-right: 85px;
}
.bio p2{
    font-weight: 400;
     font-size: 20px;
    margin-left: 35px;
}
     </style>
 </head>
 <body>
     <form>
        <div class="head">
            <h2>กรุณาเลือกผู้ใช้งาน</h2>
        </div>
         <div class="images">
            <a href="loginuser.php"><img src="assets/images/ผู้ใช้งาน.png" alt=""></a>
            <a href="loginadmin.php"><img src="assets/images/ผู้ดูแลระบบ.png" alt=""></a>
        </div><br>
        <div class="bio">
            <p1>ผู้ใช้งาน</p1>
            <p2>ผู้ดูแลระบบ</p2>
        </div>
       </form>
</body>
</html>

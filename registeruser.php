<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>สมัครสมาชิก</title>
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
  background: #faaeb0;
  
}
.head {
  text-align: center;
  margin-bottom: 30px;
}
.head h2 {
  font-weight: 500;
  font-size: 250%;
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
.form-group {
  display: flex;
  flex-direction: column;
}
input {
  border: none;
  background-color: #f3f3f3;
  border-radius: 7px;
  padding: 15px;
  outline: none;
}
input::placeholder {
  font-style: italic;
  font-size: 90%;
  color: #bbb;
}
input:focus {
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(3, 5, 0, 0.12), 0 1px 2px rgba(3, 5, 0, 0.12);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}
.bio {
  margin: 15px 0;
}
button {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(91, 91, 92);
  border: none;
  border-radius: 7px;
  margin-top: 10px;
  color: #ffffff;
  padding: 10px 15px;
  cursor: pointer;
  transition: 0.3s;
}
button:hover {
    background-color: #01d00b;
    
}

</style>
</head>
<body>
    <form>
        <div class="head">
          <h2>สมัครสมาชิกผู้ใช้งาน</h2>
        </div>
        <div class="form-group">
            <input type="text" placeholder="ชื่อผู้ใช้">
          <div class="bio">
            <input type="text" placeholder="ชื่อ">
            <input type="text" placeholder="นามสกุล">
          </div>
            <input type="email" id="email" placeholder="อีเมล์"><br>
            <input type="password" id="password1" placeholder="รหัสผ่าน"><br>
            <input type="password" id="password2" placeholder="ยืนยันรหัสผ่าน"><br>
            <input type="text" id="" placeholder="เพศ"><br>
            <input type="text" id="" placeholder=" ที่อยู่"><br>
            <input type="text" id="" placeholder=" รหัสไปรษณีย์"><br>
            <input type="text" id="" placeholder=" เบอร์"><br>
        
            <button>
                <div></div>
                สมัครสมาชิก
             <i class="fas fa-arrow-right"></i>
            </button>
            <a href="loginuser.php" class="button"></a>
        </div>    
      </form> 
</body>
</html>
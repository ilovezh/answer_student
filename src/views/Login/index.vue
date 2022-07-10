<template>
  <div class = "login">
   <div class="form">
    <form action="">
     <div class = "item">
  <label for="username" class="text">用户名</label>
  <input type="text" id = "username" placeholder="请输入用户名" class = "form-item" @input="verty2" v-model = "username">
  <span class = "error" v-if = "flag2">用户名格式错误</span>
</div>

<div class = "item">
  <label for="pwd" class="text">密码</label>
  <input type="password" id = "pwd" class = "form-item" @input="verty3" v-model = "pwd" placeholder="请输入密码" >
  <span class="error" v-if = "flag3">密码或用户名不正确或该账号已登录</span>
</div>
      <button class = "btn" @click = "toLogin">登  录</button>
      <span class="tip" @click = "toRegister">我没有账号,要去注册</span>
    </form>
   </div>
  </div>
</template>

<script>
import getInfo from "@/utils/getInfo"
import saveInfo from "@/utils/saveInfo"
export default {
name:"Login",
data(){
  return{
   username:"",
   pwd:"",
   flag2:false,
   flag3:false,
   reg4:false,
  }
},
methods:{
   verty2(){
    let userReg = /[.@*-+/]/g
    this.flag2 = this.username.match(userReg) || this.username.length < 5 || this.username.length > 10 
  },
  verty3(){
    let newPersons = JSON.parse(localStorage.getItem("persons"))
    this.reg4 =  newPersons.some(item=>{
      return item.username == this.username && item.pwd == this.pwd && item.status == false
    })
   
    // 注意:如果验证表单时采用一个正则有些困难时,可以将该正则分解为多个正则来验证
  },
  toLogin(){
 let {name,username,status} = getInfo().filter(item=>{
    return item.username == this.username
   })[0];
  
   this.flag3 = !this.reg4
   if(!this.flag3 && !status){
    let newInfo = getInfo()
    newInfo.forEach(item=>{
      if(this.username == item.username){
        item.status = true
          }
     })
     saveInfo(newInfo)
    this.$router.push(`/home?name=${name}&username=${username}`)
  }else if(status){
      this.$router.push(`/home?name=${name}&username=${username}`)
    }else{
        this.$router.push("/login")
    }
  },
  toRegister(){
this.$router.push("/register")
  }
}
}
</script>

<style scoped>
.login{
  width:1250px;
  height:600px;
  background: url("./images/background2.jpeg") no-repeat;
  background-size: 100% 100%;
  margin: 0 auto;
  position: relative;
}
.form{
  position: absolute;
  width:600px;
  height:300px;
  position: absolute;
  right:50px;
  top:100px;
  border:2px solid #fff;
  border-radius:5px;
  background-color:rgba(0,0,0,.5);
  box-shadow: 5px 5px 5px pink;
  }
 .item{
  width:90%;
  margin: 10px auto 0px auto;
  height: 70px;
  padding: 10px;
  box-sizing: border-box;
}
.text,.form-item{
  display: inline-block;
}
.text{
  width:20%;
  height:40px ;
  line-height: 40px;
  text-align: center;
  color:#fff;
}
.form-item{
  width:70%;
  height:40px;
  line-height: 40px;
  padding-left:10px;
  box-sizing: border-box;
  border:none;
  outline:none;
  border:1px solid #ff7983;
  border-radius:5px;
}
.error{
  display: block;
  width:100%;
  height:15px;
  line-height: 15px;
  text-align: center;
  font-size: 12px;
  color:#fff;
}

  .btn{
    position: absolute;
    width:50%;
    margin:auto;
    background: none;
    background-color: rgba(255,255,255,0.3);
    height:50px;
    line-height: 50px;
    color:#fff;
    font-size:30px;
    border:none;
    font-weight: bold;
    top:200px;
    left:0;
    right:0;
    border-radius:20%;
  }
  .tip{
    position: absolute;
    color:blue;
    top:250px;
    right:20px;
  }

</style>

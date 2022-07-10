<template>
<div class="register">
 <div class="form">

  <div class="item">
    <label for="name" class="text">姓名</label>
    <input type="text" placeholder="请输入姓名" id="name" class="form-item"  v-model = "name"/>
  </div>

 <div class="item">
  <label for="sex" class = "text">性别</label>
  <select name="" id="select" class = "form-item"   v-model = "sex" >
  <option value="male">男</option>
  <option value="female">女</option>
 </select>
</div>  


<div class="item">
<label for="age" class="text">年龄</label>
<input type="number" placeholder="请输入年龄" id = "age" class = "form-item" @input="verty1" v-model = "age"/>
<span class = "error" v-if = "flag1">请输入正确范围的年龄</span>
</div>

<div class = "item">
  <label for="username" class="text">用户名</label>
  <input type="text" id = "username" placeholder="请输入用户名" class = "form-item" @input="verty2" v-model = "username">
  <span class = "error" v-if = "flag2">用户名格式错误或者用户名已经存在</span>
</div>

<div class = "item">
  <label for="pwd" class="text">密码</label>
  <input type="password" id = "pwd" class = "form-item" @input="verty3" v-model = "pwd" placeholder="请输入密码" >
  <span class="error" v-if = "flag3">请输入正确格式的密码</span>
</div>

<div class="item" >
  <label for="surepwd" class = "text">确认密码</label>
  <input type="password" id = "surepwd" class = "form-item" @input="verty4" v-model = "surepwd" placeholder="请输入确认密码">
  <span class="error" v-if = "flag4">请保持与密码一致</span>
</div>
<div class="item">
  <button class = "btn" @click = "register">注  册</button>
   <span class="tip" @click = "toLogin">我要去登录</span>
</div>

 </div>
</div>
 
 
</template>

<script>
export default {
name:"Register",
data(){
  return{
    name:"",
    sex:"",
    age:"",
    username:"",
    pwd:"",
    surepwd:"",
    flag1:false,
    flag2:false,
    flag3:false,
    flag4:false
}
},
methods:{
  verty1(){
   if(this.age < 0 || this.age >150 || this.age == ""){
    this.flag1 = true;
   }else{
    this.flag1 = false;
   }
  },
  verty2(){
    let userReg = /[.@*-+/]/g
    if(localStorage.getItem("persons")){
    let newPersons = JSON.parse(localStorage.getItem("persons")) 
   let reg4 =  newPersons.some((item )=>{
      return item.username == this.username
    })
  this.flag2 = this.username.match(userReg) || this.username.length < 5 || this.username.length > 10 || reg4 || this.username == ""
    }else{
 this.flag2 = this.username.match(userReg) || this.username.length < 5 || this.username.length > 10 || this.username == ""
    }
   
   
  },
  verty3(){
    let reg1 = /[A-Z]+/;
    let reg2 = /[\d]+/
    let reg3 = /[a-z]+/
   this.flag3 = !this.pwd.match(reg1) || !this.pwd.match(reg2) || this.pwd.length <5 || this.pwd.length >10 || !this.pwd.match(reg3) || this.pwd == ""
    // 注意:如果验证表单时采用一个正则有些困难时,可以将该正则分解为多个正则来验证
  },
  verty4(){
    this.flag4 = !(this.pwd == this.surepwd) || this.surepwd == ""
  },
  register(){
    const {name,sex,age,username,pwd} = this;
    if(!localStorage.getItem('persons') && this.name.trim() != "" && this.sex.trim() != "" && this.age.trim() != "" && this.username.trim() != "" && this.pwd.trim() != "" &&  !this.flag1 &&  !this.flag2 &&  !this.flag3 &&  !this.flag4 ){
    let persons = JSON.stringify([{name,sex,age,username,pwd,chinese:[],math:[],english:[],note:[],times:[],status:false}])
    localStorage.setItem("persons",persons)
    this.$router.push("/login")
    }else if(this.name.trim() != "" && this.sex.trim() != "" && this.age.trim() != "" && this.username.trim() != "" && this.pwd.trim() != "" &&  !this.flag1 &&  !this.flag2 &&  !this.flag3 &&  !this.flag4 ){
     let newPersons = JSON.parse(localStorage.getItem("persons"))
     newPersons.push({name,sex,age,username,pwd,chinese:[],math:[],english:[],note:[],times:[],status:false})
     newPersons = JSON.stringify(newPersons);
      localStorage.setItem("persons",newPersons)
      this.$router.push("/login")
       }
  
  },
  toLogin(){
    this.$router.push("/login")
  }
}

}
</script>

<style scoped>
.register{
  width:1250px;
  height:600px;
  background: url("./images/background-4.jpeg") no-repeat;
  background-size: 100% 100%;
  margin: 0 auto;
  position: relative;
}
.form{
  position: absolute;
  top:30px;
  left:30px;
  width:600px;
  height:550px;
  background-color: rgba(255,255,255,.2);
  border:1px solid #fff;
  border-radius:10px;
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
  background: none;
  border:none;
  width:50%;
  background-color: #f47983;
  color:#fff;
  margin-top: -10px;
  margin-left: 150px;
  height:50px;
  line-height: 50px;
  font-size: 20px;
}
.tip{
    position: absolute;
    color:pink;
    top:500px;
    right:20px;
  }
</style>
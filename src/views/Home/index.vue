<template>
  <div class = "home clear">
    <div class="nav">
      <router-link :to = "{path:'/home/chinese',query:$route.query}" class = "nav-item" active-class="active">语文</router-link>
      <router-link :to = "{path:'/home/math',query:$route.query}" class = "nav-item" active-class="active">数学</router-link>
      <router-link :to = "{path:'/home/english',query:$route.query}" class = "nav-item" active-class="active">英语</router-link>
      <router-link :to = "{path:'/home/note',query:$route.query}" class = "nav-item" active-class="active">日记</router-link>
    </div>
    <div class="show">
      <div class="info" v-if = "info">欢迎您登录  <span class = "user">{{info}}</span>,又是元气满满的一天哦,<span class = "tologin" @click = "back">退出登录</span></div>
      <div class = "info" v-else>请您先去登录再来答题,谢谢,<router-link class = "tologin" to = "/login">立即登录</router-link></div>
     <div class = "tip">小提示:计分时,只要您所有答案中包含正确答案,方可计分！！！</div>
      <router-view></router-view>
    </div>
 
  </div>
</template>

<script>
import getInfo from "@/utils/getInfo"
import saveInfo from "@/utils/saveInfo"
export default {
name :"Home",
data(){
  return{
    info:"",
    username:""
  }
},
mounted(){
  let persons = getInfo();
  persons.forEach(item=>{
    if(item.status){
      this.info = item.name;
      this.username = item.username;
    }
  })
},
methods:{
  back(){
   let info = getInfo();
    info.forEach(item=>{
      if(this.username == item.username){
        item.status = false
          }
     })
     saveInfo(info)
    this.info = "";
  }
}
}
</script>

<style scoped>
.clearfix{
  content:"";
  display:block;
  clear:both;
}
.home{
  width:1250px;
  height:600px;
  background-color:rgb(244, 121, 131);
  margin: auto;
  padding:10px;
  box-sizing: border-box;
}
.nav{
width:20%;
height:580px;
float: left;
background: url("./images/bac1.jpeg");
}
.show{
  width:80%;
  height:580px;
  float:left;
  background-color:#fff;
}
.nav-item{
  width:100%;
  display: block;
  padding: 10px;
  height:145px;
  box-sizing: border-box;
  text-align: center;
  line-height: 145px;
  font-size: 30px;
  color:#fff;
  font-weight:bold;
  background-color: rgba(244,121,131,.5);

}
.active{
  background-color: #fff;
  background-color:rgba(0,0,0,.3);
  box-shadow: 10px 10px 3px #fff;
  color:#ccc;
}
.info{
  width:100%;
  height:50px;
  text-align: center;
  line-height: 50px;
  background-color: rgba(244,121,131,.5);
  color:#000;
  font-weight: bold;
}
.tologin{
  color:red;
}
.user{
  color:#fff;
}
.tip{
  background-color: red;
  color:#fff;
}
</style>
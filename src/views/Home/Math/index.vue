<template>
  <div class = "math">
 <div class="nav-math">
  <router-link to=  "/home/math/add"  active-class="active" class = "nav-item">加法</router-link>
  <router-link to = "/home/math/div"  active-class="active" class = "nav-item">减法</router-link>
  <router-link to = "/home/math/mul"  active-class="active" class = "nav-item">乘法</router-link>
  <router-link to = "/home/math/mod"  active-class="active" class = "nav-item">除法</router-link>
  <router-link to = "/home/math/random" active-class="active" class = "nav-item">近似数</router-link>
  </div>
  <router-view></router-view>
  </div>
</template>

<script>
export default {
name:"Home",
mounted(){
  // 重定向
this.$router.push("/home/math/add")
},
}
</script>

<style scoped>
.clearfix{
  content:"";
  display: block;
  clear:both;
}
.math{
  width:100%;
  height:100%;
}
.nav-math{
  width:100%;
  height:50px;
  border-top:1px solid #000;
  border-bottom:1px solid #000;
  box-sizing: border-box;
  line-height: 48px;
}
.nav-item{
  display: block;
  width:20%;
  float: left;
  text-align: center;
}
.active{
  background-color: #000;
  color:#fff;
  width:20%;
  text-align: center;
}
</style>
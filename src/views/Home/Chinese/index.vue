<template>
  <div class="chines clearfix">
  <div class="nav">
    <router-link active-class="active" class = "nav-item" to="/home/chinese/top">补下句</router-link>
     <router-link active-class="active" class = "nav-item" to = "/home/chinese/bottom">补上句</router-link>
     <router-view></router-view>
  </div>
  </div>
</template>

<script>
export default {
name:"Chinese",
mounted(){
  this.$router.push("/home/chinese/top")
}
}
</script>

<style scoped>
.clearfix{
  content:"";
  display:block;
  clear: both;
}
.chinese{
  width:1250px;
  height:500px;
  margin: 0 auto;
}
.nav{
  width:100%;
  height:50px;
}
.active{
  background-color: black;
  color:#fff !important;
}
.nav-item{
  float:left;
  width:50%;
  height:50px;
  line-height:50px;
  text-align: center;
  color:#000;
}
</style>
<template>
  <div class = "header clearfix">
    <div class="utils">
       <router-link to="/home" class = "util">学习园地</router-link>
        <router-link to = "/login" class = "util">登录</router-link>
        <router-link to = "/register" class = "util">注册</router-link>
        <router-link to = "/sorce" class = "util">成绩信息</router-link>
        <router-link to = "/rank" class = "util">排名信息</router-link>
         <router-link to = "/article" class = "util">日记</router-link>
    </div>
    <div class="search">
      <input type="text" class = "search-item" v-model = "key" placeholder="输入关键字搜索科目或者日记" @keyup.enter = "search">
    </div>
  </div>
</template>

<script>
export default {
name:"Header",
data(){
  return{
    key:""
  }
},
methods:{
  search(){
    if(this.key == "语文"){
     this.$router.push("/home/chinese")
    }else if(this.key == "数学"){
    this.$router.push("/home/math")
    }else if(this.key == "英文"){
      this.$router.push("/home/english")
    }else if(this.key == "日记"){
      this.$router.push("/home/note")
    }else if(this.key.trim() != ""){
      this.$router.push(`/article/${this.key}`)
    }

}
}
}
</script>

<style scoped>
.header{
    width:1250px;
    height:50px;
    margin: 0 auto;
    background-color: #f47983;
    line-height: 50px;
}
.clearfix{
  content: "";
  display: block;
  clear: both;
}
.utils,.search{
  width:50%;
  box-sizing: border-box;
  padding:  0 50px 0 50px;
  height:50px;
  line-height: 50px;
  float: left;
}
.util{
  color:#fff;
  margin-right:30px ;
  font-weight: bold;
}
.search-item{
  border:none;
  width:250px;
  height:40px;
  line-height: 40px;
  color:#000;
  background-color: #fff;
  font-weight: bolid;
  font-size: 15px;
  padding-left:15px ;
  border-radius:5px;
}

</style>
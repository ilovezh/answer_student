<template>
  <div class = "title">
  <textarea class = "note" placeholder="开启您今天的学习与心情记录吧" v-model = "value"></textarea>
  <div class="submit" @click = "submit">提交您今天的记录</div>
  </div>
</template>

<script>
import getInfo from "@/utils/getInfo"
import saveInfo from "@/utils/saveInfo"
import getCurrtime from "@/utils/getCurrtime"
export default {
name:"Note",
data(){
  return{
    value:""
  }
},
methods:{
  submit(){
    let persons = getInfo();
    persons.forEach(item=>{
      if(item.status){
        if(this.value.trim() !== ""){
        item.note.unshift({note:this.value,time:getCurrtime()})
        }
      }
    })
    if(this.value.trim() !== ""){
      saveInfo(persons)
      this.$router.push("/article")
    }
    }
}
}
</script>

<style scoped>
.title{
  width:100%;
  height:520px;
  margin: 0 auto;
  border:1px solid #008c8c;
  box-sizing: border-box;
}
.note{
width:100%;
height:480px;
line-height: 30px;
font-size: 25px;
overflow: auto;
resize: none;
/* 禁止拖拽 textarea标签的大小 */
}
.submit{
  width:100%;
  height:49px;
  height:49px;
  font-size:20px;
  text-align: center;
}
</style>
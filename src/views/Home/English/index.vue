<template>
  <div class = "english">
  <a :href="src"><span>点击观看视频</span>
  </a>
  <div  v-if = "!flag" class = "alert">
    <button class = "btn" @click = "getResult">请您签到</button>
  </div>
  </div>
</template>

<script>
import getInfo from '@/utils/getInfo'
import saveInfo from '@/utils/saveInfo'
import getCurrtime from '@/utils/getCurrtime'
export default {
name:"english",
data(){
  return{
    src:"https://www.bilibili.com/video/BV1ef4y1E7wV?spm_id_from=333.337.search-card.all.click&vd_source=bf7b52e6dadc712ca20b9389d585e9f2",
    result:0,
    flag:false
  }
},
methods:{
getResult(){
  this.flag = true;
  this.result += 100
  let persons = getInfo();
  persons.forEach(item=>{
    if(item.status){
      item.english.unshift({result:this.result,time:getCurrtime()})
    }
  })
  saveInfo(persons)
}
}
}
</script>

<style scoped>
.english{
  width:100%;
  height:520px;
  background: url("./images/bac1.jpeg") no-repeat;
  background-size:100% 100%;
  line-height: 500px;
  text-align: center;
  position: relative;
}
a{
    color:blue;
    font-size:50px;
}
.alert{
  position: absolute;
  top:0;
  left:0;
  width:100%;
  height:520px;
  background-color: rgba(0,0,255,.2);
}
.btn{
  position: absolute;
  width:200px;
  height:50px;
  line-height: 50px;
  border:none;
  font-size: 30px;
  background: none;
  background-color: orange;
  color:#fff;
  left:0;
  right:0;
  top:0;
  bottom:0;
  margin:auto;
}

</style>
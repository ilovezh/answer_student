<template>
<div class = "all clearfix">
    <div class="todo" @click = "todo">
    去做题
</div>
  <div class = "rank-sorce">
<div class="math">
   <div class="show" v-for="result in math" :key=result.time>
    您的数学成绩
     <span class = "important" v-if = "result.add"> <span class = "module">(加法模块)是</span>{{result.add}}</span>
     <span class = "important" v-if = "result.div"><span class = "module">(加法模块)是</span>是{{result.div}}</span>
     <span class = "important" v-if = "result.mul"><span class = "module">(加法模块)是</span>{{result.mul}}</span>
     <span class = "important" v-if = "result.mod"><span class = "module">(加法模块)是</span>{{result.mod}}</span>
     <span class = "important" v-if = "result.random"><span class = "module">(加法模块)是</span>{{result.random}}</span>
     做题时间是
     <span class = "important">{{result.time}}</span></div>
    </div>
<div class="chinese">
     <div class="show" v-for="result in chinese" :key=result.time>
    您的语文成绩
     <span class = "important">是{{result.chinese}}</span>
    做题时间是
     <span class = "important">{{result.time}}</span></div>
</div>
<div class="english">
      <div class="show" v-for="result in english" :key=result.time>
    您的英文成绩
     <span class = "important">是{{result.result}}</span>
    签到时间是
     <span class = "important">{{result.time}}</span></div>
</div>
  </div>

<div class="torank" @click = "torank">
  去看排名
</div>
</div>

</template>

<script>
import getInfo from "@/utils/getInfo"
import saveInfo from "@/utils/saveInfo"
export default {
name:"Rank",
data(){
    return{
            math:[],
            chinese:[],
            english:[],
             }
    },
mounted(){
  let persons = getInfo();
  let currPerson = persons.filter(item=>{
    return item.status == true
  })[0]
  let {math,chinese,english} = currPerson;
  this.math = math;
  this.chinese = chinese;
  this.english = english;
},
methods:{
    todo(){
        this.$router.push("/home")
    },
    torank(){
         this.$router.push("/rank")
    }
}
}
</script>

<style scoped>
.all{
    width:1250px;
    height:700px;
    margin: 0 auto;
}
.clearfix{
    content:"";
    display: block;
    clear: both;
}
.todo,.torank{
    width:20%;
    float: left;
    height:675px;
    line-height: 670px;
    font-size:50px;
    text-align: center;
    color:#fff;
    font-weight: bold;
}
.todo{
    background: url("./images/bac1.jpeg") no-repeat;
    background-size: 100% 100%;
}
.torank{
  background: url("./images/bac2.jpeg") no-repeat;
  background-size: 100% 100%;   
}

.rank-sorce{
    width:60%;
    height:100%;
    float: left;
}
.math,.chinese,.english{
    margin: 5px auto;
    width:100%;
    height:200px;
    overflow: auto;
    border:2px dashed orange;
    box-shadow: 2px 2px 2px red;
    margin-top:20px;
}
.show{
    width:100%;
    height:30px;
    text-align: center;
    font-size:16px;
    box-sizing: border-box;
    color:blue;
}
.module{
     color:blue;
     font-size:16px;
}

.important{
    color:green;
    font-size:18px;
}
</style>
<template>
 <div class="rank clearfix">
  <div class="btn" @click= "go" v-if = "(chinese >= level || math >= level || english >= level)">您的成绩获得了抽奖机会,去抽奖吧</div>
<div class="chinese">
  <h1 class = "title">语文</h1>
    <div class="info" :class = "{curr:result.status}" v-for = "(result,index) in chineseRank" :key = "index"><span>{{index + 1}}:     </span><span v-if = "result.status">尊敬的</span>{{result.name}} <span v-if = "result.status">您</span>的语文排名为{{index + 1}}  成绩为{{result.result}}</div>
</div>
<div class="math">
  <h1 class = "title">数学</h1>
  <div class="info" :class = "{curr:result.status}" v-for = "(result,index) in mathRank" :key = "index"><span>{{index + 1}}:     </span><span v-if = "result.status">尊敬的</span>{{result.name}} <span v-if = "result.status">您</span>的数学排名为{{index + 1}}  成绩为{{result.result}}</div>
</div>
<div class="english">
  <h1 class = "title">英语</h1>
   <div class="info" :class = "{curr:result.status}" v-for = "(result,index) in englishRank" :key = "index"><span>{{index + 1}}:     </span><span v-if = "result.status">尊敬的</span>{{result.name}} <span v-if = "result.status">您</span>的英语排名为{{index + 1}}  成绩为{{result.result}}</div>
</div>
 </div>
</template>

<script>
import getInfo from "@/utils/getInfo"
import saveInfo from '@/utils/saveInfo'
export default {
name:"Rank",
mounted(){
let persons = getInfo();
console.log(persons);
let mathRank = [];
let chineseRank = [];
let englishRank = [];
let flag = persons.some(item=> item.status == true)
if(flag){
  // 判断当前是否有人登录,不登录时无法查看排名
persons.forEach(item=>{
  if(item.status){
  this.chinese = item.chinese.reduce((prev,curr)=>{
  if(curr.chinese == "零分") curr.chinese = 0;
   return prev + curr.chinese
  },0)
  }
 
 let chinese =  item.chinese.reduce((prev,curr)=>{
  if(curr.chinese == "零分") curr.chinese = 0;
   return prev + curr.chinese
  },0)
  chineseRank.push({name:item.name,result:chinese,status:item.status})
})
chineseRank = chineseRank.sort((a,b)=>b.result -a.result)
this.chineseRank = chineseRank

persons.forEach(item=>{
  if(item.status){
  this.english = item.english.reduce((prev,curr)=>{
   return prev + curr.result
  },0)
  }

 let english =  item.english.reduce((prev,curr)=>{
   return prev + curr.result
  },0)
  englishRank.push({name:item.name,result:english,status:item.status})
})
englishRank = englishRank.sort((a,b)=>b.result -a.result)
this.englishRank = englishRank


persons.forEach(item=>{
  
  item.math.forEach(curr=>{
  if(curr.add == "零分" || curr.add == undefined){curr.add = 0};
  if(curr.div == "零分" || curr.div == undefined){curr.div = 0};
  if(curr.mul == "零分" ||  curr.mul == undefined){curr.mul = 0};
  if(curr.mod == "零分" || curr.mod == undefined){curr.mod = 0};
  if(curr.random == "零分" || curr.random == undefined){curr.random = 0};
  })
  console.log(item.math)
  if(item.status){
 this.math = item.math.reduce((prev,curr)=>{
   return prev + (curr.add || curr.div || curr.mul || curr.mod || curr.random)
  },0)
  }
 let math =  item.math.reduce((prev,curr)=>{
   return prev + (curr.add || curr.div || curr.mul || curr.mod || curr.random)
  },0)
  mathRank.push({name:item.name,result:math,status:item.status})
})
mathRank = mathRank.sort((a,b)=>b.result -a.result)
this.mathRank = mathRank
console.log(mathRank)
}

 if(!localStorage.getItem("level")){
    let level = this.level
    localStorage.setItem("level",level)
    }else{
      let value = localStorage.getItem("level")
      this.level = +value + 500
      let newValue = this.level;
      localStorage.setItem("level",newValue)
    }
},
data(){
  return{
    mathRank:[],
    chineseRank:[],
    englishRank:[],
    chinese:0,
    math:0,
    english:0,
    level : 500
  }
},
methods:{
  go(){
    this.$router.push("/madel")
  }
}
}
</script>

<style scoped>
.clearfix{
  content:"";
  display:block;
  clear: both;
}
.rank{
  width:1250px;
  height:700px;
  margin:auto;
  border:1px solid #000;
  box-sizing: border-box;
}
.chinese,.math,.english{
  width:33.2%;
  height:100%;
  float:left;
 border-right:1px solid #fff;
 overflow: auto;
}
.btn{
  width:300px;
  height:50px;
  text-align:center;
  line-height:50px;
  position: fixed;
  /* 相对于浏览器可视窗口定位 */
  left:0;
  right:0;
  margin:0 auto;
  bottom:0px;
  background-color: orange;
  color:#fff;
}
.title{
  width:100%;
  height:50px;
  line-height: 50px;
  text-align: center;
  color:gold;
}
.curr{
  background-color: #008c8c;
  color:#fff;
}
</style>
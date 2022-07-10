<template>
  <div class="madel">
   <div class="roate" ref = "rotate">
    欢迎您抽奖
    <div class="line line1"></div>
    <div class="line line2"></div>
    <div class="line line3"></div>
             
      <div class="item1 item">未中奖</div>
      <div class="item2 item">吹乐器半小时</div>
      <div class="item3 item">给妈妈按摩半小时</div>
      <div class="item4 item">买一个小零食</div>
      <div class="item5 item">未中奖</div>
      <div class="item6 item">再抽一次</div>
   </div>
<div class="point"></div>
<div class="circle" @click = "chow">
   点击
</div>
<div class="angle"></div>
  </div>
</template>

<script>
import random from '@/utils/random'
export default {
name:"Madel",
data(){
    return{
        deg:0,
    }
}
,
methods:{
    chow(){
 let timer =  setInterval(()=>{
    let n = random(180,360);
    this.deg += n;
  this.$refs.rotate.style.transform = `rotate(${n}deg)`
  if(this.deg >= 2000){
    clearInterval(timer)
    this.deg = 0;
  }
  },300)

  
    }
}
}
</script>

<style scoped>
.line{
    width:500px;
    height:1px;
    position: absolute;
    top:0;
    bottom:0;
    margin: auto 0;
    background-color: orange;
}
.line1{
    transform: rotate(60deg);
}
.line2{
    transform: rotate(300deg);
}

.item{
    width:150px;
    height:150px;
    line-height: 150px;
    text-align: center;
    font-size: 20px;
    color:black;

}
.item1{
    position: absolute;
    top:100px;
    left:50px;
    transform: rotate(30deg);
}
.item2{
    position: absolute;
    top:5px;
    left:180px;
    transform: rotate(90deg);
}
.item3{
    position: absolute;
    top:100px;
    left:310px; 
    transform: rotate(-30deg);
}
.item4{
    position: absolute;
    top:250px;
    left:50px; 
    transform: rotate(-30deg);
}
.item5{
    position: absolute;
    top:280px;
    left:330px; 
     transform: rotate(30deg);
}
.item6{
    position: absolute;
    top:320px;
    left:180px; 
    transform: rotate(90deg);
}
.madel{
    width:1250px;
    height:600px;
    margin:0px auto;
    box-sizing: border-box;
    padding-top: 10px;
    position: relative;
    overflow: hidden;
    background-color: pink;
}
.roate{
    width:500px;
    height:500px;
    position: absolute;
    left:0;
    right:0;
    top:0;
    bottom:0;
    margin: auto;
    border:10px solid #fff;
    border-radius:50%;
    font-size: 100px;
    line-height: 500px;
    text-align: center;
    color:#fff;
}
.circle{
position:absolute;
left:0;
right:0;
top:0;
bottom:0;
margin:auto;
width:80px;
height:80px;
border:1px solid #333;
border-radius:50%;
background-color:purple;
line-height: 80px;
text-align: center;
color:#fff;

}
.point{
    width:10px;
    height:60px;
    position:absolute;
    left:0;
    right:0;
    top:200px;
   margin: 0 auto;
   background-color: orange;
}
.angle{
    position: absolute;
      left:0;
      right:0;
    top:190px;
    width:0px;
    height:0px;
    margin: 0 auto;
    border:6px solid #333;
    border-top:6px solid transparent;
    border-left:6px solid transparent;
    border-right:6px solid transparent;
}
    
</style>
<template>
  <div class = "chinese">
      <div class="alert" v-if = "curr == 10">
    <div class="msg">
    恭喜您做完题,您的成绩是<span class = "result">{{result}}</span>
    <button class = "msg-left" @click = "toRank">查看更多成绩信息</button>
    <button class = "msg-right" @click = "restart">再来一次</button>
</div>
</div>
  <div class="content">
    <div class="tip" v-if = "flag1">
    {{p1}},    {{answers[n1]}}
    </div>
  <span class = "txt">{{p1}} </span> , <input type = "text" placeholder="请输入下一句" v-model = "value1" />  <button class = "awe" @click = "show('1')">查看答案</button>
 </div>
   <div class="content">
      <div class="tip"  v-if = "flag2">
       {{p2}}, {{answers[n2]}}
    </div>
 <span class = "txt">{{p2}} </span> ,  <input type = "text" placeholder="请输入下一句" v-model = "value2"   />   <button class = "awe"  @click = "show('2')">查看答案</button>
   </div>
   <div class="content">
      <div class="tip"  v-if = "flag3">
      {{p3}}  {{answers[n3]}}
    </div>
 <span class = "txt">{{p3}} </span> ,     <input type = "text" placeholder="请输入下一句" v-model = "value3"  /> <button class = "awe"  @click = "show('3')">查看答案</button>
   </div>
   <div class="content">
    <button class = "left" @click = "prev" :style="{backgroundColor:curr < 1 ? '#ccc' : '#fff'}">上一页</button>
    <button class = "right" @click = "next"  :style="{backgroundColor:curr >= 10 ? '#ccc' : '#fff'}">下一页</button>
   </div>
  </div>
</template>

<script>
import getInfo from '@/utils/getInfo'
import random from '@/utils/random'
import saveInfo from '@/utils/saveInfo'
export default {
name:"Bottom",
data(){
  return{
    n1:"",
    n2:"",
    n3:"",
    p1:"",
    p2:"",
    p3:"",
    value1:"",
    value2:"",
    value3:"",
    poems:["荷尽已无擎雨盖","一年好景君须记","远上寒山石径斜",
    "停车坐爱枫林晚","少小离家老大回","儿童相见不相识","李白乘舟将欲行",
    "桃花潭水深千尺","离离原上草","野火烧不尽","篱落疏疏一径深",
    "儿童急走追黄蝶","日照香炉生紫烟","飞流直下三千尺",
    "两个黄鹂鸣翠柳","窗含西岭千秋雪","白毛湖绿水","远看山有色","春去花还在","小时不识月",
     "解落三秋叶","春眠不觉晓","夜来风雨声","小荷才露尖尖角","遥知不是雪","路人借问遥招手","白日依山尽" ],
    answers:["菊残犹有傲霜枝","最是橙黄橘绿时","白云生处有人家",
    "霜叶红于二月花","乡音无改鬓毛催","笑问客从何处来","忽闻岸上踏歌声",
    "不及汪伦送我情","一岁一枯荣","春风吹又生","树头花落未成阴",
    "飞入菜花无处寻","遥看瀑布挂前川","疑是银河落九天","一行白鹭上青天",
    "门泊东吴万里船","红掌拨清波","近听水无声","人来鸟不惊","呼作白玉盘"," 能开二月花","处处闻啼鸟","花落知多少","早有蜻蜓立上头",
    "为有暗香来","怕得鱼惊不应人"," 黄河入海流"],
    history:[],
    curr:0,
    result:0,
    flag1:false,
    flag2:false,
    flag3:false
  }
},
methods:{
render_poem(){
  this.n1 = random(0,this.poems.length - 1)
  this.n2 = random(0,this.poems.length - 1)
  this.n3 = random(0,this.poems.length - 1)
  if(this.n1 != this.n2 && this.n1!= this.n3 && this.n2 != this.n3){
    this.p1 = this.poems[this.n1]
    this.p2 = this.poems[this.n2]
    this.p3 = this.poems[this.n3]
  }else{
    this.render_poem();
  }
},
show(num){
  if(num == 1){
    this.flag1 = true
  }
  if(num == 2){
   this.flag2 = true
  }
  if(num == 3){
   this.flag3 = true
  }
},
prev(){
  if(this.curr >= 1){
     this.curr --;
    let currObj =  this.history[this.curr];
      this.n1 = currObj.n1
      this.n2 = currObj.n2
      this.n3 = currObj.n3
      this.p1 = currObj.p1;
      this.value1 = currObj.v1;
      this.p2 = currObj.p2;
      this.value2 =  currObj.v2;
      this.p3 = currObj.p3;
      this.value3 =  currObj.v3;
  }else{
    let currObj =  this.history[this.curr];
      this.n1 = currObj.n1
      this.n2 = currObj.n2
      this.n3 = currObj.n3
      this.p1 = currObj.p1;
      this.value1 = currObj.v1;
      this.p2 = currObj.p2;
      this.value2 =currObj.v2;
      this.p3 = currObj.p3;
      this.value3 = currObj.v3;
  }

},
next(){
  if(this.curr <= 9){
      this.flag1 = false
     this.flag2 = false
      this.flag3 = false
    this.getResult();
    if((this.history.length - 1) == this.curr){
    this.curr ++;
    this.render_poem()
      let preObj = this.history[this.curr - 1];
      preObj.v1 = this.value1;
      preObj.v2 = this.value2;
      preObj.v3 = this.value3;
     let historyObj = {n1:this.n1,n2:this.n2,n3:this.n3,p1:this.p1,v1:"",p2:this.p2,v2:"",p3:this.p3,v3:"",f1:false,f2:false,f3:false}
    this.history.push(historyObj)
    this.value1 = "";
    this.value2 = "";
    this.value3 = "";
    }else{
      this.curr ++;
     let currObj =  this.history[this.curr];
      this.n1 = currObj.n1
      this.n2 = currObj.n2
      this.n3 = currObj.n3
      this.p1 = currObj.p1;
      this.value1 = currObj.v1;
      this.p2 = currObj.p2;
      this.value2 =  currObj.v2;
      this.p3 = currObj.p3;
      this.value3 = currObj.v3;
     }
  }
},
getResult(){
        let obj = this.history[this.curr];
        if(this.value1 == this.answers[this.n1] &&   !obj.f1){
          // 设置布尔值从而可以使加分环节只在第一次处于当前页时,点击下一页后执行一次,从而不会在倒退到该页后再点击下一页后再执行一次
            this.result += 10
            obj.f1 = true
         }
          if(this.value2 == this.answers[this.n2] &&  !obj.f2){
          this.result += 10
          obj.f2 = true
         }
          if(this.value3 == this.answers[this.n3] && !obj.f3 ){
          this.result += 10
          obj.f3 = true
         
    }
},
  restart(){
        console.log(1)
        this.$router.push("/home/chinese")
    },
    toRank(){
        this.$router.push("/sorce")
    }

},
mounted(){
  this.render_poem()
  let historyObj = {n1:this.n1,n2:this.n2,n3:this.n3,p1:this.p1,v1:this.value1,p2:this.p2,v2:this.value2,p3:this.p3,v3:this.value3,f1:false,f2:false,f3:false}
  this.history.push(historyObj)

},
watch:{
    //监视属性,newValue为组件实例上的result属性的最新值,可以根据result最新值的变化做一些操作
    // 这里表示result的最新值为10时做的操作
    // watch监视属性可以持续监视组件实例上属性的属性值变化
    curr(newValue,oldValue){
        if(newValue == 10){
         let persons = getInfo();
         persons.forEach(item=>{
            if(item.status == true){
                let date = new Date();
                let year = date.getFullYear();
                let month = date.getMonth()
                let day = date.getDate()
                let hour = date.getHours();
                let minute = date.getMinutes();
                let second = date.getSeconds();
                let time = `${year}年${month + 1}月${day}日${hour}时${minute}分${second}秒`
                if(this.result == 0){
                   this.result = "零分"
                }
                console.log(1)
                 item.chinese.unshift({chinese:this.result,time,})
            }
         })
         saveInfo(persons)
        }
    },
    value1(newValue){
      let currObj =  this.history[this.curr];
      currObj.v1= this.value1
   },
    value2(newValue){
      let currObj =  this.history[this.curr];
      currObj.v2= this.value2
   },
    value3(newValue){
      let currObj =  this.history[this.curr];
      currObj.v3= this.value3
   }
}
}
</script>

<style scoped>
.chinese{
  width:100%;
  height:460px;
  border:1px solid #000;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
}
.content{
    position: relative;
  flex:1;
  border-bottom:1px solid #ccc;
  line-height: 100px;
}
.tip{
    position: absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    line-height: 100px;
    background-color: #fff;
    text-align: center;
    color:#000;
    font-size: 25px;
}
input{
  width:300px;
  border:none;
  border-bottom:1px solid #ccc;
  height:50px;
  line-height:50px;
  font-size:25px;
  margin-left: 50px;
}
button{
  width:200px;
  background: none;
  border:1px solid red;
  box-shadow: 2px 2px 2px blue;
  height:30px;
  line-height: 30px;
  text-align:center;
}
.awe{
    margin-right:80px;
}
.txt{
    font-size: 30px;
    margin-left: 30px;
}
.left,.right{
    display: inline-block;
    margin-left:200px;
}
.msg{
    position: absolute;
    left:50%;
    top:50%;
    width:50%;
    height: 48%;
    transform: translate(-50%,-50%);
    line-height: 48%;
    color:gold;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    box-sizing: border-box;
}
.msg-left{
position: absolute;
top:80%;
left:5%;
width:30%;
height:50px;
line-height: 50px;
background: none;
font-size: 17px;
color:#000;
background-color: #fff;
}
.msg-right{
position: absolute;
top:80%;
width:30%;
height:50px;
line-height: 50px;
background: none;
font-size: 17px;
right:5% ;
color:#000;
background-color: #fff;
}
.result{
    font-size:35px;
    font-style: italic;
}
.alert{
    position: absolute;
    top:0;
    left:0;
    width:100%;
    height:490px;
    background-color: rgb(251, 11, 147,0.5);
    z-index:99;
}
</style>
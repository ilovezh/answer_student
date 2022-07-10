<template>
  <div class = "add">
    <div class="alert" v-if = "count == 10">
<div class="msg">
    恭喜您做完题,您的成绩是<span class = "result">{{result}}</span>
    <button class = "left" @click = "toRank">查看更多成绩信息</button>
    <button class = "right" @click = "restart">再来一次</button>
</div>
    </div>
  <div class="add-main">
    <div class="main-area">
        {{n1}} /  {{n2}} =  <input type = "text" placeholder="请输入结果" class = "input" v-model = "value" @keyup.enter = "getresult"/>
   </div>
   
  </div>
  <div class="add-btn">
    <button @click = "prev" class = "btn btn1" :style = "{backgroundColor:count<1 ? 'gray' : 'green'}">上一题</button>
    <button @click = "next" class = "btn btn2"  :style = "{backgroundColor:count> 9 ? 'gray' : 'green'}">下一题</button>
  </div>
  </div>
</template>

<script>
import random from "@/utils/random"
import saveInfo from "@/utils/saveInfo"
import getInfo from "@/utils/getInfo"
export default {
name:"Add",
data(){
    return{
        n1:"",
        n2:"",
        nums:[],
        result:0,
        count:0,
        value : "",
    }
},
methods:{
    render_num(){
    this.n1 = random(0,81)
    this.n2 = random(0,9)
    if(this.n2 != 0 && (this.n1/this.n2 < 9) &&(this.n1 >= this.n2)){
 this.nums.push({n1:this.n1,n2:this.n2,flag:false})
    }else{
        this.render_num()
    }
    },
    prev(){
    if(this.count >= 1){
    this.count --;
      this.n1 = this.nums[this.count].n1;
      this.n2 = this.nums[this.count].n2;
      this.value = this.nums[this.count].result
    }
    },
    next(){
        if(this.count <= 9){
             this.nums[this.count].result = this.value;
         if(this.result == "零分"){
            this.result = 0;
           }
        let obj = this.nums[this.count]
        if(+this.value == Math.floor(this.n1 / this.n2) && !obj.flag){
            this.result += 10
            obj.flag = true
        }
        if(this.nums.length - this.count == 1){
      this.render_num();
       this.count ++;
        }else{
           this.count ++;
          this.n1 = this.nums[this.count].n1;
          this.n2 = this.nums[this.count].n2;
       }
        }
         this.value = "";
    },
    getresult(){
        this.next()
    },
    restart(){
        console.log(1)
        this.$router.push("/home/math")
    },
    toRank(){
        this.$router.push("/sorce")
    }
},
mounted(){
    this.render_num()
},
watch:{
    //监视属性,newValue为组件实例上的result属性的最新值,可以根据result最新值的变化做一些操作
    // 这里表示result的最新值为10时做的操作
    // watch监视属性可以持续监视组件实例上属性的属性值变化
    count(newValue,oldValue){
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
                 item.math.unshift({mod:this.result,time,})
            }
         })
         saveInfo(persons)
        }
    }
}
}
</script>

<style scoped>
.add{
    width:100%;
    height:100%;
    padding: 10px;
    box-sizing: border-box;
    position: relative;
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
.result{
    font-size:35px;
    font-style: italic;
}
.left{
position: absolute;
top:80%;
left:5%;
width:30%;
height:50px;
line-height: 50px;
background: none;
font-size: 17px;
}
.right{
position: absolute;
top:80%;
width:30%;
height:50px;
line-height: 50px;
background: none;
font-size: 17px;
right:5% ;
}
.add-main{
    width:98%;
    height:300px;
    line-height: 300px;
}
.main-area{
    width:100%;
    height:200px;
    line-height:200px;
    border:2px solid orange;
    box-shadow: 8px 8px 8px red;
    font-size:100px;
}
.input{
    display: inline-block;
    width:300px;
    height:100px;
    font-size:50px;
    line-height: 100px;
    color:#000;
    border:none;
    border-bottom:1px solid pink;
}
.input:focus{
    border-bottom:1px solid blue;
}
.add-btn{
    width:100%;
    position: relative;
}
.btn{
    width:150px;
    height:50px;
    line-height:50px;
    border:none;
    background-color: green;
    color:#ccc;
    position: absolute;
    box-shadow: 5px 5px 5px blue;
    font-size:20px;
    border-radius:10px;
}
.btn1{
    left:100px;
}
.btn2{
    right:100px;
}
</style>
<template>
  <div class = "article">
   <div class="info">
    <h1 class = "title">{{note[index].time}}</h1>
    <div class="show">
      {{note[index].note}}
    </div>
   </div>
    <div class="info1">
    <h1 class = "title">{{note[index+1].time}}</h1>
    <div class="show">
      {{note[index+1].note}}
    </div>
   </div>
  
   <div class="btn">
    <button class = "left" @click = "prev">上一页</button>
    <button class = "right" @click = "next">下一页</button>
    <input type="text" placeholder="搜索想要日记" class="search" v-model = "key" @keyup.enter = "search">
   </div>
  </div>
</template>

<script>
import getInfo from '@/utils/getInfo'
export default {
name:"Article",
mounted(){
  let persons = getInfo();
  persons.forEach(item=>{
    if(item.status){
      this.note = item.note
       this.note1 = item.note;
    }
  })
  this.note.forEach(item=>{
    if(typeof item != "object"){
      item = {};
    }
  })
  if(this.note.length == 1){
    this.note[1] = {time:"----",note:"暂无更多日记"}
  }
  if(this.note.length == 0){
      this.note[0] = {time:"----",note:"暂无更多日记"}
      this.note[1] = {time:"----",note:"暂无更多日记"}
    }
  if(this.$route.params.key){
    console.log(this.$route.params.key)
    this.note = this.note.filter(item=>item.note.indexOf(this.$route.params.key) != -1 || item.time.indexOf(this.$route.params.key) != -1) 
    if(this.note.length == 0){
      this.note[0] = {time:"----",note:"暂无更多日记"}
      this.note[1] = {time:"----",note:"暂无更多日记"}
    }
    if(this.note.length == 1){
      this.note[1] = {time:"----",note:"暂无更多日记"}
   }
  }
  },
data(){
  return{
    note:[],
    index:0,
    key:"",
    note1:[]
  }
},
methods:{
  prev(){
   if(this.index >= 1){
    this.index --;
   }
  },
  next(){
    if((this.index+2)<= (this.note.length - 1)){
      this.index ++;
    }else{
      this.note[this.index + 2] =  {time:"----",note:"暂无更多日记"}
    }
  },
  search(){
      this.note = this.note1.filter(item=>item.note.indexOf(this.key) != -1 || item.time.indexOf(this.key) != -1)
       if(this.note.length == 0){
      this.note[0] = {time:"----",note:"暂无更多日记"}
      this.note[1] = {time:"----",note:"暂无更多日记"}
    }
    if(this.note.length == 1){
      this.note[1] = {time:"----",note:"暂无更多日记"}
   }
   this.key = ""
  }
},

  
}
</script>

<style scoped>
.article{
  width:1250px;
  height:600px;
  margin:0 auto;
  box-sizing: border-box;
  border:1px solid #000;
  position: relative;
  /* background: url("./images/bac1.jpeg")  no-repeat;
  background-size: 100% 100%;
  opacity: 0.5; */
}
.info,.info1{
  top:0;
  width:90%;
  height:42%;
  position: absolute;
  left:0;
  right:0;
  margin: 0 auto;
  border-bottom: 1px solid #000;
  box-sizing: border-box;
  overflow: auto;
}
.info1{
top:260px;
}
.title{
  width:100%;
  height:40px;
  line-height: 50px;
  text-align:right;
  font-size:15px;
}
.show{
  width:100%;
  height: 200px;
  line-height: 30px;
  font-size: 20px;
}
.btn{
  width:100%;
  height:60px;
  line-height: 60px;
  position: absolute;
  top:500px;
}
button{
  position: absolute;
  width:100px;
  top:30px;
  background: none;
  height:30px;
  line-height:30px;
  border:none;
  border-radius:10px;
  border:2px solid blue;
  box-shadow: 2px 2px 2px black;
}
.left{
  left:100px;
}
.right{
  right: 100px;
}
.search{
  position: absolute;
  left:600px;
  top:50px;
  width:200px;
  height: 30px;
  line-height: 30px;
  padding-left: 15px;
  box-sizing: border-box;
  border:1px solid blue;
}

</style>
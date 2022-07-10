import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes"
import getInfo from '@/utils/getInfo'
Vue.use(VueRouter);
let originPush = VueRouter.prototype.push;
// 先将vueRouter原型对象的replace保存一份
let originReplace = VueRouter.prototype.replace;
// 重写push 与 replace方法
VueRouter.prototype.push = function(location,resolve,reject){
if(resolve && reject){
    // call || apply 区别:相同点,都可以调用函数一次,都可以篡改函数的上下文一次
    //不同点:call和apply传递参数,call传递参数用逗号分割,apply方法执行传递数组
    originPush.call(this,location)
}else{
    originPush.call(this,location,()=>{},()=>{});
}
}
VueRouter.prototype.replace = function(location,resolve,reject){
    if(resolve && reject){
        // call || apply 区别:相同点,都可以调用函数一次,都可以篡改函数的上下文一次
        //不同点:call和apply传递参数,call传递参数用逗号分割,apply方法执行传递数组
        originReplace.call(this,location)
    }else{
        originReplace.call(this,location,()=>{},()=>{});
    }
    }
    
let router =  new VueRouter({
    routes,
    scrollBehavior(to,from,savedPosition){
        //    返回的y = 0表示着跳转到路由组件时滚动条在最上方,即滚动条距离页面顶部的距离为 0 px
           return {x:0,y:0}
       }
})
// 全局守卫 ,前置守卫(在路由跳转之前进行判断)
router.beforeEach((to,from,next)=>{
    /*
    路由跳转之前都要执行router.beforeEach((to,from,next)=>{})内的代码
    */

    let persons =  getInfo()
    let flag = persons.some(item=>item.status == true)
    // 判断是否处于登录状态

   if(!flag && to.path == "/login"){
    // 如果跳往/login,且不处于登录状态 那么放行
    next();
   }

 
  if(flag && to.path == "/login"){
    next("/register")
  }
// 如果跳往/login,且处于登录状态,那么跳往/register

  if(to.path == "/register"){
    next()
  }
// 如果跳往/register,那么放行


   if(to.path != "/login" && to.path != "/register"){
    // 如果不跳往"/login"
    // 不处于登录状态时,跳往"/login"
    // 处于登录状态时,就放行
    if(!flag){
        next("/login")
    }else{
        next()
    }
    } 
    

    })
export default router;
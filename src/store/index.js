import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
import home from "@/store/home"
import login from "@/store/login"
import register from "@/store/register"
export default new Vuex.Store({
    modules:{
    home,
    login,
    register
    }
})
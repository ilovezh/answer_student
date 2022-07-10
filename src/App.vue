<template>
  <div id="app">
    <Header />
    <router-view></router-view>
    <Footer v-if = "$route.meta.show"/>
  </div>
</template>

<script>
import Header from "@/components/Header"
import "./App.css"
export default {
  name: 'App',
  components:{
    Header,
}
 
}
</script>



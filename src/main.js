import Vue from 'vue'
import App from './App'
import Index from './components/index'
import VueRouter from 'vue-router'
import myMusic from './components/pages/my-music.vue'

//const FastClick = require('fastclick')
//FastClick.attach(document.body)

Vue.use(VueRouter)

//const router = new VueRouter({
//	  routes: [
//  { path: '/', component: Index },
//  { path: '/my-music', component: myMusic }
//]
//})
const router = new VueRouter()

router.map({
  '/': {
    component: Index
  },
  '/my-music':{
  	component:myMusic
  }
})

router.start(App, '#app')
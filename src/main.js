import Vue from 'vue'
import App from './App.vue'
import sui from "./packages/index.js"
// import "./packages/styles/_var.scss"
// import "./packages/styles/icon.css"

Vue.use(sui)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

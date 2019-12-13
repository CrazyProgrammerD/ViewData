// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import ElementUI from 'element-ui'
import { Loading } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//AdminLTE
import './assets/css/adminlte.min.css'
import './assets/js/adminlte.min.js'
import 'font-awesome/css/font-awesome.min.css'
//Leaflet
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import './assets/js/leaflet.ChineseTmsProviders'
//highcharts
import Highcharts from 'highcharts'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Highcharts)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

Vue.prototype.openLoading = function (){
  const loading = this.$loading({ 
    lock: true, 
    text: '拼命加载中...', 
    spinner: 'el-icon-loading',
    background: 'rgba(255, 255, 255, 0.3)', 
    body: true,
    customClass: 'mask' 
  })
  setTimeout(function () { 
    loading.close(); 
  }, 5000)
  return loading;
}

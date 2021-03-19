import Vue from 'vue'
import App from './App.vue'
import router from './router'
//引入elmentui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

//是否浏览器控制台输出环境信息
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

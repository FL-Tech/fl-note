import { Button, Form, FormItem, Input, Popover, Tree } from 'element-ui'

import App from './App'
import Vue from 'vue'
import axios from 'axios'
import model from '../db/model'
import router from './router'
import store from './store'

// 挂载数据库
Vue.prototype.$model = model

// 引入element-ui组件
Vue.use(Tree)
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Popover)

// 注册全局指令

// 因为input的autofocus不好用，使用自定义指令实现
// 注册一个全局自定义指令 `v-focus`
Vue.directive('focus', {
  // 当被绑定的元素插入到 DOM 中时
  inserted: function (el) {
    // 聚焦元素
    setTimeout(() => {
      console.log('设置自动获取焦点focus')
      el.querySelector('input').focus()
    }, 100)
  }
})

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = true
Vue.config.performance = true
Vue.config.debug = true

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')

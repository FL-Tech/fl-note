import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'
import model from '../db/model'
import { Tree, Button, Form, FormItem, Input, Popover } from 'element-ui'

// 挂载数据库
Vue.prototype.$model = model

// 引入element-ui组件
Vue.use(Tree)
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Popover)

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')

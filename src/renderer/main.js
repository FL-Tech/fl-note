import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'
import db from '../db/datastore'
import { Tree } from 'element-ui'

// 挂载数据库
Vue.prototype.$db = db

// 引入element-ui组件
Vue.use(Tree)

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

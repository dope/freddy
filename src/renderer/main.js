import Vue from 'vue'
import App from './App'
import CmComponent from 'vue-codemirror/src/codemirror.vue'
import TreeView from 'vue-json-tree-view'

Vue.component('codemirror', CmComponent)
Vue.use(TreeView)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  template: '<App/>'
}).$mount('#app')

import Vue from 'vue'
import App from './App'
import TreeView from 'vue-json-tree-view'
import CmComponent from 'vue-codemirror-lite/codemirror.vue'
Vue.component('codemirror', CmComponent)

Vue.use(TreeView)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  template: '<App/>'
}).$mount('#app')

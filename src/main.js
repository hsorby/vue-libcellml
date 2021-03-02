import Vue from 'vue'
import App from './App.vue'

import libCellMLModule from 'libcellml.js'
import libCellMLWasm from 'libcellml.js/libcellml.wasm'

Vue.config.productionTip = false
Vue.prototype.$libcellml = null

const init = async () => {
  Vue.prototype.$libcellml = await new libCellMLModule({locateFile(path, prefix) {
    if(path === 'libcellml.wasm') {
      return libCellMLWasm
    }
    return prefix + path
  }});
  /* eslint-disable no-new */
  new Vue({
    render: h => h(App),
  }).$mount('#app');
};
 
init();

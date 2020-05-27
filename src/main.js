import Vue from 'vue'
import Buefy from 'buefy'

import App from './App.vue'

Vue.use(Buefy, {
	defaultIconPack: 'mdi',
	defaultContainerElement: '#app-content'
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

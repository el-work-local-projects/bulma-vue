import Vue from 'vue';
import App from './App.vue';
import router from './router';

import Buefy from 'buefy';

Vue.config.productionTip = false;

Vue.use(Buefy, {
	defaultIconPack: 'mdi',
	defaultContainerElement: '#app-content'
});


new Vue({
  render: h => h(App),
  router
}).$mount('#app')

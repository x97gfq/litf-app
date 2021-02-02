import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

import VModal from 'vue-js-modal'
Vue.use(VModal)

Vue.use(Vuex);

Vue.config.productionTip = false

const store = new Vuex.Store({
  state: {
      location: null
  },
  getters: {
    getLocation() {
      return store.state.location;
    }
  },
  mutations: {
      setLocation(state, location) {
          store.state.location = location;
      }
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

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
      location: null,
      animal_list: [],
      resource_list: []
  },
  getters: {
    getLocation() {
      return store.state.location;
    },
    getAnimalList() {
      return store.state.animal_list;
    },
    getResourceList() {
      return store.state.resource_list;
    }
  },
  mutations: {
    setLocation(state, location) {
        store.state.location = location;
    },
    setAnimalList(state, animal_list) {
      store.state.animal_list = animal_list;
    },
    setResourceList(state, resource_list) {
      store.state.resource_list = resource_list;
    }
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

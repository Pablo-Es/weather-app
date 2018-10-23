import map from './modules/map';
import Vuex from "vuex";
import Vue from 'vue'
import VuexPersist from 'vuex-persist'

Vue.use(Vuex);
const vuexPersist = new VuexPersist({
  key: 'weather-app',
  storage: window.localStorage
})
const store = new Vuex.Store({
  'modules': {
    'map': map,

  },
  plugins: [vuexPersist.plugin]
})

window.store = store;

export default store;

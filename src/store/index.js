import map from './modules/map';
import Vuex from "vuex";
import Vue from 'vue'

Vue.use(Vuex);

const store = new Vuex.Store({
  'modules': {
    'map': map,

  },
})

window.store = store;

export default store;

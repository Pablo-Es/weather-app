import map from './modules/map';
import Vuex from "vuex";

const store = new Vuex.Store({
  'modules': {
    'partners': partners,
    'map': map,
  },
})

window.store = store;

export default store;

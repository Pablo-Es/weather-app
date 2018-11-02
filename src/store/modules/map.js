import axios from 'axios'

import * as types from '../mutation-types'

let cancelToken = null
let timeoutToken = null

// initial state
const state = {

  cords: null,
  allLocations: [],
  one: null,
  searchTerm: '',
}
const filter = (store) => {

  let data = store.allLocations.slice();

  if(store.searchTerm) {

    const searchTerm = String(store.searchTerm).toLowerCase().trim();



    if (searchTerm.length === 0) {
      store.one = null;
      return data;
    }

    data = data.filter(item => {
      return  String(item.name).toLowerCase().includes(searchTerm);
    });
  }



  return data;
}

// getters
const getters = {
  getCoord: (state) => {
    return state.cords
  }
}

// actions
const actions = {
  setCord ({commit, state}, cords) {
    commit(types.LOCATIONS_CORD_SET, cords)
  },
  addToAll ({commit}) {
    commit(types.LOCATIONS_ALL_SET)
  },
  remove ({commit}, payload) {
    commit(types.LOCATIONS_REMOVE_ONE, payload)
  },
  fetchOne ({commit}, {lat, lng}) {
    axios
      .get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&APPID=ba74e775820c1854af18db066eb9d76e`)
      .then(data => {
        commit(types.LOCATIONS_ONE_SET, data
        )
      })
      .catch(data => console.log('something gone wrong'))
  },
  setSearchTerm( { commit, dispatch, state }, payload) {
    commit(types.SEARCH_TERM_SET, payload);
  },


}

// mutations
const mutations = {

  [types.LOCATIONS_ONE_SET] (state, data) {
    state.one = {
      data: data.data,
      notes: ''
    }
  },
  [types.SEARCH_TERM_SET] (state, payload) {
    state.searchTerm = payload;
    state.allLocations = filter(state);


  },

  [types.LOCATIONS_CORD_SET] (state, payload) {
    state.cords = payload
  },
  [types.LOCATIONS_ALL_SET] (state) {
    state.allLocations.push(state.one)
  },
  [types.LOCATIONS_REMOVE_ONE] (state, payload) {
    state.allLocations = payload
  }

}

export default {
  namespaced: true,

  state,
  getters,
  actions,
  mutations
}

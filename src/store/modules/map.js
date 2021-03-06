import axios from 'axios'

import * as types from '../mutation-types'

let cancelToken = null
let timeoutToken = null

// initial state
const state = {

  cords: null,
  allFiltered:[],
  allLocations: [],
  one: null,
  searchTerm: '',
  message: '',
  currentIdLoc:null,


}
const filter = (store) => {

let data = [...store.allLocations];

  if(store.searchTerm) {

    const searchTerm = String(store.searchTerm).toLowerCase().trim();



    data = data.filter(({data}) => {
      return  String(data.name).toLowerCase().includes(searchTerm);
    });
      console.log(data);

    if (searchTerm.length === 0) {

      return data;
    }
  }if(0 < (store.currentIdLoc && store.message)) {

    data = data.filter(({data}) => {

      return data.id === store.currentIdLoc.id
    })
      .map(({data}) => {
        return {
          data: data,
          note: store.message,
        }
      })
  }




  return data;
}

// getters
const getters = {
  getCoord: (state) => {
    return state.cords
  },
  getFocusedLoc: (state) => {
    return state.currentIdLoc
  },

}

// actions
const actions = {
  refreshData({commit, state}){
    const allCords = (state.allLocations.map(({data:{coord}}) => {
      axios
        .get(`http://api.openweathermap.org/data/2.5/weather?lat=${coord.lat}&lon=${coord.lon}&units=metric&APPID=ba74e775820c1854af18db066eb9d76e`)
        .then(data => {
          console.log(data);
        })
    }));
    return allCords;

  },

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
  setSearchTerm( { commit, state }, payload) {
    commit(types.SEARCH_TERM_SET, payload);
  },
  setCurrentIdLoc({ commit, state }, payload) {
    commit(types.SET_CURRENT_LOC, payload);
  },
  setNote({commit, state}, payload){
    commit(types.NOTE_TERM_SET, payload);
  },
  setMessageToLoc({commit, state}, payload) {
    commit(types.SET_MESSAGE_LOC, payload);
  }



}

// mutations
const mutations = {

  [types.LOCATIONS_ONE_SET] (state, {data}) {
    state.one = {
      data: data,
      notes: ''
    }
  },
  [types.SEARCH_TERM_SET] (state, payload) {
    state.searchTerm = payload;
    state.allFiltered = filter(state);


  },

  [types.SET_CURRENT_LOC] (state, payload) {
    state.currentIdLoc = payload;
    state.allFiltered = filter(state);
  },
  [types.SET_MESSAGE_LOC] (state, payload) {
    state.currentIdLoc = payload;
  },

  [types.LOCATIONS_CORD_SET] (state, payload) {
    state.cords = payload
  },
  [types.LOCATIONS_ALL_SET] (state) {
    state.allLocations.push(state.one)
    state.allFiltered = filter(state);
    state.one = null
  },
  [types.LOCATIONS_REMOVE_ONE] (state, payload) {
    state.allLocations = payload
    state.allFiltered = filter(state);
  },
  [types.NOTE_TERM_SET] (state, payload) {
    state.message = payload
    state.allFiltered = filter(state);
  }

}

export default {
  namespaced: true,

  state,
  getters,
  actions,
  mutations
}

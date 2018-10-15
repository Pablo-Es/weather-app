import axios from 'axios'

import * as types from '../mutation-types'

let cancelToken = null
let timeoutToken = null

// initial state
const state = {

  cords: null,
  all:[],
  one: null,
}

// getters
const getters = {
getCoord: (state) => {
  return state.cords;
},
}

// actions
const actions = {
  setCord ({commit, state}, cords) {

    commit(types.LOCATIONS_CORD_SET, cords)

  },
  addToAll({commit}) {
commit(types.LOCATIONS_ALL_SET)

},
  fetchOne ({commit}, {lat,lng}) {
    axios
      .get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&APPID=ba74e775820c1854af18db066eb9d76e`)
      .then(data => {
        commit(types.LOCATIONS_ONE_SET, data,
          )


      })
      .catch(data => console.log('something gone wrong'))
  }

}

// mutations
const mutations = {

  [types.LOCATIONS_ONE_SET] (state, data) {
    state.one = data.data
  },
  [types.LOCATIONS_CORD_SET] (state, payload) {
    state.cords = payload
  },
  [types.LOCATIONS_ALL_SET](state) {
    state.all.push(state.one)
  },


}

export default {
  namespaced: true,

  state,
  getters,
  actions,
  mutations
}

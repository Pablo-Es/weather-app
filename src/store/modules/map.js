import Locations from '../../api/Locations'

import * as types from '../mutation-types'

let cancelToken = null
let timeoutToken = null

// initial state
const state = {

  cords: null
}

// getters
const getters = {

}

// actions
const actions = {
  setCord ({commit}, cords) {
    console.log(cords)
    commit(types.LOCATIONS_CORD_SET, cords)
  },
  fetchAll ({commit}) {
    commit(types.LOCATIONS_ALL_SET, {
      items: []
    })
    return Locations
      .fetchAll(lat, lng)
      .then(data => {
        commit(types.LOCATIONS_ALL_SET, {
          items: data
        })
      })
  }

}

// mutations
const mutations = {

  [types.LOCATIONS_ALL_SET] (state, {items}) {
    state.all = state.all.concat(items)
  },
  [types.LOCATIONS_CORD_SET] (state, payload) {
    state.cords = payload
  }

}

export default {
  namespaced: true,

  state,
  getters,
  actions,
  mutations
}

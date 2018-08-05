import { SET_MENU_PANEL } from '../mutation-types/ui'

const state = {
  contextMenu: {
    show: false,
    x: 0,
    y: 0,
    width: 150,
    height: 200
  }
}

const mutations = {
  [SET_MENU_PANEL] (state, payload) {
    state.contextMenu = {
      ...state.contextMenu,
      ...payload
    }
  }
}

const actions = {
  someAsyncTask ({ commit }) {
    // do something async
    commit('INCREMENT_MAIN_COUNTER')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

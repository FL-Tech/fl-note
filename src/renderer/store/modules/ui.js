const state = {
  contextMenu: {
    show: false,
    x: 0,
    y: 0,
    width: 200,
    height: 400
  }
}

const mutations = {
  SET (state, payload) {
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

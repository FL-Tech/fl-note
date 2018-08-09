import { SET_MENU_PANEL, CLOSE_MENU_PANEL } from '../mutation-types/ui'

const state = {
  clientWidth: 1024, // 屏幕宽度
  clientHeight: 768, // 屏幕高度
  // 全局右键菜单
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
  },
  [CLOSE_MENU_PANEL] (state) {
    state.contextMenu.show = false
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

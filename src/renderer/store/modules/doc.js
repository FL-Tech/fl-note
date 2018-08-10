import { ADD_DOC } from '../mutation-types/doc'
import Doc from '@src/db/model/Doc'

const state = {
  docs: Doc.get()
}

const mutations = {
  [ADD_DOC] (state, newDoc) {
    state.docs.push(newDoc)
    Doc.add(newDoc)
  }
}

const actions = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

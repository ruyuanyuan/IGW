import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
  language:'zh',
}

const mutations = {
  languageChuang (state, value) {
    state.language = value.language
    console.log(state)
  },
}

const actions = {}

const store = new Vuex.Store({
  actions,
  state,
  mutations,
})
export default store;
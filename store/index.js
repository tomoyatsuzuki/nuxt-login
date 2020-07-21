const state = () => ({
  user: null
})

const getters = {
  isLogin(state) {
    return state.user ? true : false
  }
}

const actions = {}

const mutations = {
  setCurrentUser(state, payload) {
    state.user = payload
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
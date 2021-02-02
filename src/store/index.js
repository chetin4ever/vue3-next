import { createApp } from "vue"
import { createStore } from "vuex"

// Create a new store instance.
const store = createStore({
  state() {
    return {
      isloggedIn: false,
      authUser: {},
      isLoginOpen: false,
    }
  },
  mutations: {
    setIsLoggedIn(state, payload) {
      state.isloggedIn = payload
    },
    setAuthUser(state, payload) {
      state.authUser = payload
    },
    setLoginModal(state, payload) {
      state.isLoginOpen = payload
    },
  },
})

export default store

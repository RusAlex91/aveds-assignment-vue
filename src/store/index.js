import { createStore } from 'vuex'

export default createStore({
  state: {
    currentUserData: null,
    isLogin: false,
    loginFromIsOpen: false
  },
  mutations: {
    setUser (state, username) {
      state.currentUserData = username
    },
    setLogin (state, bool) {
      state.isLogin = bool
    },
    logOut (state) {
      state.currentUserData = null
      state.isLogin = false
    },
    triggerLoginForm (state) {
      state.loginFromIsOpen = !state.loginFromIsOpen
    }
  },
  actions: {
    async LogIn (state, userData) {
      const response = await fetch(`http://localhost:8001/usernames`)
      const usersData = await response.json()
      const user = usersData.find(user => user.login === userData.login)
      if (userData.password === user.password) {
        this.commit('setUser', user)
        this.commit('setLogin', true)
      }
    }
  },
  modules: {}
})

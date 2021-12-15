import { createStore } from 'vuex'

const store = createStore({
  state: {
    user: null
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
      console.log('User state changed: ', state.user)
    }
  }
  // actions: {
  //   createAccount (context, { name, email, password }) {
  //     createUserFromForm(name, email, password)
  //       .then((user) => {
  //         if (user) {
  //           context.commit('setUser', user)
  //         }
  //       })
  //       .catch((error) => {
  //         throw new Error('could not complete signup\nError: ', error)
  //       })
  //   },
  //   signInUser (context, { email, password }) {
  //     signInFromForm(email, password)
  //       .then((user) => {
  //         if (user) {
  //           context.commit('setUser', user)
  //         }
  //       })
  //       .catch((error) => {
  //         throw new Error('could not complete signup\nError: ', error)
  //       })
  //   }
  // }
})
export default store

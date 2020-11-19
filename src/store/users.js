import axios from 'axios'

export default {
  state: {
    users: []
  },
  mutations: {
    setUsers(state, payload) {
      state.users = payload
    },
    setRepos(state) {
      let users = []
      let promises = []
      state.users.forEach(user => {
        axios.get(user.url).then(res => {
          user.reposCount = res.data.public_repos
          users.push(user)
        })
      })
      Promise.all(promises).then(() => state.users = users)
    }
  },
  actions: {
    setUsers({commit}, payload) {
      commit('setUsers', payload)
    },
    setRepos({commit}, payload) {
      commit('setRepos', payload)
    }
  },
  getters: {
    getUsers: state => state.users,
    getUser: state => login => state.users.find(user => user.login === login)
  }
}

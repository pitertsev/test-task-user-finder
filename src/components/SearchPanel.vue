<template>
  <b-form @submit.prevent="onSubmit">
    <b-row>
      <b-col cols="6" offset="2">
        <b-form-input v-model="userRequest" placeholder="Введите имя пользователя" required />
      </b-col>
      <b-col cols="4">
        <b-button cols="4" variant="outline-primary" type="submit">Найти пользователя</b-button>
      </b-col>
    </b-row>
  </b-form>
</template>

<script>
import axios from 'axios'

export default {
  name: 'SearchPanel',
  data: () => ({
    userRequest: ''
  }),
  methods: {
    onSubmit() {
      axios
        .get(`https://api.github.com/search/users?q=${this.userRequest}`)
        .then(res => res.data.items.map(user => {
          return {
            login: user.login,
            repos: user.repos_url
            }
          })
        )
        .then(data => {
          this.$store.dispatch('setUsers', data)
          this.$emit('search')
        })
        .catch(error => console.log(error))
    }
  }
}
</script>

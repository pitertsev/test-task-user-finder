<template>
  <b-container>
    <b-row>
      <b-col cols="10" offset="1">
        <h1>Пользователь: {{ user.login }}</h1>
        <UserInfo :user="user"/>
        <router-link to="/users">Назад</router-link>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import UserInfo from '../components/UserInfo.vue'
export default {
  name: "User",
  components: {UserInfo},
  data: () => ({
    user: null
  }),
  created() {
    const id = this.$route.params.id
    this.user = this.$store.getters.getUser(id)
  },
}
</script>

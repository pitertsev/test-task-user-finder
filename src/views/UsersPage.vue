<template>
  <b-container>
    <b-row>
      <b-col cols="10" offset="1">
        <h1>Список пользователей</h1>
        <Users v-if="checkUsers"/>
        <p v-else>Вы еще ничего не искали...</p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Users from '../components/Users.vue'
export default {
  name: "UsersPage",
  components: {Users},
  created() {
    this.$store.dispatch('setRepos')
  },
  computed: {
    checkUsers() {
      return this.$store.getters.getUsers.length > 0
    }
  }
}
</script>

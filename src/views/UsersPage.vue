<template>
  <b-container>
    <b-row>
      <b-col cols="10" offset="1">
        <h1>Список пользователей</h1>
        <Users/>
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
  }
}
</script>

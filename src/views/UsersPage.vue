<template>
  <b-container>
    <b-row>
      <b-col cols="10" offset="1">
        <Title title="Список пользователей"/>
        <Users/>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Users from '../components/users/Users.vue'
import Title from '../components/ui/Title.vue'
export default {
  name: "UsersPage",
  components: {Title, Users},
  created() {
    this.$store.dispatch('setRepos')
  }
}
</script>

<template>
  <b-container>
    <b-row>
      <b-col cols="10" offset="1">
        <Title :title="titleGenerate" />
        <UserInfo :user="user"/>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import UserInfo from '../components/users/UserInfo.vue'
import Title from '../components/ui/Title.vue'

export default {
  name: "User",
  components: {Title, UserInfo},
  data: () => ({
    user: null
  }),
  created() {
    const id = this.$route.params.id
    this.user = this.$store.getters.getUser(id)
  },
  computed: {
    titleGenerate() {
      return `Пользователь: ${this.user.login}`
    }
  }
}
</script>

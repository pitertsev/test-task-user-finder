<template>
  <b-container >
    <SearchPanel class="mt-5" @search="search"/>
    <p class="text-center text-danger" v-if="isFailedSearch">Мы ничего не смогли найти...</p>
  </b-container>
</template>

<script>
import SearchPanel from '../components/SearchPanel.vue'
export default {
  name: 'Home',
  components: {SearchPanel},
  data: () => ({
    isFailedSearch: false
  }),
  methods: {
    search() {
      this.isFailedSearch = this.$store.getters.getUsers.length === 0
      if (this.$store.getters.getUsers.length > 0) this.$router.push('/users')
    }
  }
}
</script>

<template>
  <b-container>
    <SearchPanel class="mt-5" @search="search" @errorSearch="showError"/>
    <Message v-if="errorMessage.isFailedSearch" :message="errorMessage.message" classes="text-center text-danger"  />
  </b-container>
</template>

<script>
import SearchPanel from '../components/SearchPanel.vue'
import Message from '../components/Message.vue'
export default {
  name: 'Home',
  components: {Message, SearchPanel},
  data: () => ({
    errorMessage: {
      isFailedSearch: false,
      message: ''
    }

  }),
  methods: {
    search() {
      if (this.$store.getters.getUsers.length > 0) this.$router.push('/users')
    },
    showError(value) {
      this.errorMessage.message = value
      this.errorMessage.isFailedSearch = true
    }
  }
}
</script>

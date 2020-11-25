<template>
  <div>
    <div v-if="checkUsers">
      <b-table
          id="my-table"
          striped
          hover
          :items="users"
          :fields="fields"
          :per-page="perPage"
          :current-page="currentPage"
      >
        <template #cell(login)="data">
          <router-link :to="`/users/${data.value}`">{{ data.value }}</router-link>
        </template>

      </b-table>
      <b-pagination
          class="d-flex justify-content-center"
          v-model="currentPage"
          :total-rows="rows"
          :per-page="perPage"
          aria-controls="my-table"
          v-if="users.length > 3"
      ></b-pagination>
    </div>
    <Message v-else message="Вы еще ничего не искали..."/>
  </div>
</template>
<script>

import Message from '../ui/Message.vue'
export default {
  name: "Users",
  components: {Message},
  data: () => ({
    fields: [
      {
        key: 'login',
        label: 'User Name',
        sortable: false
      },
      {
        key: 'reposCount',
        label: 'Repos Count',
        sortable: true,
        variant: 'danger'
      }
    ],
    users: [],
    perPage: 3,
    currentPage: 1,
  }),
  created() {
    this.users = this.$store.getters.getUsers
  },
  computed: {
    rows() {
      return this.users.length
    },
    checkUsers() {
      return this.$store.getters.getUsers.length > 0
    }
  }
}
</script>

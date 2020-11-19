<template>
  <div>
    <h1>Пользователь: {{ user.login }}</h1>
    <ul>
      <li>Логин пользователя: {{ user.login }}</li>
      <li>Количество репозиториев: {{ user.reposCount }}</li>
    </ul>
    <router-link to="/users">Назад</router-link>
  </div>
</template>

<script>
export default {
  name: "UserInfo",
  props: {
    user: {
      type: Object,
      required: true
    }
  }
}
</script>

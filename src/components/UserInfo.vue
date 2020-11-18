<template>
  <ul>
    <li>Логин пользователя: {{ user.login }}</li>
    <li>Количество репозиториев: {{ user.reposCount }}</li>
  </ul>
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

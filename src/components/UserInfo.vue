<template>
  <div>
    <ul>
      <li> <a :href="user.html_url" target="_blank">Ссылка на GitHub</a></li>
      <li>Количество публичных репозиториев: {{ user.reposCount }}</li>
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

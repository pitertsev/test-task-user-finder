<template>
  <b-navbar type="dark" variant="dark" class="d-flex justify-content-center">
    <b-navbar-nav>
      <b-nav-item to="/">Главная</b-nav-item>
    </b-navbar-nav>
    <b-navbar-nav>
      <b-nav-item to="/users">Пользователи</b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>

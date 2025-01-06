<template>
    <header id="header">
      <nav>
        <span class="toggleMenu far fa-bars"></span>
        <span class="logo">
          <router-link :to="{name: 'campus.home'}">
        <i class="fas fa-chevron-left"></i>
        <img src="@/assets/images/logo.svg" alt="Logo">
      </router-link>

        </span>
      </nav>
    </header>
</template>

<script>
  export default {
    name: 'header-component'
  }
</script>

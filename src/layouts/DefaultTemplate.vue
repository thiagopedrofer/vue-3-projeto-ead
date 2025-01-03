<template>
    <header-component/>

    <section>
      <router-view></router-view>
    </section>

    <footer-component/>
</template>

<script>

  import HeaderComponent from '@/layouts/components/HeaderComponent.vue'
  import FooterComponent from '@/layouts/components/FooterComponent.vue'
  export default {
    name: 'DefaultTemplate',
    components: {
      HeaderComponent,
      FooterComponent
    }
  }
</script>

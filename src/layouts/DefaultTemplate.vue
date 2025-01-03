<template>
    <header-component/>

    <section>
      <router-view></router-view>
    </section>

    <footer-component/>
</template>

<script>

  import { onBeforeMount } from 'vue'
  import HeaderComponent from '@/layouts/components/HeaderComponent.vue'
  import FooterComponent from '@/layouts/components/FooterComponent.vue'

  export default {
    name: 'DefaultTemplate',

    setup() {
      onBeforeMount(() => {
        document.body.classList.add('page')
        document.body.classList.add('dark')

        document.title = 'Curso EAD com Vue.js 3'

      })
    },

    components: {
      HeaderComponent,
      FooterComponent
    }
  }
</script>

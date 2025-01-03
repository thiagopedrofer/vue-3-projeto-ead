<template>
  <li>
    <span :class="['card', 'bg-' + bgName]">
      <span class="icon">
        <img :src="resolvedImage" :alt="title" />
      </span>
      <span class="title">{{ title }}</span>
      <span class="action">
        <a href="trainings.html" :class="['btn', bgName]">Acessar</a>
      </span>
    </span>
    <span class="dots">
      <span></span>
      <span></span>
      <span></span>
    </span>
  </li>
</template>

<script>
export default {
  name: 'CardCourse',
  props: ['title', 'image', 'bgName'],
  computed: {
    resolvedImage() {
      return this.image !== ''
        ? this.image
        : new URL('@/assets/images/icons/default.png', import.meta.url).href;
    },
  },
};
</script>

<template>
  <div>
    <div class="pageTitle">
      <span class="title">Curso X</span>
      <span class="dots">
                <span></span>
                <span></span>
                <span></span>
            </span>
    </div>

    <div class="content">
      <div class="container">
        <modules/>
        <div class="right">
          <div class="content">
            <player/>
            <supports-lesson/>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

import Modules from '@/views/modules/components/Modules.vue'
import Player from '@/views/modules/components/Player.vue'
import SupportsLesson from '@/views/modules/components/Supports.vue'
export default {
  name: 'ModulesAndLessons',
  components: {
    SupportsLesson,
    Modules,
    Player
  }
}
</script>

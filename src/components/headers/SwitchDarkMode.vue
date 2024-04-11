<script setup lang="ts">
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const { Sunny,Moon } = ElementPlusIconsVue
import { useDark } from '@vueuse/core'
const isDark = useDark()

</script>
<template>
  <el-switch
      v-model="isDark"
      class="mt-2"
      style="margin-left: 24px"
      inline-prompt
      :active-icon="Moon"
      :inactive-icon="Sunny"
  />
</template>

<style scoped>

</style>
<script setup lang="ts">
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const { Check, Sunny,Moon } = ElementPlusIconsVue
import { ref } from 'vue'
import { useDark, useToggle } from '@vueuse/core'
const isDark = useDark()
const toggleDark = useToggle(isDark)
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
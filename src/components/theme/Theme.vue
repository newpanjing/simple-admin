<script setup lang="ts">
import ThemeBlock from "@/components/theme/ThemeBlock.vue";
import {ref} from "vue";

import colors, {primary} from "@/theme/colors";
import {useStorage} from "@vueuse/core";
import {setPrimaryColor} from "@/theme";

const current = ref(colors[0])

const primaryColor = useStorage("primaryColor", primary)

function change(color: string) {
  current.value = color
  primaryColor.value = color
  setPrimaryColor(color)
}

onMounted(() => {
  current.value = primaryColor.value
})
</script>
<template>
  <div class="theme">
    <ThemeBlock v-for="color in colors" :color="color" :active="current==color" @change="change"/>
    <el-color-picker v-model="current" size="large" @change="change"/>
  </div>
</template>
<style lang="scss" scoped>
.theme {
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 10px;
}
</style>
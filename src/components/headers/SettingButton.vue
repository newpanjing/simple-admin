<script setup lang="ts">

import {Setting} from "@element-plus/icons-vue";
import {ref} from "vue"
//打开右侧设置
const drawer = ref(false)

</script>

<template>
  <el-button :icon="Setting" circle text @click="drawer=true"></el-button>
  <el-drawer v-model="drawer" title="I am the title" :with-header="false">
    <span>Hi there!</span>
  </el-drawer>
</template>

<style scoped>

</style>
<script setup lang="ts">

import {Close, Setting} from "@element-plus/icons-vue";
import {ref} from "vue"
import Theme from "@/components/headers/Theme.vue";
//打开右侧设置
const drawer = ref(false)

</script>

<template>
  <el-button :icon="Setting" circle text @click="drawer=true"></el-button>
  <el-drawer v-model="drawer" title="I am the title" :with-header="false">
    <div class="flex flex-space-between">
        <span>{{$t("Layout Config")}}</span>
        <el-button @click="drawer=false" :icon="Close" circle text></el-button>
    </div>
    <el-divider>
      {{ $t("Theme") }}
    </el-divider>
    <Theme/>

  </el-drawer>
</template>

<style scoped>

</style>
<script setup lang="ts">

import {Close} from "@element-plus/icons-vue";
import Theme from "@/components/layoutConfig/Theme.vue";
import Animation from "@/components/layoutConfig/Animation.vue";
import Display from "@/components/layoutConfig/Display.vue";
import NavigationBar from "@/components/layoutConfig/NavigationBar.vue";

const emit = defineEmits(["close"]);

</script>

<template>
  <div>
    <div class="flex flex-space-between">
      <span>{{ $t("Layout Config") }}</span>
      <el-button @click="emit('close')" :icon="Close" circle text></el-button>
    </div>
    <el-divider>
      {{ $t("Theme") }}
    </el-divider>
    <Theme/>

    <NavigationBar/>
    <Display/>
    <Animation/>
  </div>
</template>

<style scoped>

</style>
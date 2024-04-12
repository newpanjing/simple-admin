<script setup lang="ts">
const showBreadcrumb = ref(true);
</script>

<template>
  <el-divider>
    {{ $t("Display") }}
  </el-divider>
  <el-row>
    <el-col :span="20">
      {{ $t("Breadcrumb") }}
    </el-col>
    <el-col :span="4">
      <el-switch v-model="showBreadcrumb" />
    </el-col>
  </el-row>


</template>

<style scoped>

</style>
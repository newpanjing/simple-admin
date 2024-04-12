<script setup lang="ts">

</script>

<template>
  <el-tabs type="border-card" class="demo-tabs">
    <el-tab-pane>
      <template #label>
        <span class="custom-tabs-label">
          <el-icon><calendar /></el-icon>
          <span>Route</span>
        </span>
      </template>
      Route
    </el-tab-pane>
    <el-tab-pane label="Config"></el-tab-pane>
    <el-tab-pane label="Role"></el-tab-pane>
    <el-tab-pane label="Task"></el-tab-pane>
  </el-tabs>
</template>

<style scoped>

</style>
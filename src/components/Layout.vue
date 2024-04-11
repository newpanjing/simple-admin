<script setup lang="ts">

import Sidebar from "@/components/Sidebar.vue";
import LayoutHeader from "@/components/LayoutHeader.vue";

</script>
<template>
  <div class="layout">
    <el-container>
      <el-aside class="aside">
        <Sidebar class="sidebar"/>
      </el-aside>
      <el-container>
        <el-header class="header">
          <LayoutHeader/>
        </el-header>
        <el-main class="main">
          <slot></slot>
        </el-main>
      </el-container>
    </el-container>
  </div>

</template>
<style lang="scss">
.layout {
  height: 100%;
  display: flex;

  .aside {
    display: flex;
    width: auto;
  }

  flex-direction: row;

  .header {
    padding: 0;
    height: 54px;
    box-shadow: 0 1px 4px rgba(0, 21, 41, 0.8);
  }

  .main {
    display: flex;
    flex-direction: column;
    overflow: auto;
    background-color: var(--component-bg);
  }
}
</style>
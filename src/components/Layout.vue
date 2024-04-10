<script setup lang="ts">

import Sidebar from "@/components/Sidebar.vue";
import LayoutHeader from "@/components/LayoutHeader.vue";
</script>
<template>
  <div class="layout">
    <slot name="sidebar">
      <Sidebar class="sidebar"/>
    </slot>
    <section class="content">
      <slot name="header">
        <LayoutHeader/>
      </slot>
      <main>
        <slot></slot>
      </main>
    </section>
  </div>
</template>
<style lang="scss">
.layout{
  height: 100%;
  display: flex;
  flex-direction: row;
  .content{
    display: flex;
    flex-direction: column;
    flex: 1 1 0%;
    .header{
      flex: 0 0 54px;
    }
    main{
      flex: 1 1 0%;
      overflow: auto;
      padding: 10px;
      background-color: var(--component-bg);
    }
  }
}
</style>
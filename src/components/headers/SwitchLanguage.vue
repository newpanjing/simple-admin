<script setup lang="ts">

import IconLanguage from "@/components/icons/IconLanguage.vue";

const languages=[
    {
        name:'中文',
        value:'zh'
    },
    {
        name:'English',
        value:'en'
    }
]
</script>

<template>

  <el-dropdown>
    <el-button text :icon="IconLanguage" circle></el-button>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item v-for="item in languages">
          <span v-text="item.name"></span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<style scoped>

</style>
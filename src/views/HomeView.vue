<script setup lang="ts">
import { onMounted } from 'vue';
import { useStorage } from '@vueuse/core';



import { ElMessage } from 'element-plus'

function showDialog() {
  
  //显示elementui的弹窗
  ElMessage.success({
    message: 'Welcome to Your Vue.js App',
  })
  
  ElMessage.error({
    message: 'Welcome to Your Vue.js App',
  })

  ElMessage.warning({
    message: 'Welcome to Your Vue.js App',
  })
}

</script>

<template>
  <div style="height: 2000px">111
    <div>
      <el-link type="primary" @click="showDialog"> click me</el-link>

      <el-button>Default</el-button>
    </div>
  </div>
</template>

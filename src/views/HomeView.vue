<script setup lang="ts">
import { onMounted } from 'vue';
import TheWelcome from '@/components/TheWelcome.vue'
import { useStorage } from '@vueuse/core';

const welcome= useStorage('welcome', true)
onMounted(()=>{
  welcome.value = false
})

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
  <main>111
    {{ welcome }}
    <div>
      <el-link type="primary" @click="showDialog"> click me</el-link>

      <el-button>Default</el-button>
    </div>
    <TheWelcome />
  </main>
</template>

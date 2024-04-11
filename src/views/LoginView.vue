<script setup lang="ts">
import {ElMessage} from "element-plus";

function msg() {
  ElMessage.success("成功")
}
</script>

<template>
<div>登录页面，默认布局</div>
  <router-link to="/">登录</router-link>
  <el-button @click="msg">弹出消息</el-button>
</template>

<style scoped>

</style>
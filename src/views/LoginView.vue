<script setup lang="ts">
import {ElMessage} from "element-plus";
import SwitchLanguage from "@/components/headers/SwitchLanguage.vue";
import SwitchDarkMode from "@/components/headers/SwitchDarkMode.vue";

function msg() {
  ElMessage.success("成功")
}

const username = ref("");
const password = ref("");
</script>

<template>
  <div class="login">
    <div class="main">
      <div class="logo">
        <img src="../assets/logo.svg" alt="">
      </div>
      <div class="title">Sign in to your account</div>
      <el-card class="card">

        <el-form label-position="top">
          <el-form-item label="Username">
            <el-input v-model="username" clearable></el-input>
          </el-form-item>
          <el-form-item label="Password">
            <el-input v-model="password" clearable></el-input>
          </el-form-item>
          <el-form-item>
            <el-checkbox>Remember me</el-checkbox>
          </el-form-item>
          <div class="flex btn">
            <el-button type="primary" @click="msg">Sign in</el-button>
          </div>
        </el-form>

        <el-divider/>
        <div class="flex justify-between action">
          <div class="flex">
            Language:
            <SwitchLanguage/>
          </div>
          <SwitchDarkMode/>
        </div>

      </el-card>
      <div class="tips">
        Not a member? Please contact the administrator
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
body {
  background-color: var(---login-bg);
}

.login {
  background-color: var(---login-bg);
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .main {
    display: flex;
    gap: 20px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .title{
      color: var(--el-text-color-primary);
      line-height: 2.25rem;
      font-weight: 700;
      font-size: 1.25rem;
    }
  }

  .card {
    padding: 50px;

    min-width: 400px;

    .btn {
      .el-button {
        flex: 1;
      }
    }
  }

  .logo {
    min-width: 50px;
    min-height: 50px;
  }
  .tips{
    color: var(--el-text-color-secondary);
  }
  .action{
    width: 100%;
  }
}

</style>
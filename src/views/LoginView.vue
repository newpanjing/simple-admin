<script setup lang="ts">
import SwitchLanguage from "@/components/headers/SwitchLanguage.vue";
import SwitchDarkMode from "@/components/headers/SwitchDarkMode.vue";
import {useStorage} from "@vueuse/core";


const username = ref("");
const password = ref("");

const rememberMe = useStorage("rememberMe",false)
const router=useRouter()

const submit = () => {
  console.log(username.value, password.value)
  // TODO: 登录
  router.push("/")
}

</script>

<template>
  <div class="login">
    <div class="main">
      <div class="logo">
        <img src="../assets/logo.svg" alt="">
      </div>
      <div class="title">{{$t('Sign in to your account')}}</div>
      <el-card class="card">

        <el-form label-position="top">
          <el-form-item :label="$t('Username')">
            <el-input v-model="username" clearable></el-input>
          </el-form-item>
          <el-form-item :label="$t('Password')">
            <el-input v-model="password" clearable type="password" show-password>

            </el-input>
          </el-form-item>
          <el-form-item>
            <el-checkbox v-model="rememberMe">{{$t('Remember me')}}</el-checkbox>
          </el-form-item>
          <div class="flex btn">
            <el-button type="primary" @click="submit">{{$t('Sign in')}}</el-button>
          </div>
        </el-form>

        <el-divider/>
        <div class="flex justify-between action">
          <div class="flex">
            {{$t('Language')}}:
            <SwitchLanguage/>
          </div>
          <SwitchDarkMode/>
        </div>

      </el-card>
      <div class="tips">
        {{$t('Not a member? Please contact the administrator')}}
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
      font-size: 1.5rem;
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
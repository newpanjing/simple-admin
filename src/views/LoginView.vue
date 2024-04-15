<script setup lang="ts">
import SwitchLanguage from "@/components/headers/SwitchLanguage.vue";
import SwitchDarkMode from "@/components/headers/SwitchDarkMode.vue";
import {useStorage} from "@vueuse/core";


const username = ref("");
const password = ref("");

const rememberMe = useStorage("rememberMe", false)
const router = useRouter()


import {t} from "@/messages/i18n";
import {computed, reactive} from "vue";

const formRef = ref(null)

const form = reactive({
  username: "",
  password: "",
});
const rules = computed(()=>{
  return {
    username: [{
      required: true,
      message: t('Username is required'),
      trigger: 'change'
    }],
    password: [{
      required: true,
      message: t('Password is required'),
      trigger: 'change'
    }]
  }
})

const submit = () => {
  formRef.value?.validate(valid => {
    console.log('valid', valid)
  })
  // TODO: 登录
  // router.push("/")
}
</script>

<template>
  <div class="login">
    <div class="main">
      <div class="logo">
        <img src="../assets/logo.svg" alt="">
      </div>
      <div class="title">{{ $t('Sign in to your account') }}</div>
      <el-card class="card">

        <el-form
            ref="formRef"
            label-position="top"
            :rules="rules"
            status-icon
            :model="form">
          <el-form-item :label="$t('Username')" prop="username">
            <el-input v-model="form.username" clearable></el-input>
          </el-form-item>
          <el-form-item :label="$t('Password')" prop="password">
            <el-input v-model="form.password" clearable type="password" show-password>

            </el-input>
          </el-form-item>
          <el-form-item>
            <el-checkbox v-model="rememberMe">{{ $t('Remember me') }}</el-checkbox>
          </el-form-item>
          <div class="flex btn">
            <el-button type="primary" @click="submit">{{ $t('Sign in') }}</el-button>
          </div>
        </el-form>

        <el-divider/>
        <div class="flex justify-between action">
          <div class="flex">
            {{ $t('Language') }}:
            <SwitchLanguage/>
          </div>
          <SwitchDarkMode/>
        </div>

      </el-card>
      <div class="tips">
        {{ $t('Not a member? Please contact the administrator') }}
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

    .title {
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

  .tips {
    color: var(--el-text-color-secondary);
  }

  .action {
    width: 100%;
  }
}

</style>
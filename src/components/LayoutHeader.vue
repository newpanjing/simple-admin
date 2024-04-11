<script setup lang="ts">
//折叠展开
import {useStorage} from "@vueuse/core";
import UserInfo from "@/components/headers/UserInfo.vue";
import SwitchDarkMode from "@/components/headers/SwitchDarkMode.vue";
import SwitchLanguage from "@/components/headers/SwitchLanguage.vue";
import {ArrowRight, Expand, Fold, Refresh} from "@element-plus/icons-vue";
import SettingButton from "@/components/headers/SettingButton.vue";

const collapse = useStorage("collapse", false)
const toggleCollapse = () => {
  collapse.value = !collapse.value
}
</script>

<template>
  <header class="header">
    <el-button text @click="toggleCollapse">
      <el-icon :size="20">
        <Expand v-if="collapse"/>
        <Fold v-else/>
      </el-icon>
    </el-button>
    <div class="left">
      <!--       刷新按钮-->
      <el-breadcrumb :separator-icon="ArrowRight">
        <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
        <el-breadcrumb-item>promotion management</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="space"></div>
    <div class="right">
      <SwitchDarkMode/>
      <SwitchLanguage/>
      <UserInfo/>
      <SettingButton/>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  box-shadow: 0 1px 4px rgba(0, 21, 41, .08);
  padding: 0 10px;
  display: flex;
  align-items: center;
  flex-direction: row;

  .space {
    flex: 1;
  }

  .right {
    display: flex;
    align-items: center;
    gap: 15px;
  }
}
</style>
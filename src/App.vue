<script setup lang="ts">

import {computed, watch} from "vue";

const route = useRoute()
const isShowLayout = ref(false)

watch(route, () => {
  isShowLayout.value = route.name !== "login"
})
//导入element-plus语言包
import zhCn from "element-plus/dist/locale/zh-cn.mjs"
import en from "element-plus/dist/locale/en.mjs"
import {setPrimaryColor} from "@/theme";

import {useTheme} from "@/store/theme-store";
import {useLocale} from "@/store/locale";

const maps = {
  "zh": zhCn,
  "en": en,
}

const localeStore=useLocale()
const locale = computed(() => {
  return maps[localeStore.locale] || zhCn
})

onMounted(() => {
  //读取默认主题色
  setPrimaryColor(useTheme().primary)
})
</script>
<template>
  <el-config-provider :locale="locale">
    <router-view v-if="!isShowLayout"/>
    <Layout v-else>
      <RouterView/>
    </Layout>
  </el-config-provider>
</template>



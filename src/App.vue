<script setup lang="ts">

import {computed, watch} from "vue";

const route = useRoute()
const isShowLayout = ref(false)

watch(route, () => {
  isShowLayout.value = route.name !== "login"
})
//导入element-plus语言包
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import en from 'element-plus/dist/locale/en.mjs'
import {useStorage} from "@vueuse/core";
import {setPrimaryColor} from "@/theme";

const maps = {
  "zh": zhCn,
  "en": en,
}
const language = useStorage("language", "zh")
const locale = computed(() => {
  return maps[language.value] || zhCn
})
const primaryColor = useStorage("primaryColor", "#166cff")
onMounted(() => {
  //读取默认主题色
  setPrimaryColor(primaryColor.value)
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



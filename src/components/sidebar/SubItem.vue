<script setup lang="ts">
import SubMenu from "@/components/sidebar/SubMenu.vue";
import {Document, Link} from "@element-plus/icons-vue";
import {computed} from "vue";
import type {MenuType} from "@/types";
import {useStorage} from "@vueuse/core";

const props = defineProps({
  menu: {
    type: Object,
    default: () => ({})
  }
})

const hasItemChild = (item: any) => {
  return item.children && item.children.length > 0
}
const router = useRouter()

const emit = defineEmits(['open'])

const open = () => {
  let menu = props.menu as MenuType
  //判断是内部还是外部
  if(menu.external){
    window.open(menu.link)
  }else{
    router.push(menu.link)
  }
}

const hasChild = computed(() => {
  return props.menu.children && props.menu.children.length > 0
})

//判断是否折叠
const collapse = useStorage("collapse", false)
</script>

<template>
  <SubMenu v-if="hasChild" :menu="menu" @open="open"/>
  <div v-else @click="open">
    <el-menu-item :index="`${menu.id}`">
      <el-icon>
        <document/>
      </el-icon>
      <span>{{ menu.text }}</span>
      <el-icon v-if="menu.external&&!collapse">
        <Link/>
      </el-icon>
      <SubMenu :menu="menu" v-if="hasItemChild(menu)" @open="open"/>
    </el-menu-item>
  </div>
</template>

<style scoped>

</style>
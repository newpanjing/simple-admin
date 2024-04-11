<script setup lang="ts">
import SubMenu from "@/components/sidebar/SubMenu.vue";
import {Document} from "@element-plus/icons-vue";
import {computed} from "vue";

const props = defineProps({
  menu: {
    type: Object,
    default: () => ({})
  }
})

const hasItemChild = (item: any) => {
  return item.children && item.children.length > 0
}

const emit = defineEmits(['open'])

const open = (item: any) => {
  console.log('open', props.menu, item)
  emit('open', props.menu)
}

const hasChild = computed(() => {
  return props.menu.children && props.menu.children.length > 0
})


</script>

<template>
  <SubMenu v-if="hasChild" :menu="menu" @open="open"/>
  <div v-else @click="open">
    <el-menu-item :index="`${menu.id}`">
      <el-icon>
        <document/>
      </el-icon>
      <span>{{ menu.text }}</span>
      <SubMenu :menu="menu" v-if="hasItemChild(menu)" @open="open"/>
    </el-menu-item>
  </div>
</template>

<style scoped>

</style>
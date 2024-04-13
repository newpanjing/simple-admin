<script setup lang="ts">

import {Close} from "@element-plus/icons-vue";
import {ref, defineProps} from "vue";

const props = defineProps({
  item: {
    type: Object,
    default: () => ({
      text: '',
      active: false,
      id: '',
      url: '',
      closeable: true,
    })
  }
})
const el = ref(null)

function getEl() {
  return el.value
}

defineExpose({
  getEl
})
const emit = defineEmits(['close', 'selected'])

</script>

<template>

  <div :class="{tab:true,active:item.active}" ref="el" @click="emit('selected',item)">
    <span class="name">
      {{ item.text }}
    </span>
    <span v-if="item.closeable" class="close" @click="emit('close',item)">
        <el-icon>
          <Close/>
        </el-icon>
    </span>
  </div>
</template>

<style scoped>

</style>
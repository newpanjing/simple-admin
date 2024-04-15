<script setup lang="ts">
import {useRoute} from "vue-router";
import SearchForm from "@/components/list/SearchForm.vue";
import DataTable from "@/components/list/DataTable.vue";
import DataPagination from "@/components/list/DataPagination.vue";
import DataAction from "@/components/list/DataAction.vue";
import DataAlert from "@/components/list/DataAlert.vue";
import {nextTick, onMounted, watch} from "vue";
import {ElMessage} from "element-plus";

const route = useRoute()
const tableBox = ref<any>(null)
const height = ref("500px")
onMounted(() => {
  console.log("创建了")
  window.addEventListener("resize", onResize)
  setTimeout(()=>{
    onResize()
  },50)
})
onUnmounted(() => {
  //移除事件监听
  window.removeEventListener("resize", onResize)
})

function onResize() {
  height.value = tableBox.value?.clientHeight + "px"
  if(height.value === "0px") {
    height.value = "500px"
  }
}
watch(()=>route.path,(val)=>{
  //路由变动，更新数据
  // console.log(`路由变了${val}`)
  // ElMessage.success(`路由变了${val}`)
})
</script>

<template>
  <div class="grid">
    <div class="table">
      <search-form/>
      <el-divider/>
      <data-action/>
      <div>
        <data-alert/>
      </div>
      <div class="table-box" ref="tableBox">
        <data-table :height="height"/>
      </div>
      <data-pagination/>
    </div>
  </div>
</template>

<style scoped lang="scss">
.table-box {
  flex: 1 1 0;
  width: 100%;
}

.grid {
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 20px;
}

.info-bar {
  margin: 20px 0;
}

.grid-title {
  padding: 20px;
  background-color: var(--panel-bg);
}

.table {
  flex: 1;
  padding: 20px;
  border-radius: 5px;
  background-color: var(--panel-bg);
  display: flex;
  flex-direction: column;
}
</style>
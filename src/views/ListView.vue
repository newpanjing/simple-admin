<script setup lang="ts">
import {useRoute} from "vue-router";
import SearchForm from "@/components/list/SearchForm.vue";
import DataTable from "@/components/list/DataTable.vue";
import DataPagination from "@/components/list/DataPagination.vue";
import DataAction from "@/components/list/DataAction.vue";
import DataAlert from "@/components/list/DataAlert.vue";
import {useTheme} from "@/store/theme-store";
import {onMounted} from "vue";

const route = useRoute()
const tableBox = ref<any>(null)
const height = ref("500px")
onMounted(() => {
  onResize()
  window.addEventListener("resize", onResize)
})
onUnmounted(() => {
  //移除事件监听
  window.removeEventListener("resize", onResize)
})

function onResize() {
  height.value = tableBox.value?.clientHeight + "px"
}
</script>

<template>
  <div class="grid-content">
    <div class="table-content">
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

.grid-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.info-bar {
  margin: 20px 0;
}

.grid-title {
  padding: 20px;
  background-color: var(--panel-bg);
}

.table-content {
  flex: 1;
  padding: 20px;
  border-radius: 5px;
  background-color: var(--panel-bg);
  display: flex;
  flex-direction: column;
}
</style>
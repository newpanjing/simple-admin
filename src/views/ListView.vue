<script setup lang="ts">
import {useRoute} from "vue-router";
import SearchForm from "@/components/list/SearchForm.vue";
import DataTable from "@/components/list/DataTable.vue";
import DataPagination from "@/components/list/DataPagination.vue";
import DataAction from "@/components/list/DataAction.vue";

const route = useRoute()
</script>

<template>
  <div class="grid-content">
<!--    <div class="grid-title">-->
<!--      <div>查询表格</div>-->
<!--    </div>-->

    <div class="table-content">
      <SearchForm/>
      <el-divider/>
      <data-action/>
      <data-table/>
      <data-pagination/>
    </div>
  </div>
</template>

<style scoped lang="scss">
.grid-content{
  flex: 1;
  display: flex;
  flex-direction: column;
}
.grid-title{
  padding: 20px;
  background-color: var(--panel-bg);
}
.table-content{
  flex: 1;
  margin: 20px;
  padding: 20px;
  border-radius: 5px;
  background-color: var(--panel-bg);
}
</style>
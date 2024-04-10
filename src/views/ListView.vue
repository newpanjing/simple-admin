<script setup lang="ts">
import {useRoute} from "vue-router";
import SearchForm from "@/components/list/SearchForm.vue";
import DataTable from "@/components/list/DataTable.vue";
import DataPagination from "@/components/list/DataPagination.vue";
import DataAction from "@/components/list/DataAction.vue";
import DataAlert from "@/components/list/DataAlert.vue";

const route = useRoute()
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
      <div style="flex:  1 1 0%;width:100%">
          <data-table/>
      </div>
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
.info-bar{
  margin: 20px 0;
}
.grid-title{
  padding: 20px;
  background-color: var(--panel-bg);
}
.table-content{
  flex: 1;
  padding: 20px;
  border-radius: 5px;
  background-color: var(--panel-bg);
  display: flex;
  flex-direction: column;
}
</style>
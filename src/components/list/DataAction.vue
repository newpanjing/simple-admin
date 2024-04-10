<script setup lang="ts">
import { ref } from 'vue'

const centerDialogVisible = ref(false)
function handleClick(){
  centerDialogVisible.value=true
}
</script>

<template>
  <el-dialog
      v-model="centerDialogVisible"
      title="Warning"
      width="500"
      align-center
  >
    <span>Open the dialog from the center from the screen</span>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="centerDialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="centerDialogVisible = false">
          Confirm
        </el-button>
      </div>
    </template>
  </el-dialog>
<div class="action">
  <el-button type="primary" @click="handleClick">
    <i class="el-icon-plus"></i>
    新增
  </el-button>
  <el-button type="success" @click="handleClick">
    <i class="el-icon-edit"></i>
    编辑
  </el-button>
  <el-button type="danger" @click="handleClick">
    <i class="el-icon-delete"></i>
    删除
  </el-button>
  <el-button type="success" @click="handleClick">
    <i class="el-icon-refresh"></i>
    刷新
  </el-button>
</div>
</template>

<style scoped>

</style>
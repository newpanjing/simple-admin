<script setup lang="ts">
function logout() {
}

const userInfo = {
  name: "张三",
  avatar: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
}
</script>

<template>
    <el-dropdown>
      <div class="user">
        <el-avatar :src="userInfo.avatar"/>
        <span>Jackie ma</span>
      </div>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>
            首页
          </el-dropdown-item>
          <el-dropdown-item divided>
            个人信息
          </el-dropdown-item>
          <el-dropdown-item>
            个人信息
          </el-dropdown-item>
          <el-dropdown-item divided>
            退出
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>

</template>

<style scoped>
.user {
  cursor: pointer;
  display: flex;
  gap: 10px;
  align-items: center;

}
</style>
<script setup lang="ts">
import {Close, HomeFilled, User} from "@element-plus/icons-vue";

function logout() {
  //弹出确认框
  ElMessageBox.confirm("确认退出登录吗？", "提示", {
    confirmButtonText: "确认",
    cancelButtonText: "取消",
    type: "warning",
  }).then(() => {
    ElMessage({
      type: "success",
      message: "退出成功",
    });
    //TODO 删除用户信息
    to("/login")
  });
}

const userInfo = {
  name: "张三",
  avatar: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
}
const router = useRouter()

function to(url: any) {
  router.push(url)
}
</script>

<template>
  <el-dropdown trigger="click">
    <div class="user">
      <el-avatar :src="userInfo.avatar"/>
      <span>Jackie ma</span>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="to('/')">
          <el-icon>
            <HomeFilled/>
          </el-icon>
          {{ $t('Home') }}
        </el-dropdown-item>
        <el-dropdown-item divided @click="to('/profile')">
          <el-icon>
            <User/>
          </el-icon>
          {{ $t('Profile') }}
        </el-dropdown-item>

        <el-dropdown-item divided @click="logout">
          <el-icon>
            <Close/>
          </el-icon>
          {{ $t('Logout') }}
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
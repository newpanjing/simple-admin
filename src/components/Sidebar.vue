<script lang="ts" setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
import {useRouter} from "vue-router";
import {useStorage} from "@vueuse/core";

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const router = useRouter()
const clickHandler = (path: String) => {
  console.log("click")
  //导航跳转
  router.push({
    path: path
  })
}

//折叠展开
const collapse = useStorage("collapse", true)

</script>

<template>
  <div :class="{sidebar:true,collapse:collapse}">
    <div class="banner">
      <img src="../assets/logo.svg" alt="logo" class="logo">
      <h3 class="mb-2 title">Admin Pro</h3>
    </div>
    <el-menu
        active-text-color="var(--sidebar-text-active-color)"
        background-color="var(--sidebar-bg-color)"
        text-color="var(--sidebar-text-color)"
        default-active="2"
        class="menu"
        :collapse="collapse"
        @open="handleOpen"
        @close="handleClose"
    >
      <el-sub-menu
          index="1">
        <template #title>
          <el-icon>
            <location/>
          </el-icon>
          <span>Navigator One</span>
        </template>
        <el-menu-item-group title="Group One">
          <el-menu-item index="1-1" @click="clickHandler('/')">item one</el-menu-item>
          <el-menu-item index="1-2" @click="clickHandler('/about')">item two</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group Two">
          <el-menu-item index="1-3">item three</el-menu-item>
        </el-menu-item-group>
        <el-sub-menu index="1-4">
          <template #title>item four</template>
          <el-menu-item index="1-4-1">item one</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-menu-item index="2">
        <el-icon>
          <icon-menu/>
        </el-icon>
        <span>Navigator Two</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <el-icon>
          <document/>
        </el-icon>
        <span>Navigator Three</span>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon>
          <setting/>
        </el-icon>
        <span>Navigator Four</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<style lang="scss" scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  background-color: var(--sidebar-bg-color);
  color: var(--sidebar-text-color);
  width: 208px;
  //右边显示阴影
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.15);

  .title {
    color: var(--sidebar-active-color);
  }

  .menu {
    flex: 1 1 0%;
  }

  .sidebar-footer {
    height: 48px;
  }

  .el-menu {
    border-right: none;
  }

  .el-menu-item {
    margin: 5px;
    border-radius: 10px;
    height: 40px;
    line-height: 40px;
    transition: width 0.5s;
  }

  .el-menu-item.is-active {
    background-color: var(--primary-color);
  }

  .banner {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
    height: 65px;

    img {
      max-width: 30px;
      max-height: 30px;
    }
    .title{
      //最大1行
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;

    }
  }
}

.collapse {
  width: auto;

  .banner {
    padding: 5px;
    justify-content: center;
    .title {
      display: none;
    }
  }
  .el-sub-item{
    width: 48px;
  }
  span{
    display: none;
  }
  .el-menu-item {
    //margin: 0;
    width: 48px;
    padding: 5px;
    justify-content: center;
  }


}
</style>


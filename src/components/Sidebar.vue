<script lang="ts" setup>

// import type Menu from "@/types/menu";
import SubMenu from "@/components/sidebar/SubMenu.vue";

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const router = useRouter()
const clickHandler = (menu: any) => {
  console.log(menu)
  // if (menu.external) {
  //   window.open(menu.link)
  // } else {
  //   router.push(menu.link)
  // }
}

const menus = ref([{
  id: 1,
  text: 'Dashboard',
  children: [
    {
      id: 2,
      text: '监控大屏1',
      link: '/scene/111',
    }, {
      id: 3,
      text: '外部大屏',
      link: '/scene/2222',
      //是否为外链
      external: true,
    }]
},
  {
    id: 4,
    text: "系统管理", children: [{
      id: 401,
      text: '用户管理',
      link: '/user/list',
      children: [{
        id: 4011,
        text: '用户列表',
        link: '/user/list',
      }, {
        id: 4012,
        text: '用户详情',
        link: '/user/detail',
      }]
    }, {
      id: 402,
      text: '角色管理',
      link: '/role/list',
    }, {
      id: 403,
      text: '权限管理',
      link: '/permission/list',
    }, {
      id: 404,
      text: '菜单管理',
      link: '/menu/list',
    }, {
      id: 405,
      text: '部门管理',
      link: '/department/list',
    }, {
      id: 406,
      text: '字典管理',
      link: '/dictionary/list',
    }, {
      id: 407,
      text: '系统日志',
      link: '/log/list',
    }]
  },
  {id: 408, text: "社区首页", link: '/community/list', external: true}
])
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
        :show-timeout="300"
        :hide-timeout="100"
        :collapse="collapse"
        @open="handleOpen"
        @close="handleClose">

      <SubMenu v-for="(menu,index) in menus" :key="index" :menu="menu" @open="clickHandler"></SubMenu>
    </el-menu>
  </div>
</template>

<style lang="scss">
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

    .title {
      //最大1行
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: var(--sidebar-text-active-color);
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

  .el-sub-item {
    width: 48px;
  }

  span {
    display: none;
  }

  .el-menu-item {
    //margin: 0;
    //width: 48px;
    //padding: 5px;
    justify-content: center;
  }


}
</style>


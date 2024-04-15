<script setup lang="ts">

import {ArrowDown, ArrowLeft, ArrowRight, Close, HomeFilled} from "@element-plus/icons-vue";
import TabItem from "@/components/tabs/TabItem.vue";
import {computed, nextTick, onMounted, watch} from "vue";
import {useTabsStore} from "@/store/tabs-store";

const tabsStore = useTabsStore()

const items = computed({
  get() {
    return tabsStore.tabs
  },
  set(val) {
    tabsStore.tabs = val
  }
})

const scroller = ref<any>(null)
const tabItems = ref<any>(null)
const parent = ref<any>(null)

function getElementsPosition() {
  let parentX = parent.value.offsetLeft;

  let pos = [];
  //获取tabsEl的所有子元素
  let tabs = tabItems.value
  for (let i = 0; i < tabs.length; i++) {
    let el = tabs[i].getEl()
    let x = el.offsetLeft - parentX;
    pos.push({
      x,
      w: el.offsetWidth,
    });
  }
  return pos;
}

function prev() {

  let x = scroller.value.scrollLeft
  let pos = getElementsPosition()
  let index = pos.findIndex(item => item.x + item.w > x)
  if (index > 0) {
    //滚动到pos[index-1]的位置
    scroller.value.scrollTo({
      top: 0,
      left: pos[index - 1].x,
      behavior: "smooth",
    });
  }

}

function next() {

  //获取当前滚动条的位置
  let x = scroller.value.scrollLeft
  let pos = getElementsPosition()
  //获取pos中大于x的第一个元素
  let index = pos.findIndex(item => item.x > x)
  if (index > 0) {
    //滚动到pos[index-1]的位置
    scroller.value.scrollTo({
      top: 0,
      left: pos[index].x + pos[index].w + 10,
      behavior: "smooth",
    });
  }
}

let mouseDownFlag = false;
let startX = 0;
let startScrollLeft = 0;

function mouseDown(e: any) {
  //获取当前滚动条的位置
  startX = e.clientX;
  mouseDownFlag = true;
  startScrollLeft = scroller.value.scrollLeft;
}

function mouseMove(e: any) {
  //获取当前滚动条的位置
  if (mouseDownFlag) {
    let val = e.clientX - startX
    scroller.value.scrollLeft = startScrollLeft - val
  }
}

function mouseUp(e: any) {
  //获取当前滚动条的位置
  startX = 0
  mouseDownFlag = false;
}

function getRightItems(index: number) {
  let arr = []
  for (let i = index - 1; i < items.value.length; i++) {
    if (items.value[i].closeable) {
      arr.push(items.value[i])
    }
  }
  return arr
}

function getLeftItems(index: number) {
  let arr = []
  for (let i = index + 1; i >= 0; i--) {
    if (items.value[i].closeable) {
      arr.push(items.value[i])
    }
  }
  return arr
}

function onClose(item: any) {
  //移除当前的item，然后找到一个最近的item
  //寻找上一个或者下一个closeable不为false的item
  let index = items.value.findIndex(e => e.id === item.id)
  let rights = getRightItems(index)
  let nearNode = null
  if (rights.length > 0) {
    nearNode = rights[0]
  } else {
    let lefts = getLeftItems(index)
    if (lefts.length > 0) {
      nearNode = lefts[lefts.length - 1]
    }
  }
  console.log(rights, nearNode)

  //移除当前的item
  items.value = items.value.filter(e => e.id !== item.id)

  if (nearNode != null) {
    onSelected(nearNode)
  }

}

const router = useRouter()

function onSelected(item: any) {
  //遍历items，将active置为false
  items.value.forEach(e => e.active = e.id === item.id)
  //路由
  router.push(item.url)
  tabsStore.defaultActive = item.id.toString()
}

//刷新
function refresh() {
  //刷新当前页面
  router.go(0)
}

function closeAll() {
  //删除所有不为closeable的item
  items.value = items.value.filter(e => !e.closeable)
  onSelected(items.value[0])
}

</script>

<template>
  <div class="tabs-view">
    <div class="prev">
      <el-button circle text :icon="ArrowLeft" @click="prev"></el-button>
    </div>
    <div class="tabs-scroll" ref="scroller" @mousedown.left="mouseDown" @mousemove="mouseMove" @mouseup.left="mouseUp">
      <div class="tabs" ref="parent">
        <TabItem
            v-for="(item,i) in items"
            :key="i"
            :item="item"
            @close="onClose"
            @selected="onSelected"
            ref="tabItems">

        </TabItem>
      </div>
    </div>
    <div class="next">
      <el-button circle text :icon="ArrowRight" @click="next"></el-button>
    </div>
    <div class="arrow-down">
      <el-dropdown>
    <span class="el-dropdown-link">
      <el-button :icon="ArrowDown" circle text></el-button>
    </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="refresh">刷新当前</el-dropdown-item>
            <el-dropdown-item divided>关闭当前</el-dropdown-item>
            <el-dropdown-item>关闭其他</el-dropdown-item>
            <el-dropdown-item @click="closeAll">全部关闭</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>

    </div>
  </div>
</template>

<style lang="scss">
:root {
  --tabs-bg: #f2f2f2;
  --tabs-item-bg: #fff;
  --tabs-item-bg-hover: #ededed;

  --tabs-text-color: #202225;
  --tabs-item-border: 5px;
}

:root.dark {
  --tabs-bg: #202225;
  --tabs-item-bg: #131313;
  --tabs-item-bg-hover: #666;

  --tabs-text-color: #fff;
}

.tabs-view {
  height: 45px;
  display: flex;
  background-color: var(--tabs-bg);
  padding: 0 10px;
  gap: 5px;

  .prev, .next, .arrow-down {
    display: flex;
    align-items: center;
  }

  .tabs-scroll {
    white-space: nowrap;
    overflow: hidden;
    flex: 1;

    .tabs {
      flex: 1;
      align-items: center;
      display: flex;
      gap: 10px;
      //flex-wrap: wrap;

      .tab {
        margin: 6px 0;
        display: flex;
        align-items: center;
        gap: 6px;
        border-radius: var(--tabs-item-border);
        color: var(--tabs-text-color);
        cursor: pointer;
        transition: all 0.3s;
        padding: 6px 8px 4px;
        background-color: var(--tabs-item-bg);
        user-select: none;

        &:hover {
          background-color: var(--tabs-item-bg-hover);
        }

        .close {
          display: flex;
          align-items: center;
        }
      }

      .active {
        color: var(--primary-color);
      }
    }
  }
}
</style>
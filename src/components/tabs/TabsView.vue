<script setup lang="ts">

import {ArrowDown, ArrowLeft, ArrowRight, Close, HomeFilled} from "@element-plus/icons-vue";

const items = [{
  text: "首页",
  active: true,
}, {text: "监控大屏"},
  {text: "数据大屏"},
  {text: "数据大屏"},
  {text: "数据大屏"},
  {text: "数据大屏"},
  {text: "数据大屏"},
  {text: "数据大屏"},
  {text: "数据大屏"},
  {text: "数据大屏"},
  {text: "数据大屏"},
]
const scroller = ref<any>(null)
const tabItems = ref<any>(null)
const parent = ref<any>(null)

function getElementsPosition() {
  let parentX = parent.value.offsetLeft;

  let pos = [];
  //获取tabsEl的所有子元素
  let tabs = tabItems.value
  for (let i = 0; i < tabs.length; i++) {
    let x = tabs[i].offsetLeft - parentX;
    pos.push({
      x,
      w: tabs[i].offsetWidth,
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
  if(mouseDownFlag){
    let val=e.clientX-startX
    scroller.value.scrollLeft=startScrollLeft-val
    console.log("move",e.clientX-startX)

  }
}

function mouseUp(e: any) {
  //获取当前滚动条的位置
  startX = 0
  mouseDownFlag = false;
}


</script>

<template>
  <div class="tabs-view">
    <div class="prev">
      <el-button circle text :icon="ArrowLeft" @click="prev"></el-button>
    </div>
    <div class="tabs-scroll" ref="scroller" @mousedown.left="mouseDown" @mousemove="mouseMove" @mouseup.left="mouseUp">
      <div class="tabs" ref="parent">
        <div :class="{tab:true,active:item.active}" v-for="(item,i) in items" ref="tabItems">
        <span class="name">
          {{ i }}-{{ item.text }}
        </span>
          <span class="close">
        <el-icon>
          <Close/>
        </el-icon>
        </span>
        </div>
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
            <el-dropdown-item>刷新当前</el-dropdown-item>
            <el-dropdown-item divided>关闭当前</el-dropdown-item>
            <el-dropdown-item>关闭其他</el-dropdown-item>
            <el-dropdown-item>全部关闭</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>

    </div>
  </div>
</template>

<style lang="scss">
:root {
  --tabs-bg: #fff;
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
    //overflow-x: hidden;
    white-space: nowrap;
    overflow: hidden;

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
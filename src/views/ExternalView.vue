<script setup lang="ts">
  const route = useRoute();
  const query=route.query;
  //解码
  const url=decodeURIComponent(<string>query.url)

</script>

<template>
    <div class="frame-view">
      <keep-alive :key="url">
        <iframe :src="url" border="0" frameborder="0"></iframe>
      </keep-alive>
    </div>
</template>

<style scoped>
.frame-view{
  flex: 1;
  overflow: hidden;
  iframe{
    width: 100%;
    height: 100%;
  }
}
</style>
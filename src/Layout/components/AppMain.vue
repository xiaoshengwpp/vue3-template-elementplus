<template>
  <div class="warp">
    <router-view></router-view>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.warp {
  min-height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  overflow: hidden;
  padding: 61px 20px 20px 20px;
  box-sizing: border-box;
}
</style>

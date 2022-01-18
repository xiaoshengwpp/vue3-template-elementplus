<template>
  <div class="">
    <div class="logo-container">
      <el-avatar
        :size="logoHeight"
        shape="square"
        src="https://pic2.zhimg.com/80/v2-bdb5db7fad86f94346f30c4577df31ac_720w.jpg?source=1940ef5c"
      />
      <h1 class="logo-title" v-if="$store.getters.sidebarOpened">
        Vue3-template
      </h1>
    </div>
    <el-scrollbar>
      <sidebar-menu></sidebar-menu>
    </el-scrollbar>
  </div>
</template>

<script setup>
import SidebarMenu from "./SidebarMenu.vue";

const logoHeight = 44;
</script>

<style lang="scss" scoped>
.logo-container {
  height: v-bind(logoHeight) + "px";
  padding: 10px 0 22px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  .logo-title {
    margin-left: 10px;
    color: #fff;
    font-weight: 600;
    line-height: 50px;
    font-size: 16px;
    white-space: nowrap;
  }
}
</style>

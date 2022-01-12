<template>
  <!-- 一级 menu 菜单 -->
  <el-menu
    active-text-color="#976dd5"
    background-color="#43507a"
    class="el-menu-vertical-demo"
    default-active="2"
    text-color="#fff"
  >
    <el-sub-menu index="1">
      <template #title>
        <el-icon><location /></el-icon>
        <span>一级菜单1</span>
      </template>

      <el-menu-item index="1-3">子级别3</el-menu-item>
    </el-sub-menu>
    <el-menu-item index="2">
      <el-icon><icon-menu /></el-icon>
      <span>二级菜单2</span>
    </el-menu-item>
    <el-menu-item index="3">
      <el-icon><document /></el-icon>
      <span>三级菜单3</span>
    </el-menu-item>
    <el-menu-item index="4">
      <el-icon><setting /></el-icon>
      <span>四级菜单4</span>
    </el-menu-item>
  </el-menu>
</template>

<script setup>
</script>

<style lang="scss" scoped>
</style>

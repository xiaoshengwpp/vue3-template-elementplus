<template>
  <!-- 这个写法饿了么新版本中好像不生效了 -->
  <!-- <i v-if="icon.includes('el-icon')" class="sub-el-icon" :class="icon"></i> -->
  <svg-icon :icon="icon"></svg-icon>
  <span :class="$store.getters.sidebarOpened ? 'my-tit' : ''">{{ title }}</span>
</template>

<script setup>
import { defineProps, onMounted } from 'vue'
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  }
})
// 看了文档才 猜到咋用。。。
onMounted(() => {
  // 没有this
  // console.log(this)\
  console.log(props.icon)
})
</script>

<style lang="scss" scoped>
.my-tit {
  margin-left: 16px;
}
</style>

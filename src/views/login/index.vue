<template>
  <div class="zine-finish"></div>
  <div class="main-body">
    <div class="form-warp">
      <h2 class="tit-h2-1">Log in</h2>
      <el-form
        label-position="top"
        label-width="100px"
        :model="netLogon"
        style="max-width: 260px"
      >
        <el-form-item>
          <label>
            <span class="loginId">userName</span>
          </label>
          <span> </span>
          <el-input
            color="#946dd6"
            v-model="netLogon.name"
            placeholder="UserName"
          >
            <template #prefix>
              <span class="custom-icon">
                <svg-icon icon="icon-name"></svg-icon>
              </span>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <label>
            <span class="loginId"></span>
          </label>
          <el-input v-model="netLogon.password" placeholder="Password">
            <template #prefix>
              <span class="custom-icon">
                <svg-icon icon="icon-mima"></svg-icon>
              </span>
            </template>
            <template #suffix>
              <span class="custom-icon-isyc">
                <svg-icon icon="icon-yc"></svg-icon>
              </span>
            </template>
          </el-input>
        </el-form-item>
      </el-form>
      <el-button color="#946dd6" class="login-btn" type="primary"
        >Log in</el-button
      >
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
const netLogon = reactive({
  name: '',
  password: ''
})
</script>
<style>
body {
  background-color: rgb(151, 109, 213);
  min-width: 1400px;
}
</style>
<style lang="scss" scoped>
::v-deep .el-input__inner:focus {
  border-color: #946dd6;
}
.zine-finish {
  width: 830px;
  height: 565px;
  position: absolute;
  left: 50%;
  top: 48.5%;
  transform: translate(-50%, -50%);
  background: rgba($color: #ffffff, $alpha: 0.2);
  border-radius: 12px;
}
.main-body {
  min-width: 950px;
  height: 565px;
  position: absolute;
  left: 50%;
  top: 52%;
  transform: translate(-50%, -50%);
  background: #ffffff;
  border-radius: 12px;
}
.form-warp {
  position: absolute;
  top: 20%;
  right: 0px;
  width: 320px;
  // background: #ccc;
  .tit-h2-1 {
    color: #494e66;
    font-weight: 600;
    text-align: center;
    padding-right: 60px;
    margin-bottom: 40px;
  }
  .loginId {
    color: #494e66;
  }
  .login-btn {
    width: 260px;
  }
  .custom-icon-isyc {
    cursor: pointer;
  }
}
</style>

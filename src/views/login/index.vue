<template>
  <div class="zine-finish"></div>
  <div class="main-body">
    <div class="form-warp">
      <h2 class="tit-h2-1">Log in</h2>
      <el-form
        label-position="top"
        label-width="100px"
        :model="netLogon"
        :rules="loginRules"
        style="max-width: 260px"
      >
        <el-form-item prop="username">
          <label>
            <span class="loginId">userName</span>
          </label>
          <span> </span>
          <el-input
            color="#946dd6"
            v-model="netLogon.username"
            placeholder="UserName"
            name="username"
          >
            <template #prefix>
              <span class="custom-icon">
                <svg-icon icon="icon-name"></svg-icon>
              </span>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <label>
            <span class="loginId">Password</span>
          </label>
          <el-input
            v-model="netLogon.password"
            placeholder="Password"
            name="password"
            :type="passwordType"
          >
            <template #prefix>
              <span class="custom-icon">
                <svg-icon icon="icon-mima"></svg-icon>
              </span>
            </template>
            <template #suffix>
              <span class="custom-icon-isyc" @click="onChangepassType">
                <svg-icon
                  :icon="
                    passwordType === 'password' ? 'icon-yc' : 'icon-xianshi'
                  "
                ></svg-icon>
              </span>
            </template>
          </el-input>
        </el-form-item>
      </el-form>
      <el-button color="#946dd6" class="login-btn" type="primary"
        >Log in</el-button
      >
    </div>
    <img class="bg-tp" src="@/assets/images/svWpjU2.jpeg" width="400" alt="" />
    <div class="main-title">
      <h3>Vue3</h3>
      <h3>template-ElementPlus</h3>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { validatePassword } from './rules'
// 定义数据
const netLogon = ref({
  username: 'admin',
  password: '123456'
})
// 校验规则
// eslint-disable-next-line no-unused-vars
const loginRules = ref({
  username: [
    {
      required: true,
      trigger: 'blur',
      message: '用户名不能为空'
    }
  ],
  password: [
    {
      required: true,
      trigger: 'blur',
      validator: validatePassword()
    }
  ]
})

// 处理密码框密码是否明文显示
const passwordType = ref('password')
const onChangepassType = () => {
  if (passwordType.value === 'password') {
    passwordType.value = 'text'
  } else {
    passwordType.value = 'password'
  }
}
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
  overflow: hidden;
  .bg-tp {
    width: 436px;
    position: absolute;
    left: 106px;
    bottom: 0px;
    opacity: 0.7;
  }
  .main-title {
    position: absolute;
    left: 88px;
    top: 100px;
    color: #374161;
    font-size: 30px;
    line-height: 50px;
    font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Ubuntu, 'Helvetica Neue', Arial, sans-serif;
  }
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
    font-size: 35px;
    font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Ubuntu, 'Helvetica Neue', Arial, sans-serif;
  }
  .loginId {
    color: #494e66;
    font-weight: 600;
    font-size: 12px;
    font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Ubuntu, 'Helvetica Neue', Arial, sans-serif;
  }
  .login-btn {
    width: 260px;
    font-weight: 600;
    font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Ubuntu, 'Helvetica Neue', Arial, sans-serif;
  }
  .custom-icon-isyc {
    cursor: pointer;
  }
}
</style>

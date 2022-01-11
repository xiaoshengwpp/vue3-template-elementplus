# vue3-template-elementplus

工作以来一直以 vue2 为基础开发项目，Vue3.0 版本发布后粗略翻看过几次文档，在持续关注中 2021 年八月 Vue3.2 发布 vue 正式推出了全新的 composition API 语法标准 script-setup，script-setup 的推出 标记着 setup 函数式语法 正式成为过去式。

对比 vue 早期的 composition API 中 setup 函数 个人感觉上熟悉了 2.0 写法是没那么爽的 写法全变了

而新的 script setup 推出就是上大家可以更爽的使用 composition 语法！真香

正好借着我这段空闲的时间 来以一个项目的形式 学习 script setup

学习过程中我将基于最新 vue 标准 来实现这个项目 它将包括：

1. script setup 语法标准

2. 最新的响应式变更

3. 组件状态驱动的动态 css

4. 最新 vue 全家桶

目标：尽可能贴近企业级项目工作实际开发时标准；（认知：我无法完成我目前认知以外的东西，但我会持续学习 ）

> **记录**

### 图标处理 方案 SvgIcon 组件

在实际项目中 我们有可能会使用当前项目所引入的 ui 组件库中的图标 或 公司 UI 设计提供的自定义图标

那么有没有一个组件能实现这两种能力：

1.  显示外部 图标
2.  显示内部自定义图标

基于此 结合阿里图标库实现此功能 大大简化对需要使用 icon 图标时的繁琐

SvgIcon：components--SvgIcon 文件内 使用方法：

```javascript
//把svg图标放入 icons-svg文件下  icon属性名填入 icon名称
<svg-icon icon="icon-name"></svg-icon>
```

```javascript
//安装依赖
npm i
//启动
npm run serve
//打包
npm run build
//修复
npm run lint
```

#### 更新状态记录：

1.  2022/01/10

- 使用最新的 vue cli 创建项目 手动升级 vue 最新版本使其支持最新 script setup 语法
- 尽可能编程规范 配置了 eslint、自动格式化规则、commitizen 规范代码提交

2. 2022/01/11
   - 初始化 cli 创建的项目、初始化 css 样式
   - 初始化 login 页面
   - 实现 svgicon 组件 用于更方便的使用自定义图标

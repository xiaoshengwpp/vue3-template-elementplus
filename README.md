# vue3-template-elementplus

工作以来一直以 vue2 为基础开发项目，Vue3.0 版本发布后粗略翻看过几次文档，在持续关注中 2021 年八月 Vue3.2 发布 vue 正式推出了全新的 composition API 语法标准 script-setup，script-setup 的推出 标记着 setup 函数式语法 正式成为过去式。

对比 vue 早期的 composition API 中 setup 函数 个人感觉上熟悉了 2.0 写法，新的版本写法全变了也抛开其它优化写法上并没比 2 方便？

而新的 script setup 推出就是上大家可以更爽的使用 composition 语法！因为它可以像写普通 js 流程一样去使用。真香

正好借着我这段空闲的时间 来以一个项目的形式 学习 script setup

学习过程中 基于最新 vue 标准 来实现这个项目 它将包括：

1. script setup 语法标准

2. 最新的响应式变更

3. 组件状态驱动的动态 css

4. 最新 vue 全家桶

目标：尽可能贴近企业级项目工作实际开发时标准；（认知：我无法完成我目前认知以外的东西，但我会持续学习 ）

### 数据接口 mock

花了一天时间搜索学习实践 emmm 我学会了 mock 数据 过程中虽然踩了很多坑 结果比较幸运流程还是走通了 最终选择采用 https://www.fastmock.site

mock 方案 试过了很多个 这个我个人认为比较方便

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

### 问题 1

> 如果了解过 Vue3 的话，那么会知道 vue3 中声明响应式数据有两种：
>
> 1.  ref
> 2.  reactive
>
> 对于这两种声明方式，我应该什么时候使用 ref 什么时候使用 reactive 呢 是不是很难？两者在应用层面上好像并没有什么明确的界限？就今天为止 2020/01/11 从网上搜索到的资料来看 依然未通过关键词来搜索到明确的解释
>
> ~~二者肯定不是用来区分基本类型和引用数据类型的~~ 因为都可以 [更多的说法是来区分风格](https://www.jianshu.com/p/ec9670c2ff5c)
>
> 在 [Vue3.2 发布](https://blog.vuejs.org/posts/vue-3.2.html) 性能改进介绍中 可以看到 某大佬改写了响应式部分内容并大大增加了性能在这次发布中也被合并了。
>
> **新的 ref 实现：**
>
> 提升了（约 260% 的读取速度/约 50% 的写入速度）
> 依赖项跟踪速度提高约 40%
> 内存使用量减少约 17%
>
> 那对于这个变化 是不是说在应用层中最大的体现就是 ref 这个 API，因为性能得到了大幅度提升
>
> 是不是 后面我能使用 ref 的地方都使用 ref，毕竟这本身也没什么问题 对不对？

### 问题记录 2

```vue
<el-dropdown-item @click="logout" divided>
              退出登录
</el-dropdown-item>
如上 这里用的最新版的饿了么ui库 1.3.0-beta.3 这个组件绑定点击事件 为何不生效
emmmm 这个问题困扰了我好久 始终没找到具体原因
看了下他这个组件实现好像也没什么问题 算了 不纠结这个问题了 只当是它bug了
我在外面包了一层 span 把点击时间绑定在span上解决了问题
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

### 本地存储方案

业务中 很多时候会需要把数据缓存起来方便下次使用不必频繁的调用接口

这里把常用的 localstorag 进行简单封装 在 utils/strrage.js 文件下 实现了三个常用方法

存储数据 获取数据 删除数据 以结合 vuex 来更方便使用

#### 更新状态记录：

1.  2022/01/10

- 使用最新的 vue cli 创建项目 手动升级 vue 最新版本使其支持最新 script setup 语法
- 尽可能编程规范 配置了 eslint、自动格式化规则、commitizen 规范代码提交

2. 2022/01/11
   - 初始化 cli 创建的项目、初始化 css 样式
   - 初始化 login 页面
   - 实现 svgicon 组件 用于更方便的使用自定义图标
3. 2022

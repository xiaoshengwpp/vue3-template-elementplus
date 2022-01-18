```javascript
npm i
npm run dev
```

> 不知不觉好几个小时过去了，功夫不负有心人，成功的转  vite  了 虽然还有点小瑕疵，但问题不大 已经解决了所有报错 成功运行  然后来记录一下升级vite 踩的坑

最简单的就是新创建个vite 重写项目，但这显然没有把我现有的项目升级为vite更有意义

思路：当然是先百度emmm  具体就是 先创建个vite项目，然后把packge依赖对换，用老项目的 的src目录替换vite项目的src目录。但实际操作下来并没有那么简单，好多细节还得处理。

反正就是各种报错，报错还是好处理的，有些起码能知道哪里错了，痛苦的是后面 npm run dev运行成功了没有任何报错但项目就是跑不起来白屏

问题：

1.  以前的 @ 这种导入 需要vite.config 里提前配置 不然只能../  ../../
2. webpack环境中引入组件是不需要.vue后缀的 但是vite 必须跟上.vue后缀
3. 项目里import path from 'path' 如果用到 path 需要换成  path-browserify
4. .html文件现在是module 引入js 跟之前不太一样
5. svg-sprite-loader 不支持vite 这个直接换个就好了 替代方案很多 但当时的报错很迷 控制台报某几个页面 404. 想了很久才想明白可能是这个loader的问题  
6. 使用props的时候 不需要在 im {defineProps} ‘vue’  直接用defineProps就好
7. process 也变了
8. 好像还有点什么 记不清了。。。

至此 成功 emmmm

总结：

@引入方式 需要提前配置，vue文件必须跟上后缀 ，引入第三方包 需要看看有没有vite的或者替代品 然后其它配置看文档查资料


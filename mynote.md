## 自适应

### 工作原理
- 利用`viewport`和设备像素比调整基准像素

### viewport
### rem

基于html的`font-size`大小

## SPA设计

### 设计意义
- 前后端分离
- 减轻服务器压力
- 增强用户体验
- `Prerender`预渲染优化SEO
### 工作原理
- History API
    1. 要能执行一个打开的动作
    2. 要有历史操作记录单 `pushState` 记录历史操作记录，`onpopState`控制页面前进后退 

每一个入口对应一个页面，通过js控制，当浏览器点击前进后退

- Hash
    1. 当改变某一个地址的时候，监听`hashchange`事件，可以知道页面地址发生了变化，在事件里面完成相应的操作
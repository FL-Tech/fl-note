<template>
  <div id="app">
    <title-bar></title-bar>
    <main-container></main-container>
  </div>
</template>

<script>
import 'normalize.css'
import TitleBar from './components/title-bar'
import MainContainer from './components/main-container'

export default {
  name: 'fl-note',
  components: {TitleBar, MainContainer}
}
</script>

<style lang="scss">
@import './assets/scss/reset-element-ui.scss';
@import './assets/iconfont/iconfont.css';
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-size: 14px;
  // 全局滚动条设置
  &::-webkit-scrollbar {
    width: 7px;
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background-color: $POPOVER_BACKGROUND_COLOR;
  }
}

html,
body,
#app {
  width: 100%;
  height: 100%;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Helvetica Neue', STHeiti,
    'Microsoft Yahei', Tahoma, Simsun, sans-serif;
}

#app {
  background-color: rgba(38, 50, 56, 0.2);
}
</style>

<template>
  <div id="app">
    <div class="title-bar">
      <title-bar></title-bar>
    </div>
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

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
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
.title-bar {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 40px;
  z-index: 2;
}

#app {
  background-color: rgba(38, 50, 56, 0.2);
}
</style>

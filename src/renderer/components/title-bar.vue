<template>
  <div class="title-bar"></div>
</template>


<script>
export default {

}
</script>


<style lang="scss" scoped>
.title-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 40px;
  background-color: $HOVER_BACKGROUND_COLOR;
  cursor: move;
  z-index: 2;
  -webkit-app-region: drag;
}
</style>

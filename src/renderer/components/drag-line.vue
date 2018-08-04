<template>
  <div class="drag-line"></div>
</template>


<script>
export default {

}
</script>


<style lang="scss" scoped>
.drag-line {
  position: relative;
  width: 10px;
  height: 100%;
  cursor: ew-resize;
  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 1px;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.2);
  }
}
</style>

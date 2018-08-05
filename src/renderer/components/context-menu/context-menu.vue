<template>
  <div v-show="show" class="context-menu" @click.stop :style="{'left': calcLeft, 'top': calcTop, 'width': calcWidth, 'height': calcHeight}">
    <slot></slot>
  </div>
</template>

<script>
import {mapState} from 'vuex'

const PX_UNIT = 'px'
export default {
  computed: {
    ...mapState('ui', {
      show: state => state.contextMenu.show,
      calcLeft: state => state.contextMenu.x + PX_UNIT,
      calcTop: state => state.contextMenu.y + PX_UNIT,
      calcWidth: state => state.contextMenu.width + PX_UNIT,
      calcHeight: state => state.contextMenu.height + PX_UNIT
    })
  }
}
</script>

<style lang="scss" scoped>
.context-menu {
  position: fixed;
  background-color: rgba(38, 50, 56, 0.9);
  border-radius: 5px;
  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.1);
  padding: 5px 0;
  z-index: 3;
}
</style>


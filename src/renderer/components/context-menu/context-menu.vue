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
  @include POPOVER;
  position: fixed;
  padding: 5px 0;
  z-index: 3;
}
</style>


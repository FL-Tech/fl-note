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
      calcLeft: state => {
        // 判断 （x + 窗体宽度）是否会超出屏幕宽度
        let offset = 0
        if (state.contextMenu.x + state.contextMenu.width >= state.clientWidth) {
          offset = state.contextMenu.width
        }
        return state.contextMenu.x + offset + PX_UNIT
      },
      calcTop: state => {
        // 判断 （y + 窗体高度）是否会超出屏幕高度
        let offset = 0
        if (state.contextMenu.y + state.contextMenu.height >= state.clientHeight) {
          offset = state.contextMenu.height
        }
        return state.contextMenu.y - offset + PX_UNIT
      },
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


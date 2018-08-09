<template>
  <div class="main-container"
       @click="globalClickHandle">
    <div class="library">
      <library></library>
    </div>
    <drag-line></drag-line>
    <div class="doc-list">
      <doc-list></doc-list>
    </div>
    <drag-line></drag-line>
    <div class="router-container">
      <router-view></router-view>
    </div>
  </div>
</template>


<script>
import Library from './library'
import DocList from './doc-list'
import DragLine from './drag-line'
import { NAMESPACE, SET_MENU_PANEL } from '@/store/mutation-types/ui.js'

export default {
  components: { Library, DocList, DragLine },
  methods: {
    globalClickHandle () {
      this.$store.commit(`${NAMESPACE}/${SET_MENU_PANEL}`, { show: false })
    }
  }
}
</script>


<style lang="scss" scoped>
.main-container {
  width: 100%;
  height: 100%;
  display: flex;
  color: $MAIN_FONT_COLOR;
  padding-top: 40px;
  .library,
  .doc-list {
    width: 200px;
  }
  .router-container {
    flex: 1;
  }
}
</style>

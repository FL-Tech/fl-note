<template>
  <div class="main-container">
    <div class="libary">
      <libary></libary>
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
import Libary from './libary'
import DocList from './doc-list'
import DragLine from './drag-line'

export default {
  components: {Libary, DocList, DragLine}
}
</script>


<style lang="scss" scoped>
.main-container {
  width: 100%;
  height: 100%;
  display: flex;
  color: #f1f1f1;
  .libary,
  .doc-list {
    width: 200px;
  }
}
</style>

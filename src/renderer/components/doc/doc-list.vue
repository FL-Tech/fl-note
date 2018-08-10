<template>
  <div class="doc-list">
    <doc-item v-for="doc in docs"
              :key="doc.id"
              :title="doc.title"></doc-item>
  </div>
</template>


<script>
import DocItem from './doc-item'
import { NAMESPACE } from '@/store/mutation-types/doc'
import { mapState } from 'vuex'

export default {
  components: { DocItem },
  computed: {
    ...mapState(NAMESPACE, {
      docs: state => state.docs
    })
  }
}
</script>


<style lang="scss" scoped>
.doc-list {
  width: 100%;
  height: 100%;
  padding: $ITEM_PADDING;
}
</style>

<template>
  <div class="doc-list">
    <doc-item v-for="doc in docs"
              :key="doc.id"
              :title="doc.title"
              :create-date="doc.createDateOrigin"></doc-item>
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
      docs: state => {
        return state.docs.map(doc => {
          return {
            ...doc,
            createDateOrigin: new Date(doc.createDate)
          }
        })
      }
    })
  }
}
</script>


<style lang="scss" scoped>
.doc-list {
  width: 100%;
  height: 100%;
}
</style>

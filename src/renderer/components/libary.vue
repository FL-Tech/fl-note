<template>
  <div class="libary">
    <el-tree :data="libary" :props="defaultProps" default-expand-all :expand-on-click-node="false" :render-content="renderContent" @node-click="handleNodeClick"></el-tree>
  </div>
</template>


<script>
  export default {
    data () {
      return {
        libary: this.$model.Libary.value(),
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      }
    },
    mounted () {
      // 对数组进行insert操作
      // this.$model.Libary.insert({
      //   label: '4级'
      // }).write()
    },
    methods: {
      append (data) {
        const newChild = {label: 'testtest', children: []}
        if (!data.children) {
          this.$set(data, 'children', [])
        }
        data.children.push(newChild)
      },

      remove (node, data) {
        const parent = node.parent
        const children = parent.data.children || parent.data
        const index = children.findIndex(d => d.id === data.id)
        children.splice(index, 1)
      },
      renderContent (h, { node, data, store }) {
        return {}
      },
      handleNodeClick (data) {
        console.log(data)
      }
    }
  }
</script>


<style lang="scss" scoped>
.libary {
  width: 100%;
  height: 100%;
}
</style>

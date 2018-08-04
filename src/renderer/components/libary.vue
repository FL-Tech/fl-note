<template>
  <div class="libary-container">
    <context-menu></context-menu>
    <el-tree :data="libary" :props="defaultProps" default-expand-all :expand-on-click-node="false" @node-click="nodeClickHandle" @node-contextmenu="nodeContextmenuHandle"></el-tree>
  </div>
</template>


<script>
  import {mapMutations} from 'vuex'
  import ContextMenu from './context-menu'

  export default {
    components: {ContextMenu},
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
      ...mapMutations('ui', [
        'SET'
      ]),
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
        return (
          <span style="display: flex;align-items: center;justify-content: space-between;padding-right: 8px;" >
            <span>{node.label}</span>
          </span>)
      },
      nodeClickHandle (e, data) {
        console.log('触发文档点击事件：')
        this.$store.commit('ui/SET', {show: false})
      },
      nodeContextmenuHandle (e, data, node, c) {
        console.log('触发文档右键点击事件：', e, data, node, c)
        this['SET']({
          show: true,
          x: e.clientX,
          y: e.clientY
        })
      }
    }
  }
</script>


<style lang="scss" scoped>
.libary-container {
  width: 100%;
  height: 100%;
  user-select: none; // 禁止用户选中文本
}
</style>

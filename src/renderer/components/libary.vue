<template>
  <div class="libary">
    <el-tree :data="libary" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
  </div>
</template>


<script>
  export default {
    data () {
      return {
        libary: this.$db.read().get('libary').value(),
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      }
    },
    methods: {
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

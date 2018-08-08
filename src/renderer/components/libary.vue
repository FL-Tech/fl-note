<template>
  <div class="libary-container" @contextmenu="nodeContextmenuHandle">
    <!-- 右键菜单 -->
    <context-menu>
      <context-item v-if="rightClickNodeDate" @click.native="editNoteHandle">编辑</context-item>
      <context-item v-if="rightClickNodeDate">新建文档</context-item>
      <context-item v-if="rightClickNodeDate" @click.native="addNewSubLibaryHandle">新增子分类</context-item>
      <context-item @click.native="addNewLibaryHandle">新增分类</context-item>
    </context-menu>
    <!-- 菜单树 -->
    <el-tree :data="libary" :props="treeProps" default-expand-all :expand-on-click-node="false" @node-click="nodeClickHandle" @node-contextmenu="nodeContextmenuHandle">
      <div class="custom-tree-node" slot-scope="{ node, data }">
        <el-popover placement="bottom-end" trigger="manual" @show="popoverShowHandle(node, data)" v-model="data.showPopover">
          <el-form inline label-width="0px">
            <el-form-item>
              <el-input placeholder="请输入分类名称" size="mini" v-model="data.label" v-focus @focus="inputFocusHandle($event, data)" @blur="inputBlurHandle(data)"></el-input>
            </el-form-item>
          </el-form>
          <div slot="reference" class="tree-item">
            <i class="el-icon el-icon-fl-note-folder"></i>
            <span class="node">{{node.label}}</span>
          </div>
        </el-popover>
      </div>

    </el-tree>

  </div>
</template>


<script>
  import { NAMESPACE, SET_MENU_PANEL, CLOSE_MENU_PANEL } from '@/store/mutation-types/ui.js'
  import { mapMutations } from 'vuex'
  import ContextMenu from './context-menu/context-menu'
  import ContextItem from './context-menu/context-item'

  const STATUS = {
    DEFAULT: 'DEFAULT',
    EDITING: 'EDITING'
  }

  const getNewLibary = () => {
    const NEW_LIBARY = {
      label: 'Untitled',
      isEditing: true,
      children: []
    }
    return NEW_LIBARY
  }

  export default {
    components: {ContextMenu, ContextItem},
    data () {
      return {
        STATUS,
        libary: this.$model.Libary.value(),
        rightClickNodeDate: undefined,
        treeProps: {
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
      ...mapMutations(NAMESPACE, [ SET_MENU_PANEL, CLOSE_MENU_PANEL ]),
      closeMenuPanel() {
        this[CLOSE_MENU_PANEL]()
      },
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
        // jsx语法
        const displayNode = data.status === STATUS.EDITING ? <el-input on-input autofocus placeholder="请输入分类名称" size="mini"></el-input> : <span>{node.label}</span>
        console.log('当前节点：', displayNode)
        return (
          <span style="display: flex;align-items: center;justify-content: space-between;padding-right: 8px;" >
            {displayNode}
          </span>)
      },
      nodeClickHandle (e, data) {
        console.log('触发文档点击事件：')
        this.closeMenuPanel()
      },
      nodeContextmenuHandle (e, data, node, c) {
        console.log('触发文档右键点击事件：', e, data, node, c)
        // 记录当前右键点击节点ID
        this.rightClickNodeDate = data
        this[SET_MENU_PANEL]({
          show: true,
          x: e.clientX,
          y: e.clientY
        })
      },
      editNoteHandle () {
        this.closeMenuPanel()
        this.rightClickNodeDate.showPopover = true
      },
      pushNewFolderToLibary(libary) {
        this.closeMenuPanel()
        const newLibary = getNewLibary()
        libary.push(newLibary)
        this.$nextTick(() => {
          /**
           * 避免popover获取不到ref的位置，所以要先push到数组，
           * 等待界面渲染后，再调用showPopover显示编辑框
           *
           */
          newLibary.showPopover = true
        })
      },
      addNewLibaryHandle () {
        this.pushNewFolderToLibary(this.libary)
      },
      addNewSubLibaryHandle() {
        // 在当前右键节点下增加children
        this.pushNewFolderToLibary(this.rightClickNodeDate.children)
      },
      popoverShowHandle(node, data) {
        console.log(node)
        console.log(data)
      },
      inputFocusHandle (e) {
        console.log(e)
        e.target.select()
      },
      inputBlurHandle(data) {
        console.log('输入框失去焦点，更新该列表到DB中', data)
        data.showPopover = false
        this.$model.Libary.write() // 写入数据库
      }
    }
  }
</script>


<style lang="scss" scoped>
.libary-container {
  width: 100%;
  height: 100%;
  padding: 10px 0;
  user-select: none; // 禁止用户选中文本
  .tree-item {
    display: flex;
    align-items: center;
    .el-icon {
      font-size: 18px;
    }
    .node {
      padding-left: 0.2rem;
    }
  }
}
</style>

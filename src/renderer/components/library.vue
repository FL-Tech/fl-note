<template>
  <div class="library-container"
       @contextmenu="nodeContextmenuHandle">
    <!-- 右键菜单 -->
    <context-menu>
      <context-item v-if="rightClickNodeDate"
                    @click.native="editNoteHandle">编辑</context-item>
      <context-item v-if="rightClickNodeDate"
                    @click.native="addNewDocHandle">新建文档</context-item>
      <context-item v-if="rightClickNodeDate"
                    @click.native="addNewSubLibraryHandle">新增子分类</context-item>
      <context-item @click.native="addNewLibraryHandle">新增分类</context-item>
    </context-menu>
    <!-- 菜单树 -->
    <div class="library-tree"
         ref="wrapper">
      <el-tree :data="library"
               :props="treeProps"
               default-expand-all
               :expand-on-click-node="false"
               @node-click="nodeClickHandle"
               @node-contextmenu="nodeContextmenuHandle">
        <div class="custom-tree-node"
             slot-scope="{ node, data }">
          <!-- 每个节点的弹出框（提供编辑信息录入） -->
          <el-popover placement="bottom-end"
                      trigger="manual"
                      @show="popoverShowHandle(node, data)"
                      v-model="data.showPopover">
            <el-form inline
                     label-width="0px">
              <el-form-item>
                <el-input placeholder="请输入分类名称"
                          size="mini"
                          v-model="data.label"
                          v-focus
                          @focus="inputFocusHandle($event, data)"
                          @blur="inputBlurHandle(data)"
                          @keyup.native.enter="inputBlurHandle(data)"></el-input>
              </el-form-item>
            </el-form>
            <div slot="reference"
                 class="tree-item">
              <i class="el-icon el-icon-fl-note-folder"></i>
              <span class="node">{{node.label}}</span>
            </div>
          </el-popover>
        </div>
      </el-tree>
    </div>
  </div>
</template>


<script>
import { mapMutations } from 'vuex'
import ContextMenu from './context-menu/context-menu'
import ContextItem from './context-menu/context-item'
import { NAMESPACE, SET_MENU_PANEL, CLOSE_MENU_PANEL } from '@/store/mutation-types/ui'

import { NAMESPACE as DOC_NAMESPACE, ADD_DOC } from '@/store/mutation-types/doc'
const STATUS = {
  DEFAULT: 'DEFAULT',
  EDITING: 'EDITING'
}

const getNewLibrary = () => {
  const NEW_LIBRARY = {
    label: 'Untitled',
    isEditing: true,
    children: []
  }
  return NEW_LIBRARY
}

export default {
  components: { ContextMenu, ContextItem },
  data () {
    return {
      STATUS,
      scroll: undefined, // 滚动
      library: this.$model.Library.get(),
      rightClickNodeDate: undefined,
      treeProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  mounted () {
  },
  methods: {
    ...mapMutations(NAMESPACE, [SET_MENU_PANEL, CLOSE_MENU_PANEL]),
    closeMenuPanel () {
      this[CLOSE_MENU_PANEL]()
    },
    append (data) {
      const newChild = { label: 'testtest', children: [] }
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
    pushNewFolderToLibrary (library) {
      this.closeMenuPanel()
      const newLibrary = getNewLibrary()
      library.push(newLibrary)
      this.$nextTick(() => {
        /**
         * 避免popover获取不到ref的位置，所以要先push到数组，
         * 等待界面渲染后，再调用showPopover显示编辑框
         *
         */
        newLibrary.showPopover = true
      })
    },
    addNewLibraryHandle () {
      this.pushNewFolderToLibrary(this.library)
    },
    addNewSubLibraryHandle () {
      // 在当前右键节点下增加children
      this.pushNewFolderToLibrary(this.rightClickNodeDate.children)
    },
    popoverShowHandle (node, data) { },
    inputFocusHandle (e) {
      e.target.select()
    },
    inputBlurHandle (data) {
      console.log('输入框失去焦点，更新该列表到DB中', data)
      data.showPopover = false
      this.$model.Library.add(data)
    },
    addNewDocHandle () {
      const newDoc = {
        'libraryId': this.rightClickNodeDate.id,
        'title': 'Untitle',
        'createTime': '2018-07-15',
        'content': ''
      }
      this.$store.commit(`${DOC_NAMESPACE}/${ADD_DOC}`, newDoc)
    }
  }
}
</script>


<style lang="scss" scoped>
.library-container {
  width: 100%;
  height: 100%;
  padding: 10px 0;
  user-select: none; // 禁止用户选中文本
  .library-tree {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
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
}
</style>

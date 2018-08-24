<template>
  <div class="doc-item">
    <div class="title">{{title}}</div>
    <div class="create-time">{{createDateStr}}</div>
  </div>
</template>


<script>
import dayjs from 'dayjs'
export default {
  props: {
    title: {
      type: String,
      required: true,
      default: 'Untitle'
    },
    createDate: {
      type: Date,
      required: false,
      default: new Date()
    }
  },
  computed: {
    createDateStr () {
      return dayjs(this.createDate).format('YYYY-MM-DD HH:mm:ss')
    }
  }
}
</script>


<style lang="scss" scoped>
.doc-item {
  width: 100%;
  padding: $ITEM_PADDING;
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: $LINE_COLOR 1px solid;
  transition: background 0.5s;
  &:hover {
    background-color: $HOVER_BACKGROUND_COLOR;
  }
  .title {
    line-height: 2;
  }
  .create-time {
    font-size: 12px;
  }
}
</style>

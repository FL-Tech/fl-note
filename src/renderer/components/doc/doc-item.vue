<template>
  <div class="doc-item">
    <div class="title">{{title}}</div>
    <div class="create-time">{{createDate}}</div>
  </div>
</template>


<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    createDate: {
      type: Date,
      required: false
    }
  }
}
</script>


<style lang="scss" scoped>
.doc-item {
  width: 100%;
  height: 80px;
  padding: $CONTENT_PADDING;
}
</style>

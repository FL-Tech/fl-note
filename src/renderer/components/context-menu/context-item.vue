<template>
  <div class="context-item">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: false
    },
    // 扩展数据
    extData: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>


<style lang="scss" scoped>
.context-item {
  padding: $ITEM_PADDING;
  transition: background 0.5s;
  &:hover {
    background-color: $HOVER_BACKGROUND_COLOR;
  }
}
</style>

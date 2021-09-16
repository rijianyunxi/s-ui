<template>
  <i
    class="s-icon"
    :style="`font-size:${fontSize};`"
    :class="`iconfont ${icon}`"
  ></i>
</template>

<script>
export default {
  name: "s-icon",
  props: {
    fontSize: {
      type: String,
      default: "16px",
    },
    icon: {
      type: String,
      required: true,
    }
  },
};
</script>

<style lang="scss">
@import "../styles/icon.css";
i {
  vertical-align: middle;
}
</style>
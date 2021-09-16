<template>
  <div class="s-button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "s-button-group",
  mounted() {
    let children = this.$el.children;
    for (let i = 0; i < children.length; i++) {
      // console.log(children[i].tagName);
      console.assert(children[i].tagName === "BUTTON", "子元素必须为button");
    }
  },
};
</script>

<style lang="scss">
@import "../../styles/_var.scss";
 .s-button-group {
  display: inline-flex;
  vertical-align: middle;
  button {
    border-radius: 0;
    &:first-child{
        border-top-left-radius: $border-radius;
        border-bottom-left-radius:$border-radius;
    };
    &:last-child{
        border-top-right-radius: $border-radius;
        border-bottom-right-radius:$border-radius;
    }
  }
}
</style>
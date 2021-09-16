<template>
  <button
    class="s-button"
    :class="btnClass"
    :disabled="loading"
    @click="$emit('click', $event)"
  >
    <Icon :class="{'toright' : iconPosition === 'right'}" v-if="icon && !loading" :icon="`${icon}`"></Icon>
    <Icon :class="{'toright' : iconPosition === 'right'}" v-if="loading" icon="icon-loading"></Icon>
    <span v-if="this.$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script>
import Icon from "../Icon.vue";
export default {
  name: "s-button",
  components: {
    Icon,
  },
  props: {
    type: {
      type: String,
      default: "",
      validator(type) {
        if (
          type &&
          !["success", "danger", "warning", "info", "primary"].includes(type)
        ) {
          console.error(
            "type类型必须为" +
              ["success", "danger", "warning", "info", "primary"].join(",")
          );
        }
        return true;
      },
    },
    icon: {
      type: String,
      default: "",
    },
    loading: {
      type: Boolean,
      default: false,
    },
    iconPosition: {
      type: String,
      default: "left",
      validator(iconPosition) {
        if (iconPosition && !["left", "right"].includes(iconPosition)) {
          console.error("iconPosition类型必须为" + ["left", "right"].join(","));
        }
        return true;
      },
    },
  },
  computed: {
    btnClass() {
      let classes = [];
      if (this.type) {
        classes.push(`s-button-${this.type}`);
      }
      return classes;
    },
  },
};
</script>

<style lang="scss">
@import "../../styles/_var.scss";
$height: 42px;
$font-size: 16px;
$color: #606266;
$border-color: #dcdfe6;
$background: #ecf5ff;
$active-color: #3a8ee6;
.s-button {
  border-radius: $border-radius;
  border: 1px solid $border-color;
  height: $height;
  font-size: $font-size;
  cursor: pointer;
  padding: 12px 20px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  &:hover {
    border-color: $border-color;
    background-color: $background;
  }
  &:focus,
  &:active {
    color: $active-color;
    border-color: 1px solid $active-color;
    outline: none;
    background: $background;
  }
  @each $type,
    $color
      in (
        primary: $primary,
        success: $success,
        warning: $warning,
        danger: $danger,
        info: $info
      )
  {
    &-#{$type} {
      background: #{$color};
      border: 1px solid #{$color};
      color: #fff;
    }
  }
  @each $type,
    $color
      in (
        primary: $primary-hover,
        success: $success-hover,
        warning: $warning-hover,
        danger: $danger-hover,
        info: $info-hover
      )
  {
    &-#{$type}:hover {
      background: #{$color};
      border: 1px solid #{$color};
      color: #fff;
    }
  }
  @each $type,
    $color
      in (
        primary: $primary-active,
        success: $success-active,
        warning: $warning-active,
        danger: $danger-active,
        info: $info-active
      )
  {
    &-#{$type}:active,
    &-#{$type}:focus {
      background: #{$color};
      border: 1px solid #{$color};
      color: #fff;
    }
  }
  .toright{
    order: 2;
  }
  .s-icon {
    margin: 0 5px;
  }
  &[disabled] {
    cursor: not-allowed;
  }
}
</style>
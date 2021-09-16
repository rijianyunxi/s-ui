<template>
  <div class="s-input" :class="inputClass">
    <!-- 前图标 -->
    <s-icon v-if="prefixIcon" :icon="prefixIcon"></s-icon>
    <input
      :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
      :placeholder="placeholder"
      :value="value"
      :disabled="disabled"
      @input="$emit('input', $event.target.value)"
    />
    <!-- 后图标 -->
    <s-icon v-if="suffixIcon" :icon="suffixIcon"></s-icon>
    <!-- 密码查看 -->
    <s-icon
      v-if="showPassword && value"
      icon="icon-yanjing"
      @click.native="passwordVisible = !passwordVisible"
      @mousedown.native.prevent
    ></s-icon>
    <!-- x号 -->
    <s-icon
      class="icon-position"
      icon="icon-cuo"
      v-if="clearable && value"
      @click.native="$emit('input', '')"
      @mousedown.native.prevent
    ></s-icon>
  </div>
</template>

<script>
export default {
  name: "s-input",
  data() {
    return {
      passwordVisible: false,
    };
  },
  computed: {
    inputClass() {
      let classes = [];
      if (this.suffixIcon || this.showPassword || this.clearable) {
        classes.push("suffix");
      }
      if (this.prefixIcon) {
        classes.push("prefix");
      }
      return classes;
    },
  },
  props: {
    type: {
      type: String,
      default: "type",
    },
    placeholder: {
      type: String,
      default: "请输入内容",
    },
    value: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    clearable: {
      type: Boolean,
      default: false,
    },
    showPassword: {
      type: Boolean,
      default: false,
    },
    prefixIcon: String,
    suffixIcon: String,
  },
};
</script>
  
<style  lang="scss">
@import "../styles/_var.scss";
.s-input {
  display: inline-block;
  input {
    box-sizing: border-box;
    padding: 8px;
    width: 180px;
    height: 40px;
    border-radius: $border-radius;
    border: 1px solid #dcdfe6;
    &:focus {
      border: 1px solid $primary;
      outline: none;
      box-shadow: inset -1px 0px 2px $primary inset 1px 1px 1px $primary;
    }
    &[disabled] {
      cursor: not-allowed;
      background-color: #eeeeee;
    }
  }
}
.suffix {
  position: relative;
  input {
    padding-right: 25px;
  }
  .s-icon {
    position: absolute;
    right: 8px;
    top: 50%;
    transform: translateY(-50%);
  }
}
.prefix {
  position: relative;
  input {
    padding-left: 26px;
  }
  .s-icon {
    position: absolute;
    left: 8px;
    top: 50%;
    transform: translateY(-50%);
    margin-right: 8px;
  }
}
</style>
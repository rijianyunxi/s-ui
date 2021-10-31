<template>
  <div v-outside class="calendar">
    <input type="text" :value="formDate" />
    <div v-if="isShow" class="pannel">
        <div class="col" v-for="i in 6" :key="i">
            <span class="day" v-for="j in 7" :key="j">{{days[(i-1)*7+(j-1)]}}</span>
        </div>
    </div>
  </div>
</template>

<script>
import { dealDate } from "./util/index";
export default {
  name: "s-calendar",
  data() {
    return {
      isShow: false,
    };
  },
  directives: {
    outside: {
      bind(el, bindings, vnode) {
        let handler = (e) => {
          if (el.contains(e.target)) {
            vnode.context.focus();
            // this.blur()
          } else {
            // this.focus()
            vnode.context.blur();
          }
        };
        el.handler = handler;
        document.addEventListener("click", handler);
      },
      unbind(el) {
        document.removeEventListener("click", el.handler);
      },
    },
  },
  props: {
    value: {
      type: Date,
      default: () => new Date(),
    },
  },
  computed: {
    formDate() {
      let { year, month, day } = dealDate(this.value);
      return `${year}-${month}-${day}`;
    },
    days() {
      let arr = [];
      if (this.isShow) {
        let { year, month } = dealDate(this.value);
        let week = new Date(year, month - 1, 1).getDay();
        console.log(week);
        let first = new Date(year, month - 1, 1) - (week-1) * 60 * 60 * 1000 * 24;
        console.log(first);
        for (let i = 0; i < 42; i++) {
          arr.push(new Date(first + i * 60 * 60 * 1000 * 24).getDate());
        }
      }
      return arr
    },
  },
  methods: {
    focus() {
      this.isShow = true;
    },
    blur() {
      this.isShow = false;
    },
  },
};
</script>

<style lang="scss">
.calendar {
  input {
    display: block;
    padding: 10px;
    &:focus {
      border: 1px solid orange;
    }
  }
  .col{
      width: 420px;
      display: flex;
      .day{
      display: inline-block;
      height: 60px;
      width: 60px;
      line-height: 60px;
      text-align: center;
      color: orange;
      font-size: 14px;
      background-color: #f2f2f2;
      box-sizing: border-box;
      border: 1px solid #ddd;
  }
  }
  
}
</style>
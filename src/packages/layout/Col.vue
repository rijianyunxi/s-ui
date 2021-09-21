<template>
  <div class="s-col" :class="colClass">
      <slot></slot>
  </div>
</template>

<script>
export default {
    name:"s-col",
    mounted(){
        // console.log(this.$options.name);
        console.log(this.$parent.$children[0].$options);
    },
    props:{
        span:{
            type:Number,
            default:12
        },
        offset:{
            type:Number,
            default:0
        }
    },
    computed:{
        colClass(){
            let classes = [];
            if(this.span){
                classes.push(`s-col-${this.span}`)
            };
            if(this.offset){
                classes.push(`s-col-offset-${this.offset}`)
            };
            return classes
        }
    }
}
</script>

<style lang="scss">
    @for $i from 1 through 24{
        .s-col-#{$i}{
            width: ($i)/24 * 100%;
        }
    }
    @for $i from 1 through 24{
        .s-col-offset-#{$i}{
            margin-left: ($i)/24 * 100%;
        }
    }
</style>
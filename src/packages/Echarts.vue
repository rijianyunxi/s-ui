<template>
  <div :style="style" :ref="uuid">
      <p v-if="true"></p>
  </div>
</template>

<script>
import * as echarts from "echarts"
export default {
    name:"s-echarts",
    props:{
        width:{
            type:String,
            default:"400px"
        },
        height:{
            type:String,
            default:"300px"
        },
        options:{
            type:Object,
        }
    },
    computed:{
        style(){
            return `height:${this.height};width:${this.width}`
        }
    },
    data(){
        return{
            uuid:"0"
        }
    },
    created(){
        this.uuid = new Date().getTime()
    },
    mounted(){
        this.echart =echarts.init(this.$refs[this.uuid]);
        this.echart.setOption(this.options)

    }
}
</script>

<style>

</style>
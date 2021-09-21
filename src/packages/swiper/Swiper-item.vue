<template>
  <div class="swiper-item">
       <slot></slot>
  </div>
</template>

<script>
export default {
     name:"swiper-item"
}
</script>

<style lang="scss">
  .swiper-item{
    height: 100%;
    width: 100%;
  }
</style>
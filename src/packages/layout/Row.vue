<template>
    <div class="s-row">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:"s-row"
}
</script>

<style lang="scss">
    .s-row{
        display: flex;
        margin: 5px 0;
    }
</style>
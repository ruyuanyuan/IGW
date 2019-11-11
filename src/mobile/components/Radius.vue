<template>
    <div class="Radius">
      <div class="gwi-row-more" :style="{background:bg}">点击了解更多</div>
    </div>
</template>

<script>
    export default {
        name: "Radius",
        props:{
          bg: {
            default: "transparent"
          }
        },
        created() {

        },
        mounted() {

        },
        compontents: {},
        methods: {}
    }
</script>

<style scoped lang="scss">
    .Radius {
      display: flex;
      justify-content: center;
      .gwi-row-more{
        margin: 0.8rem 0;
        display: flex;
        justify-content: center;
        align-items: center;
        width:3.493rem;
        height:1.173rem;
        box-shadow:0rem 0.187rem 0.4rem 0.027rem rgba(0, 0, 0, 0.2);
        border-radius:0.587rem;
        font-size:0.32rem;
        color: #fff;
      }
    }
</style>

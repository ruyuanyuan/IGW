<template>
    <div class="Underline" :style="{color: color}">
       {{text}}
    </div>
</template>

<script>
    export default {
        name: "Underline",
        props: {
          text: {
            require: true
          },
          color: {
            default: "#07070D"
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
    .Underline {
      height: 1.28rem;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      font-size: 0.4rem;
      margin-bottom: 0.4rem;
      &::after{
        content: "";
        width:0.747rem;
        height:0.08rem;
        background:rgba(24,98,233,1);
        position: absolute;
        bottom: 0;
        left: 50%;
        margin-left: -0.373rem;
      }
    }
</style>

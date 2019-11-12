<template>
    <div class="Title">
      <div class="gwi-row-title" :style="{color: color}">{{text}}</div>
    </div>
</template>

<script>
    export default {
        name: "Title",
        props:{
          text: String,
          color: String
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
    .Title {
      .gwi-row-title{
        font-size: 0.427rem;
        padding: 0.533rem 0;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #07070D;
        &::before{
          content: '';
          display: inline-block;
          width: 0.5rem;
          height: 0.05rem;
          background: #1862E9;
          margin-right: 0.4rem;
        }
        &::after{
          content: '';
          display: inline-block;
          width: 0.5rem;
          height: 0.05rem;
          background: #1862E9;
          margin-left: 0.4rem;
        }
      }
    }
</style>

<template>
    <div class="Area">
      {{text}}
    </div>
</template>

<script>
    export default {
        name: "Area",
        created() {

        },
        props:{
            text:{
              require: true
            }
        },
        mounted() {

        },
        components: {},
        methods: {}
    }
</script>

<style scoped lang="scss">
    .Area {
      height: 1.467rem;
      background: url("../../assets/img/top_nav.png") no-repeat;
      background-size: cover;
      font-size:0.4rem;
      color: #fff;
      font-weight: bold;
      display: flex;
      align-items: center;
      padding-left: 0.213rem;
    }
</style>

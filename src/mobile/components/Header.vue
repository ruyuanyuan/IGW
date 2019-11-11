<template>
    <div class="Header">
      <div class="left"><img src="@/assets/img/logo.png" alt=""></div>
      <div class="right"><i class="el-icon-s-operation"></i></div>
    </div>
</template>

<script>
    export default {
        name: "Header",
        data(){
          return {
            
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
    .Header {
      height:1rem;
      padding: 0 0.213rem;
      background:rgba(0,0,0,1);
      display: flex;
      align-items: center;
      justify-content: space-between;
      .left{
        width: 0.667rem;
        height: 0.667rem;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .right{
        color: #fff;
      }
    }
</style>

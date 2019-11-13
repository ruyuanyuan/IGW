<template>
    <div class="Header">
      <div class="left"><img src="@/assets/img/logo.png" alt=""></div>
      <div class="right" @click='showMenuEvent'><i class="el-icon-s-operation"></i></div>
      <Menu v-if='showMenu' @menuClickEvent='changeMenuEvent'></Menu>
    </div>
</template>

<script>
import Menu from "./Menu"
export default {
    name: "Header",
    data(){
      return {
        showMenu:false
      }
    },
    components: {
      Menu
    },
    methods: {
      showMenuEvent(){
        this.showMenu=true
      },
      changeMenuEvent(flag,path){

      }
    }
}
</script>

<style scoped lang="scss">
    .Header {
      box-sizing: border-box;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 999;
      width: 100%;
      height:56px;
      padding: 0 0.213rem;
      background:rgba(0,0,0,1);
      display: flex;
      align-items: center;
      justify-content: space-between;
      .left{
        width: 0.667rem;
        height: 0.667rem;
        display: flex;
        img{
          width: 100%;
          height: auto;
        }
      }
      .right{
        color: #fff;
      }
    }
</style>

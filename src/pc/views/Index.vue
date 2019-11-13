<template>
    <div class="layout_template">
      <Header></Header>
        <router-view></router-view>
      <Footer></Footer>
    </div>
</template>
<script>
import Header from '../conmponents/header/Header.vue'
import Footer from '../conmponents/footer/Footer.vue'
export default {
  components:{
    Header,
    Footer
  }
}
</script>
<style lang="scss">
  .layout_template{
    padding-top:56px;
  }
</style>
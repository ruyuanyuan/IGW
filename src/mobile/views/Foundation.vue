<template>
    <div class="Foundation">
      <Area :text="fund.Title"/>
      <div class="fund">
        <Underline text="Invincible Game World Foundation"></Underline>
        <img src="@/assets/img/map.png" alt="">
        <div class="text">
          {{fund.fundDoc}}
        </div>
      </div>
      <div class="team">
        <Title :text="fund.teamTitle"></Title>
        <div class="swiper-inner">
          <!-- swiper -->
          <swiper :options="swiperOption">
            <swiper-slide>
              <img src="@/assets/mobileImage/man1.png" alt="">
              <div class="job">{{fund.teamItem1}}</div>
              <div class="desc">
               {{fund.teamItem1Doc}}
              </div>
            </swiper-slide>
            <swiper-slide>
              <img src="@/assets/mobileImage/man2.png" alt="">
              <div class="job">{{fund.teamItem2}}</div>
              <div class="desc">
                 {{fund.teamItem2Doc}}
              </div>
            </swiper-slide>
            <swiper-slide>
              <img src="@/assets/mobileImage/man3.png" alt="">
              <div class="job">{{fund.teamItem3}}</div>
              <div class="desc">
                {{fund.teamItem3Doc}}
              </div>
            </swiper-slide>
          </swiper>
          <div class="dottded">
            <div class="swiper-pagination" slot="pagination"></div>
          </div>
        </div>
      </div>
      <!--顾问-->
      <div class="consultant">
        <Title :text="fund.guwen"></Title>
        <div class="box">
          <div class="every">
            <img src="@/assets/mobileImage/character_06.jpg" alt="">
            <p>中国</p>
            <p>李大伟</p>
            <div>
              ZB联合创始⼈
            </div>
          </div>
          <div class="every">
            <img src="@/assets/mobileImage/character_03.jpg" alt="">
            <p>英国</p>
            <p>Carl Dalio</p>
            <div>
              LCSH CFO
            </div>
          </div>
          <div class="every">
            <img src="@/assets/mobileImage/character_11.jpg" alt="">
            <p>英国</p>
            <p>Konnie Brown</p>
            <div>
              奥美英国创意总监
            </div>
          </div>
          <div class="every">
            <img src="@/assets/mobileImage/character_13.jpg" alt="">
            <p>美国</p>
            <p>Elon Simons</p>
            <div>
              游戏发⾏与商业专家
            </div>
          </div>
          <div class="every">
            <img src="@/assets/mobileImage/character_18.png" alt="">
            <p>日本</p>
            <p>Masaki Uno</p>
            <div>
              株式会社 <br/>
              Global Systems CEO
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    import Area from "../components/Area"
    import Underline from "../components/Underline"
    import Title from "../components/Title"
    import 'swiper/dist/css/swiper.css'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default {
        name: "Foundation",
        created() {

        },
        mounted() {

        },
        components: {
          Area,
          Underline,
          Title,
          swiper,
          swiperSlide
        },
        methods: {},
        data(){
            return {
              swiperOption: {
                effect: 'coverflow',
                grabCursor: true,
                centeredSlides: true,
                slidesPerView: 'auto',
                speed: 300,
                autoplay : {
                  delay:3000
                },
                coverflowEffect: {
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows : true
                },
                pagination: {
                  el: '.swiper-pagination'
                },
              },
              fund:this.$language[this.$store.state.language].fund
          }
        },
        watch:{
          languagetype() {
            this.fund=this.$language[this.languagetype].fund
          }
        },
        computed: {
          languagetype: function() {
            return this.$store.state.language;
          }
        },
    }
</script>
<style lang="scss">
  .dottded{
    .swiper-pagination-bullet{
      margin: 0 10px;
      display: inline-block;
    }
  }
</style>
<style scoped lang="scss">
    .Foundation {
      .fund {
        padding: 0 10px;
        img {
          width: 100%;
          height: auto;
          display: block;
          margin: 0 auto;
          margin-top: 20px;
        }
        .text{
          margin: 10px 0;
          color: #595959;
          font-size: 12px;
          line-height: 24px;
        }
      }
      .team{
        background:rgba(237,239,242,1);
      }
      .swiper-inner {
        padding-bottom: 20px;
      }
      .swiper-slide {
        width:5.44rem;
        height:auto;
        background:rgba(255,255,255,1);
        box-shadow:0 10px 10px 10px rgba(0, 0, 0, 0.2);
        padding: 10px;
        img{
          width:100%;
        }
        .job{
          color: #07070D;
          font-size: 14px;
        }
        .desc{
          color: #595959;
          font-size: 12px;
          line-height: 24px;
          margin-top: 5px;
        }
      }
      .dottded{
        position: relative;
        width: 100%;
        height: 0.533rem;
        display: flex;
        justify-content: center;
      }
      .box{
        display: flex;
        padding: 0 1.733rem;
        justify-content: space-between;
        flex-wrap: wrap;
        .every{
          font-size: 12px;
          color: #07070D;
          margin-bottom: 30px;
          text-align: center;
          img{
            width:2.347rem;
            height:2.347rem;
            border-radius:50%;
            margin-bottom: 0.587rem;
          }
          div{
            margin-top: 0.533rem;
            font-weight: bold;
          }
        }
      }
    }
</style>

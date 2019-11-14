<template>
    <div class="Foundation">
      <Area text="IGW基金会"/>
      <div class="fund">
        <Underline text="Invincible Game World Foundation"></Underline>
        <img src="@/assets/img/map.png" alt="">
        <div class="text">
          IGWF注册于英属群岛直布罗陀，是全球游戏生态联盟体系的发起者。我们致力于聚合全球各地区（大洲、国家或地区）有共同志向的游戏平台、游戏开发者、运营者打造未来游戏联盟经济体，共同创建一个为游戏行业参与者走向全球市场的渠道，通过区块链技术手段及完善的解决方案实现联盟成员的相互信任、流量共享、平等共赢。
        </div>
      </div>
      <div class="team">
        <Title text="团队"></Title>
        <div class="swiper-inner">
          <!-- swiper -->
          <swiper :options="swiperOption">
            <swiper-slide>
              <img src="@/assets/mobileImage/man1.png" alt="">
              <div class="job">创始人</div>
              <div class="desc">
                15年互联⽹行业从业经验，主要从事区块链应用，游戏等领域。从事项⽬运营⼯作12年，熟悉互联⽹业务的产品开发、市场运营等⼯作。
                曾任知名公司COO，负责区块链项⽬、⼿机游戏开发、发⾏和运营。
              </div>
            </swiper-slide>
            <swiper-slide>
              <img src="@/assets/mobileImage/man2.png" alt="">
              <div class="job">联合创始⼈</div>
              <div class="desc">
                资深游戏人，前新加坡奥克资本合伙⼈、首席运营官，负责旗下整体游戏业务。具有市场、运营、产品 多维度从业经验。在游戏、AR/VR、智能硬件等多个领域具有丰富的⾏业经验。 致⼒于区块链技术的落地应⽤及未来游戏市场商业模式⾰命。
              </div>
            </swiper-slide>
            <swiper-slide>
              <img src="@/assets/mobileImage/man3.png" alt="">
              <div class="job">首席开发</div>
              <div class="desc">
                互联⽹和数据网络⾏业资深从业者，擅⻓算法开发、分布式技术。精通Java语言，熟悉区块链原理及相关技术，对BTC、Ethereum等开源区块链算法有深入研究与项⽬实现。 曾被维塔利克邀请共同开发以太坊，受到广⼤以太坊⽤户的好评。
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
        <Title text="顾问"></Title>
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
                }
              }
          }
        }
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

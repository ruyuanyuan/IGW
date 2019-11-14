<template>
    <div class="Intro">
      <Area text="IGW简介" />
      <div class="chart-wrapper">
        <canvas id="mountNode"></canvas>
      </div>
      <div class="text">
        IGW全球游戏生态联盟致力打造一个基于区块链原生的泛社区化游戏平台，聚合游戏玩家、游戏内容生产者、开发者、数字资产交易者等多种泛社区成员，为游戏玩家提供优质的游戏内容，为开发者提供完善的游戏开发模块、数据服务及流量支持，且无中间费用，用户可使用平台通证IGC进行游戏数字资产的自由交易和跨链流通，社区内容完全由社区成员推动而实现自治管理和规范运作。
      </div>
    </div>
</template>

<script>
    import Area from "../components/Area"
    const F2 = require('@antv/f2');
    export default {
        name: "Intro",
        created() {

        },
        mounted() {
            this.register();
            this.init();
        },
        data(){
          return {
            point: [
              {
                name: '',
                volumes: 1,
                x: 5,
                y: 80,
                c: '开发者'
              },{
                name: '技术服务',
                volumes: 2,
                x: 6,
                y: 90,
                c: '开发者'
              },{
                name: '知识转化',
                volumes: 3,
                x: 8,
                y: 100,
                c: '玩家'
              },{
                name: '自由社区',
                volumes: 5,
                x: 10,
                y: 80,
                c: '玩家'
              },{
                name: '无中间费用',
                volumes: 4,
                x: 5,
                y: 55,
                c: '开发者'
              },{
                name: '',
                volumes: 2,
                x: 7,
                y: 70,
                c: '玩家'
              },{
                name: '',
                volumes: 1,
                x: 8,
                y: 70,
                c: '玩家'
              },{
                name: '流量支持',
                volumes: 3,
                x: 8,
                y: 50,
                c: '开发者'
              },{
                name: '资金众筹',
                volumes: 3,
                x: 4,
                y: 20,
                c: '开发者'
              },{
                name: '',
                volumes: 2,
                x: 6,
                y: 30,
                c: '开发者'
              },{
                name: '',
                volumes: 1,
                x: 7,
                y: 30,
                c: '玩家'
              },{
                name: '数据保护',
                volumes: 2,
                x: 7.5,
                y: 16,
                c: '玩家'
              },{
                name: '价值传递',
                volumes: 3,
                x: 9,
                y: 25,
                c: '玩家'
              }
            ]
          }
        },
        components: {Area},
        methods: {
          init(){
            let chart = new F2.Chart({
              id: 'mountNode',
              pixelRatio: window.devicePixelRatio,
              padding:[40,'auto','auto',60]
            });
            chart.source(this.point, {
              y: {
                min: 0,
                max: 100
              },
              x: {
                max: 12,
                tickInerval: 1
              }
            });
            chart.axis(false);
            chart.tooltip(false);
            chart.legend(true);
            chart.legend({
              position: 'bottom',
              align: "center",
              marker: 'square',
              nameStyle:{
                fill: '#404040',
                fontSize: '14'
              }
            })
            chart.point().position('x*y').color("c", c =>{
              if(c == "开发者"){
                return '#472E9B'
              }
              return '#FF3A8A';
            }).size('volumes',volumes=>{
              return  volumes * 10;
            }).shape('with-text')
            chart.render();
          },
          register(){
            F2.Shape.registerShape('point', 'with-text', {
              draw: function draw(cfg, container) {
                var size = cfg.size;
                var x = cfg.x;
                var y = cfg.y;
                var circle = container.addShape('Circle', {
                  className: 'point',
                  attrs: {
                    x: x,
                    y: y,
                    r: size,
                    fill: cfg.color
                  }
                });
                var origin = cfg.origin._origin
                var text = container.addShape('Text', {
                  className: 'text',
                  attrs: {
                    x: x,
                    y: y,
                    fill: '#fff',
                    text: origin.name,
                    textBaseline: 'center',
                    textAlign: 'center',
                    fontSize: 10
                  }
                })
                return [circle, text];
              }
            });
          },
        }
    }
</script>

<style scoped lang="scss">
    .Intro {
      .text{
        padding: 0 10px;
        color: #595959;
        font-size: 12px;
        line-height: 1.8;
        margin: 0.8rem 0;
      }
      .chart-wrapper{
        width: 100%;
        height: 8rem;
        #mountNode{
          width: 100%;
          height: 100%;
        }
      }
    }
</style>

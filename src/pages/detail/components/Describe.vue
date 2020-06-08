<template>
  <div class="info-wrapper">
    <div class="title">景点信息</div>
    <p class="desc-info">
      洪崖洞拥有2300多年的历史。“洪崖洞民俗风貌区”项目是2005年重庆市政府“八大民心工程”之一，总面积4.6万平方米，是“重庆市重点景观工程”和“AAA级重点旅游项目工程”。该景区以拥城市旅游景观、商务休闲景观和城市人文景观于一体而闻名，并以具有巴渝传统建筑特色的“吊脚楼”风貌为主体，依山就势，沿崖而建，让解放碑直达江滨，是游吊脚群楼、观洪崖滴翠、逛山城老街、赏巴渝文化、看两江汇流、品天下美食的好去处，也是解放碑的会客厅。
    </p>
    <ul class="more-info">
      <li>
        <p>地址</p>
        <div>重庆市渝中区嘉滨路88号</div>
      </li>
      <li>
        <p>开放时间</p>
        <div>全天（20:00亮灯，22:00关灯）</div>
      </li>
      <li>
        <p>交通</p>
        <div>公共交通</div>
      </li>
      <li>
        <p>游玩用时参考</p>
        <div>3.5小时</div>
      </li>
      <li>
        <p>景点位置</p>
        <div>
          <ul>
            <li class="locTitle">与必游景点的距离</li>
            <li><span>重庆解放碑：</span>约533米</li>
            <li><span>磁器口古镇：</span>约12.4公里</li>
            <li><span>重庆朝天门：</span>约779米</li>
          </ul>
          <ul>
            <li class="locTitle">与附近其他景点的距离</li>
            <li><span>重庆水色：</span>约0米</li>
            <li><span>重庆美术馆：</span>约145米</li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="stylus">
@import '~styles/varibles.styl'

  .info-wrapper
    box-sizing border-box
    .title
      font-size $bigFontSize
      height $midHeight
      line-height $midHeight
      background $baseBgColor
      padding-left $basePdl
    .desc-info
      padding-left $basePdl
      padding-right $basePdl
      margin .1rem 0
      text-indent 2em
      line-height .4rem
      text-align justify
    .more-info
      padding-left $basePdl
      li
        display flex
        line-height .6rem
        p
          width 30%
          color #777
          text-align right
          padding-right .2rem
        div
          flex 1
          ul
            margin-bottom .2rem
            .locTitle
              font-weight bold
            span
              color orange
</style>

<template>
  <div>
    <div class="title border-topbottom">热门景点</div>
    <ul class="item-wrapper">
      <li v-for="item of hotAttractions" :key="item.id" class="items">
        <div class="item">{{item.attr}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HotAttractions',
  props: {
    hotAttractions: Array
  }
}
</script>

<style scoped lang="stylus">
@import '~styles/varibles.styl'
  .border-topbottom
    &:brfore
      border-color #ddd
    &:after
      border-color #ddd
  .title
      background-color $baseBgColor
      height $bigHeight
      padding-left $basePdl
      font-size $bigFontSize
      line-height $bigHeight
    .item-wrapper
      padding .1rem .6rem .1rem .1rem
      overflow hidden
      .items
        float left
        padding-left $basePdl
        font-size $midFontSize
        .item
          box-sizing border-box
          margin .1rem
          padding .1rem
          text-align center
          border: .02rem solid #ccc
          border-radius .06rem
</style>

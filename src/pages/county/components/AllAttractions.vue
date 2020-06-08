<template>
  <div>
    <div class="title border-topbottom">所有景点</div>
    <div class="area" v-for="(item, key) of allAttractions" :key="key" :ref="key">
      <div class="word border-bottom">{{key}}</div>
      <ul class="item-list" v-for="attr of item" :key="attr.id">
        <div class="item border-bottom">{{attr.name}}</div>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AllAttractions',
  props: {
    allAttractions: Object,
    letter: String // 接受来自父组件 Attractions 的letter值
  },
  data () {
    return {
      ele: []
    }
  },
  watch: {
    letter () { // 监听letter的变化
      this.ele = this.$refs[this.letter]
      this.$emit('getEle', this.ele) // 向父组件Attractions 派发 getEle 事件，其值是一个包含DOM元素的数组
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'

  .border-topbottom
    &:brfore
      border-color #bbb
    &:after
      border-color #bbb
  .border-bottom
    &:before
      border-color #bbb
  .title
    background-color $baseBgColor
    height $bigHeight
    padding-left $basePdl
    font-size $bigFontSize
    line-height $bigHeight
  .area
    .word
      height .44rem
      line-height .44rem
      background #eee
      padding-left .4rem
      color #666
      font-size $midFontSize
    .item-list
      .item
        line-height $smallHeight
        padding-left $basePdl*2
</style>

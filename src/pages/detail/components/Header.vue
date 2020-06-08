<template>
  <div>
    <router-link class="back" tag="div" to="/">
      <span class="iconfont back-icon">&#xe8b5;</span>
    </router-link>
    <div class="title"
      v-show="showTitle"
      :style="opacityStyle"
    >
      <router-link
        class="iconfont back-icon"
        tag="span"
        to="/"
      >&#xe8b5;</router-link>
      <div class="title-desc">洪崖洞景点详情</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      showTitle: false,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () { // title 的隐藏、显示动画
    // 获取当前页面的滚动条纵坐标位置, 兼容
      let top = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
      if (top > 40) { // 显示
        let opacity = top / 100
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        this.showTitle = true
      } else { // 隐藏
        this.showTitle = false
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () { // 全局事件解绑
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
  .back
    position absolute
    box-sizing border-box
    top 0
    right 0
    left 0
    color #fff
    height .8rem
    width .8rem
    line-height .8rem
    padding-left .3rem
    border-radius .4rem
    background rgba(0, 0, 0, .7)
    margin .1rem 0 0 .1rem
    .back-icon
      font-size $bigFontSize
  .title
    position fixed
    top 0
    height 1rem
    background $bgColor
    width 100%
    display flex
    font-size $bigFontSize
    line-height 1rem
    .title-desc
      flex 1
      text-align center
    .back-icon
      font-size $bigFontSize
      padding-left .4rem
      color #000
</style>

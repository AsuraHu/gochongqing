<template>
  <div>
    <!-- 头部 -->
    <div class="header">
      <router-link to="/" class="header-icon">
        <div class="iconfont back-icon">&#xe8b5;</div>
      </router-link>
      <div class="select">
        <router-link to="/county/attractions" class="link">
          <span @click="handleClickShow">全部景点</span>
        </router-link>
        <router-link to="/county/administrative" class="link">
          <span @click="handleClickHid">行政区</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    county: String
  },
  data () {
    return {
      isShow: true
    }
  },
  methods: {
    handleClickHid () {
      this.isShow = false
    },
    handleClickShow () {
      this.isShow = true
    }
  }
}
</script>

<style scoped lang="stylus">
  @import '~styles/varibles.styl'
  .header
    position absolute
    z-index 9
    width 100%
    font-size .3rem
    display flex
    height .86rem
    line-height .86rem
    background-color $bgColor
    color #fff
    .header-icon
      width .64rem
      float left
      color #fff
      .back-icon
        text-align center
        font-size .4rem
        margin-left .3rem
    .select
      height .76rem
      width 50%
      margin auto
      display flex
      justify-content space-around
      .link
        width 1.5rem
        color #fff
        text-align center
      .router-link-active
        border-radius .1rem
        background #ffffff
        color $bgColor
</style>

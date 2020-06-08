<template>
  <div class="header">
    <!-- 返回按钮 -->
    <div class="header-left">
      <div class="iconfont back-icon">&#xe8b5;</div>
    </div>
    <!-- 搜索框 -->
    <div class="header-input">
      <!-- 搜索图标 -->
      <span class="iconfont search-icon">&#xe86e;</span>
      <!-- 搜索框 -->
      <HomeSearch />
      <!-- 清空图标 -->
    </div>
    <router-link to="/county/attractions">
      <div class="header-right">
        {{this.county}}
        <span class="iconfont arrow-icon">&#xe600;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import HomeSearch from './HomeSearch'
import { mapState } from 'vuex'

export default {
  name: 'HomeHeader',
  data () {
    return {
      inputValue: ''
    }
  },
  components: {
    HomeSearch
  },
  computed: {
    ...mapState(['county'])
  }
}
</script>

<style scoped lang="stylus">
  @import '~styles/varibles.styl'
  .header
    display flex
    height .86rem
    line-height .86rem
    background-color $bgColor
    color #fff
    .header-left
      width .64rem
      float left
      .back-icon
        text-align center
        font-size .4rem
        margin-left .3rem
    .header-input
      flex 1
      display flex
      background-color #fff
      border-radius .1rem
      height .64rem
      margin-top .12rem
      margin-left .3rem
      padding-left .2rem
      color #ccc
      line-height .64rem
      .search-icon
        margin-right .1rem
    .header-right
      min-width 1.24rem
      padding 0 .1rem
      float right
      text-align center
      color #fff
      .arrow-icon
        font-size .24rem
</style>

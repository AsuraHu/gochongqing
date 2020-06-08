<template>
  <div class="attractions">
    <!-- 分类标题 -->
    <router-link to="/county/attractions"><div class="title">热门景点>>></div></router-link>
    <!-- 具体各项 -->
    <router-link
      tag="div"
      class="box"
      v-for="item of hotList"
      :key="item.id"
      :to="'/detail/' + item.id"
    >
      <div class="content">
        <!-- 左侧文字 -->
        <div class="content-detail">
          <!-- 标题 -->
          <h3 class="content-title">{{item.title}}</h3>
          <!-- 简述 -->
          <p class="desc">{{item.desc}}</p>
        </div>
        <!-- 右侧图片 -->
        <div class="image-wrapper">
          <img :src="item.url">
        </div>
      </div>
      <!-- 地址 -->
      <div class="location">{{item.location}}</div>
    </router-link>
    <router-link to="/county/attractions">
      <p class="others">>>> 更多热门景点 >>></p>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeAttractions',
  props: {
    hotList: Array
  }
}
</script>

<style scoped lang="stylus">
@import '~styles/varibles.styl'
  .title
    margin-top .1rem
    padding-left .2rem
    background #eee
    line-height 1rem
    font-size .4rem
  .box
    padding-bottom .2rem
    border-bottom .02rem solid #eee
    .content
      padding .1rem .2rem
      position relative
      display flex
      .content-detail
        width 40%
        flex 1
        .content-title
          font-size .4rem
          margin-bottom .2rem
        .desc
          text-indent 2em
          line-height 1.1em
      .image-wrapper
        overflow hidden
        width 200px
        padding-left .1rem
        img
          border-radius .1rem
          width 100%
    .location
      padding-left .2rem
      margin-top .1rem
      color $bgColor
  .others
    font-size .3rem
    height 1rem
    line-height 1rem
    text-align center
    text-decoration underline
    color blue
</style>

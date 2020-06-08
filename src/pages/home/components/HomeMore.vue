<template>
  <div>
    <ul class="message">
      <router-link to="/">
        <h3 class="title">当地资讯>>></h3>
      </router-link>
      <li v-for="item of message" :key="item.id">{{item.content}}</li>
    </ul>
    <ul class="attraction">
      <router-link to="/county/attractions">
        <h3 class="title">热门景点大全>>></h3>
      </router-link>
      <div class="list">
          <li v-for="item of attraction" :key="item.id">{{item.name}}</li>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeMore',
  props: {
    message: Array,
    attraction: Array
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
  .title
    margin-top .1rem
    padding-left .2rem
    background $baseBgColor
    line-height 1rem
    font-size .4rem
  .message
    li
      line-height $bigLineHeight
      padding-left .2rem
      text-decoration underline
      color blue
  .attraction
    .list
      display flex
      flex-wrap wrap
      li
        line-height $bigLineHeight
        padding 0 .4rem
        color blue
</style>

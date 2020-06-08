<template>
  <div class="wrapper">
    <swiper :options="swiperOptions">
      <swiper-slide
        v-for="item of swiperList"
        :key="item.id"
      >
        <img
          class="swiper-image"
          :src="item.url"
          :alt="item.alt"
        >
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    swiperList: Array
  },
  data () {
    return {
      swiperOptions: {
        autoplay: {
          delay: 1500,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination'
        },
        loop: true
      }
    }
  }
}
</script>

<style scoped lang="stylus">
  .wrapper >>> .swiper-pagination-bullet-active
    background #fff
  .wrapper
     overflow hidden
     width 100%
     height 0
     padding-bottom 48.33%
     background-color #eee
    .swiper-image
      width 100%
</style>

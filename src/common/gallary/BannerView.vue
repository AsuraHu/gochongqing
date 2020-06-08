<template>
  <div class="container" @click="handleHidBanner">
    <div class="wrapper">
      <swiper :options="swiperOptions">
        <swiper-slide
          v-for="item of bannerList"
          :key="item.id"
        >
          <img
            class="swiper-image"
            :src="item.url"
          >
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BannerView',
  props: {
    bannerList: Array
  },
  data () {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction'
        },
        observerParents: true,
        observer: true
      }
    }
  },
  methods: {
    handleHidBanner () {
      this.$emit('hid')
    }
  }
  // activated () {
  //   this.swiperOptions.observer = true
  //   this.swiperOptions.observerParents = true
  // }
}
</script>

<style scoped lang="stylus">
  .container >>> .swiper-container
    overflow visible
  .container
    background #000
    position fixed
    z-index 9
    top 0
    right 0
    bottom 0
    left 0
    display flex
    flex-direction column
    justify-content center
    align-items center
    .wrapper
      width 100%
      height 0
      padding-bottom 66.67%
      .swiper-image
        width 100%
      .swiper-pagination-fraction
        bottom -1rem
        color #fff
</style>

<template>
  <div>
    <div class="banner" @click="handleBannerView">
      <img
        class="banner-img"
        src="https://m.tuniucdn.com/fb2/t1/G5/M00/47/D9/Cii-s1sqDCiIaNbqABR8UaN-3X8AAI2TAEKi_gAFHxp244_w600_h0_c0_t0.jpg"
        alt="洪崖洞"
      >
      <div class="banner-info">
        <div class="banner-title">洪崖洞</div>
        <div class="banner-number">
          <span class="iconfont">&#xe682;</span>
          1/3
        </div>
      </div>
    </div>
    <BannerView
      :bannerList="bannerList"
      v-show="isShow"
      @hid="handleHidBanner"
    />
  </div>
</template>

<script>
import BannerView from '@/common/gallary/BannerView'
export default {
  name: 'Banner',
  // props: {
  //   bannerList: Array
  // },
  data () {
    return {
      bannerList: [{
        'id': 'img01',
        'url': 'https://m.tuniucdn.com/fb2/t1/G5/M00/47/D9/Cii-s1sqDFaIA3PSACF4_KgHptgAAI2TQMx_0AAIXkU392_w600_h0_c0_t0.jpg'
      }, {
        'id': 'img02',
        'url': 'https://m.tuniucdn.com/fb2/t1/G5/M00/47/D8/Cii-tFsqDA-IJWcdAARNLqbP1NcAAI2SwKQ5d8ABE1G950_w600_h0_c0_t0.jpg'
      }, {
        'id': 'img03',
        'url': 'https://m.tuniucdn.com/fb2/t1/G5/M00/47/D9/Cii-s1sqDCiIaNbqABR8UaN-3X8AAI2TAEKi_gAFHxp244_w600_h0_c0_t0.jpg'
      }],
      isShow: false
    }
  },
  components: {
    BannerView
  },
  methods: {
    handleBannerView () {
      this.isShow = true
    },
    handleHidBanner () {
      this.isShow = false
    }
  }
}
</script>

<style scoped lang="stylus">
@import '~styles/varibles.styl'
  .banner
    position relative
    overflow hidden
    padding-bottom 66.67%
    height 0
    .banner-img
      width 100%
    .banner-info
      display flex
      position absolute
      padding .2rem
      right 0
      bottom 0
      left 0
      height $smallHeight
      line-height $smallHeight
      font-size $midFontSize
      color #fff
      background-image linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, .8))
      .banner-title
        flex 1
        font-size $bigFontSize
      .banner-number
        padding 0 .2rem
        background-color rgba(0, 0, 0, .5)
        border-radius .3rem
</style>

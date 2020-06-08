<template>
  <div class="icons">
    <swiper>
      <swiper-slide v-for = "(page, index) of pages" :key="index">
        <div
          class="icon-wrapper"
          v-for="item of page"
          :key="item.id"
        >
          <img class="icon-image" :src="item.url" :alt="item.desc">
          <p class="icon-text">{{item.desc}}</p>
        </div>
      </swiper-slide>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>

<script>
import jindian from '../../../assets/images/jindian.png'
import jiudian from '../../../assets/images/jiudian.png'
import meisi from '../../../assets/images/meisi.png'
import gouwu from '../../../assets/images/gouwu.png'
import yule from '../../../assets/images/yule.png'
import youji from '../../../assets/images/youji.png'
import dianping from '../../../assets/images/dianping.png'
import tupian from '../../../assets/images/tupian.png'
import jiaotong from '../../../assets/images/jiaotong.png'
import wenda from '../../../assets/images/wenda.png'

export default {
  name: 'HomeIcon',
  data () {
    return {
      iconList: [
        {
          id: '0001',
          url: jindian,
          desc: '景点'
        }, {
          id: '0002',
          url: jiudian,
          desc: '酒店'
        }, {
          id: '0003',
          url: meisi,
          desc: '美食'
        }, {
          id: '0004',
          url: gouwu,
          desc: '购物'
        }, {
          id: '0005',
          url: yule,
          desc: '娱乐'
        }, {
          id: '0006',
          url: youji,
          desc: '游记'
        }, {
          id: '0007',
          url: dianping,
          desc: '点评'
        }, {
          id: '0008',
          url: tupian,
          desc: '图片'
        }, {
          id: '0009',
          url: jiaotong,
          desc: '交通'
        }, {
          id: '0010',
          url: wenda,
          desc: '问答'
        }]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .icons >>> .swiper-container
    height 0
    padding-bottom 50%
  .icons >>> .swiper-button-prev
    left .05rem
  .icons >>>.swiper-button-next
    right .05rem
  .icons >>> .swiper-button-prev:after,
  .icons >>>.swiper-button-next:after
    font-size 25px
  .icon-wrapper
    float left
    box-sizing border-box
    overflow hidden
    height 0
    width 25%
    padding-bottom 25%
    .icon-image
      display block
      margin .2rem auto
    .icon-text
      text-align center
      ellipsis()
</style>

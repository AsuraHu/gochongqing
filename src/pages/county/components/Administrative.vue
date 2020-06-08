<template>
  <div class="adm" ref="admScroll">
    <div>
      <!-- 当前区县 -->
      <div>
        <div class="title">当前区县</div>
        <ul class="item-wrapper">
          <li class="items">
            <div class="item">{{this.county}}</div>
          </li>
        </ul>
      </div>
      <!-- 热门区县 -->
      <div>
        <div class="title">热门区县</div>
        <ul class="item-wrapper">
          <li class="items"
            v-for="item of hotCounty"
            :key="item.id"
            @click="handleCountyClick(item.county)"
          >
            <div class="item">{{item.county}}</div>
          </li>
        </ul>
      </div>
      <!-- 全部区县 -->
      <div>
        <div class="title">所有区县</div>
        <ul class="item-wrapper">
          <li class="items"
            v-for="item of allCounty"
            :key="item.id"
            @click="handleCountyClick(item.county)"
          >
            <div class="item">{{item.county}}</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Bscroll from 'better-scroll'
import { mapState } from 'vuex'
export default {
  name: 'Administrative',
  data () {
    return {
      hotCounty: [],
      allCounty: []
    }
  },
  computed: {
    ...mapState(['county'])
  },
  methods: {
    getCounty () { // 获取数据
      axios.get('/api/county.json')
        .then(this.getCountySucc)
    },
    getCountySucc (res) { // 数据赋值
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.hotCounty = data.hotCounty
        this.allCounty = data.allCounty
      }
    },
    handleCountyClick (county) {
      this.$store.commit('changeCounty', county)
      this.$router.push('/')
    }
  },
  mounted () {
    this.getCounty()
    // console.log(this.$refs.admScroll)
    this.scroll = new Bscroll(this.$refs.admScroll, {
      click: true
    })
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
  .adm
    position absolute
    top .8rem
    right 0
    bottom 0
    left 0
    z-index -9
    .title
      background-color $baseBgColor
      height $bigHeight
      padding-left $basePdl
      font-size $bigFontSize
      line-height $bigHeight
    .item-wrapper
      padding .1rem
      overflow hidden
      .items
        float left
        width 33%
        .item
          margin .1rem
          padding .1rem 0
          text-align center
          border: .02rem solid #ccc
          border-radius .06rem
</style>

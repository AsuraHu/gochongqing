<template>
  <div>
    <HomeHeader />
    <div ref="scroll" class="scroll">
      <div>
        <HomeSwiper :swiperList="swiperList"/>
        <HomeIcons />
        <HomeAttractions :hotList="hotList"/>
        <HomeCate :cateList="cateList"/>
        <HomeMore :message="message" :attraction="attraction"/>
        <HomeFooter />
      </div>
    </div>
  </div>
</template>

<script>
import HomeHeader from './components/HomeHeader'
import HomeSwiper from './components/HomeSwiper'
import HomeIcons from './components/HomeIcons'
import HomeAttractions from './components/HomeAttractions'
import HomeCate from './components/HomeCate'
import HomeMore from './components/HomeMore'
import HomeFooter from './components/HomeFooter'
import axios from 'axios'
import Bscroll from 'better-scroll'
import { mapState } from 'vuex'

export default {
  name: 'Home',
  data () {
    return {
      swiperList: [],
      hotList: [],
      cateList: [],
      message: [],
      attraction: [],
      lastCounty: ''
    }
  },
  computed: {
    ...mapState(['county'])
  },
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeAttractions,
    HomeCate,
    HomeMore,
    HomeFooter
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json?county=' + this.county)
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.swiperList = data.swiperList
        this.hotList = data.hotList
        this.cateList = data.cateList
        this.message = data.message
        this.attraction = data.attraction
      }
    }
  },
  mounted () {
    this.getHomeInfo()
    this.lastCounty = this.county
    this.scroll = new Bscroll(this.$refs.scroll, {
      click: true
    })
  },
  activated () {
    if (this.county !== this.lastCounty) {
      this.lastCounty = this.county
      this.getHomeInfo()
    }
  }
}
</script>

<style lang="stylus" scoped>
  .scroll
    z-index -9
    position absolute
    top .86rem
    left 0
    right 0
    bottom 0
</style>

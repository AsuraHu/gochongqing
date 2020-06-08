<template>
  <div>
    <Banner :bannerList="bannerList"/>
    <Header />
    <Describe />
    <Remaining />
    <HomeFooter />
  </div>
</template>

<script>
import axios from 'axios'
import Banner from './components/Banner'
import Header from './components/Header'
import Describe from './components/Describe'
import Remaining from './components/Remaining'
import HomeFooter from '../home/components/HomeFooter'

export default {
  name: 'Detail',
  components: {
    Banner,
    Header,
    Describe,
    Remaining,
    HomeFooter
  },
  data () {
    return {
      bannerList: [],
      lastId: ''
    }
  },
  methods: {
    getDataInfo () {
      axios.get('/api/attractionDetail.json', {
        params: {
          id: this.$route.params.id
        }
      })
        .then(this.getDataInfoSucc)
    },
    getDataInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) { // 获取成功且数据存在
        let data = res.data
        this.bannerList = data.hongyadong.bannerList
      }
    }
  },
  mounted () {
    this.lastId = this.$route.params.id
    this.getDataInfo()
  },
  activated () {
    if (this.lastId !== this.$route.params.id) {
      this.lastId = this.$route.params.id
      this.getDataInfo()
    }
  }
}
</script>

<style scoped lang="stylus">
  .div
    height 50rem
</style>

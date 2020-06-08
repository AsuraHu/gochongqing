<template>
  <div>
    <!-- 搜索框 -->
    <Search :allAttractions="allAttractions"/>
    <!-- 滑动区 -->
    <div class="list-box" ref="wrapper">
      <div>
        <!-- 热门景点 -->
        <HotAttractions :hotAttractions="hotAttractions"/>
        <!-- 全部景点 -->
        <AllAttractions :allAttractions="allAttractions" :letter="letter" @getEle="getEle"/>
      </div>
    </div>
    <!-- 右侧字母 -->
    <Alphabet
      :allAttractions="allAttractions"
      @change="handleLetterChange"
    />
  </div>
</template>

<script>
import axios from 'axios'
import Bscroll from 'better-scroll'
import Alphabet from './Alphabet'
import AllAttractions from './AllAttractions'
import HotAttractions from './HotAttractions'
import Search from './Search'

export default {
  name: 'Attractions',
  components: {
    Alphabet,
    AllAttractions,
    HotAttractions,
    Search
  },
  data () {
    return {
      hotAttractions: [],
      allAttractions: {},
      letter: ''
    }
  },
  methods: {
    getCounty () { // 获取couty的数据，成功则执行 getCountySucc 函数
      axios.get('/api/county.json')
        .then(this.getCountySucc)
    },
    getCountySucc (res) { // 将获取到的数据赋值给 data 中的变量
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.hotAttractions = data.hotAttractions
        this.allAttractions = data.allAttractions
      }
    },
    handleLetterChange (letter) { // 监听来自子组件 Alphabet.vue 派发的 ‘change’ 事件
      this.letter = letter // 将来自 Alphabet 组件的 letter赋值给 data的数据后，通过属性方式发送给 AllAttractions 组件
    },
    getEle (res) { // 监听来自子组件 AllAttractions.vue 派发的 getEle 事件
      this.scroll.scrollToElement(res[0])
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
    this.getCounty()
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
  .border-topbottom
    &:brfore
      border-color #666
    &:after
      border-color #666
  .border-bottom
    &:before
      border-color #666
  .list-box
    position absolute
    top 1.65rem
    right 0
    bottom 0
    left 0
    overflow hidden
</style>

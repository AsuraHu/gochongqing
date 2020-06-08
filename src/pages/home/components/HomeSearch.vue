<template>
  <div class="input-box">
    <div class="input-wrapper">
      <input
        class="input"
        type="text"
        placeholder="请输入景区/区县名字或关键字"
        v-model="keyword"
      >
      <span class="clear" @click="clearInputValue" v-show="keyword">X</span>
    </div>
    <div
      class="search-content"
      ref="content"
      v-show="keyword"
    >
      <ul>
        <li
          v-for="item of list"
          :key="item.id"
          class="serch-item border-bottom"
        >
          {{item.name}}
        </li>
        <li
          class="serch-item border-bottom"
          v-show="noData"
        >没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import axios from 'axios'
export default {
  name: 'HomeSearch',
  props: {
    allAttractions: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null,
      allData: []
    }
  },
  computed: {
    noData () {
      return !this.list.length
    }
  },
  watch: { // 监听keyword的变化，即监听搜索框中值的变化
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.list) {
        this.list = []
        return
      }
      // 使用setTimeout 进行数据截流，提高性能
      this.timer = setTimeout(() => { // 搜索框功能
        const result = []
        this.allData.forEach(item => {
          var obj = {}
          // item 的数据格式有两种{id: 'a', county: 'a'}和{id: 1, spell: 'a', name: 'a'}
          if (item.county) { // 将 item 的第一种数据格式进行改造
            obj['name'] = item['county']
            obj['spell'] = item['id']
            // 将满足搜索框值的数据存储到result中
            if (obj.name.indexOf(this.keyword) > -1 || obj.spell.indexOf(this.keyword) > -1) {
              result.push(obj)
            }
          }
          if (item.spell) { // 将满足搜索框值的数据存储到result中
            if (item.name.indexOf(this.keyword) > -1 || item.spell.indexOf(this.keyword) > -1) {
              result.push(item)
            }
          }
        })
        this.list = result
      }, 100)
    }
  },
  methods: {
    getAllData (res) {
      res = res.data
      if (res.ret && res.data) { // 获取成功且有数据
        const data = res.data
        for (let i in data.allAttractions) { // 将allAttractions中的每一个对象添加到allData中
          for (let j in data.allAttractions[i]) {
            this.allData.push(data.allAttractions[i][j])
          }
        }
        for (let i in data.allCounty) { // 将allCounty 中的每项添加到allData中
          this.allData.push(data.allCounty[i])
        }
      }
    },
    clearInputValue () { // 点击清空搜索框的内容
      this.keyword = ''
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.content)
    axios.get('/api/county.json') // 获取数据
      .then(this.getAllData)
  },
  deactivated () { // 离开该界面时清空搜索框内容
    this.keyword = ''
  }
}
</script>

<style scoped lang="stylus">
@import '~styles/varibles.styl'
  .input-box
    width 100%
    .input-wrapper
      display flex
      .input
        box-sizing border-box
        padding-right .2rem
        width 100%
        height .6rem
        line-height .6rem
        border-radius .06rem
        color #666
      .clear
        margin auto .1rem auto 0
        color #666
        font-weight bold
        width .3rem
        height .3rem
        line-height .3rem
        text-align center
        border-radius 50% 50%
        border 1px #666 solid
    .search-content
      position absolute
      z-index -1
      top .86rem
      left 0
      right 0
      bottom 0
      background #ccc
      .serch-item
        line-height .62rem
        padding-left $basePdl
        background #fff
        color #666
</style>

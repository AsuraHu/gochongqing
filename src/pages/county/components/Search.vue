<template>
  <div>
    <div class="input-wrapper">
      <input
        class="input"
        type="text"
        placeholder="请输入景区名字或关键字"
        v-model="keyword"
      >
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
export default {
  name: 'Search',
  props: {
    allAttractions: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  computed: {
    noData () {
      return !this.list.length
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.list) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => { // 搜索框功能
        const result = []
        for (let i in this.allAttractions) {
          this.allAttractions[i].forEach((value) => {
            if (value.name.indexOf(this.keyword) > -1 || value.spell.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.content)
  },
  deactivated () { // 离开该界面时清空搜索框内容
    this.keyword = ''
  }
}
</script>

<style scoped lang="stylus">
@import '~styles/varibles.styl'
  .input-wrapper
    position absolute
    top .86rem
    width 100%
    box-sizing border-box
    padding .1rem
    height $midHeight
    background $bgColor
    z-index 9
    .input
      width 100%
      height .6rem
      line-height .6rem
      text-align center
      border-radius .06rem
      color #666
  .search-content
    position absolute
    z-index 3
    top 1.65rem
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

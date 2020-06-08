<template>
  <ul class="list">
    <li
      class="item"
      v-for="item of letters"
      :key="item"
      :ref="item"
      @click="handleLetterCLick"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
    >{{item}}</li>
  </ul>
</template>

<script>
export default {
  name: 'Alphabet',
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  props: {
    allAttractions: Object
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.allAttractions) {
        letters.push(i)
      }
      return letters
    }
  },
  methods: {
    // 点击右侧字母将滚动到对应区域
    handleLetterCLick (e) {
      this.$emit('change', e.target.innerHTML) // 向父组件 Attractions.vue 派发 ‘change’ 事件
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) { // 在右侧字母区滑动，左侧内容将进行对滚动
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => { // 函数截流，提高性能
          const touchY = e.touches[0].clientY - 83 // 触摸点距离字母顶部的高度
          const index = Math.floor((touchY - this.startY) / 20) // 触摸点对应下标，起始为A为0
          if (index >= 0 && index <= this.letters.length) {
            this.$emit('change', this.letters[index]) // 向父组件 Attractions.vue 派发 ‘change’ 事件
          }
        }, 16)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
  .list
    display flex
    flex-direction column
    justify-content center
    text-align center
    position fixed
    right $basePdl
    top 1.65rem
    bottom 0
    width .4rem
    .item
      line-height .4rem
      color $bgColor
</style>

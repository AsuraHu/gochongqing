<template>
  <div class="attractions">
    <router-link to="/">
      <div class="title">特色美食>>></div>
    </router-link>
    <div class="box" v-for="item of cateList" :key="item.id">
      <div class="content">
        <!-- 图片 -->
        <div class="image-wrapper">
          <img :src="item.url">
        </div>
        <!-- 介绍 -->
        <div class="content-detail">
          <h3 class="content-title">{{item.title}}</h3>
          <p class="desc">{{item.desc}}</p>
        </div>
      </div>
      <!-- 推荐 -->
      <div class="recommend">
        <p>美味，妙不可言！</p>
        <div class="icon-wrapper">
          <div class="wrapper">
            <i
              class="iconfont"
              :class="ani"
              ref="getIcon"
              @click="isRecommend(item.recommendNum, item.id)"
            >
              &#xe61f;
            </i>
          </div>
          <span>{{item.recommendNum}} 推荐</span>
        </div>
      </div>
    </div>
    <router-link to="/">
      <p class="others">>>> 更多特色美食 >>></p>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeCate',
  data () {
    return {
      flag: true,
      ani: '',
      timer: null
    }
  },
  // props: {
  //   cateList: Array
  // }
  computed: {
    ...mapState(['cateList'])
  },
  methods: { // 点赞图片点击效果
    isRecommend (num, index) {
      if (this.flag) {
        var arr = []
        arr[0] = num
        arr[1] = index
        // 第一次点击，推荐数将加一
        this.$store.commit('numAdd', arr)
        // 添加点击动画
        event.path[0].classList.add('animation')
        this.flag = false
      } else {
        var newArr = []
        newArr[0] = num
        newArr[1] = index
        // 再次点击，推荐数将减一
        this.$store.commit('numSub', newArr)
        // 取消点击动画
        event.path[0].classList.remove('animation')
        this.flag = true
      }
    }
  }
}
</script>

<style scoped lang="stylus">

  .title
    margin-top .1rem
    padding-left .2rem
    background #eee
    line-height 1rem
    font-size .4rem
  .box
    padding-bottom .2rem
    border-bottom .02rem solid #eee
    .content
      padding .1rem .2rem
      position relative
      display flex
      .content-detail
        width 40%
        flex 1
        .content-title
          font-size .4rem
          margin-bottom .2rem
        .desc
          text-indent 2em
          line-height 1.1em
      .image-wrapper
        overflow hidden
        width 200px
        padding-right .2rem
        img
          width 100%
          border-radius .1rem
    .recommend
      height .8rem
      line-height .8rem
      display flex
      justify-content space-between
      p
        width 50%
        font-weight bold
        font-size .3rem
        text-align center
      .icon-wrapper
        width 50%
        text-align center
        .wrapper
          float left
          width 30px
          height 30px
          .animation
            animation myAni .5s
            @keyframes myAni {
              from {
                font-size 14px
                color #000
              }
              to {
                font-size 20px
                color red
              }
            }
        span
          float left
          color red
  .others
    font-size .3rem
    height 1rem
    line-height 1rem
    text-align center
    text-decoration underline
    color blue
</style>

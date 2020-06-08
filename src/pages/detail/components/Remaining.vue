<template>
  <div>
    <dl>
      <dt>热门玩法</dt>
      <dd>热门玩法</dd>
    </dl>
    <dl>
      <dt>特价门票</dt>
      <dd>特价门票</dd>
    </dl>
    <dl>
      <dt>周边美食</dt>
      <dd>周边美食</dd>
    </dl>
    <dl>
      <dt>当地玩乐</dt>
      <dd>当地玩乐</dd>
    </dl>
    <dl>
      <dt>热门景点</dt>
      <dd>热门景点</dd>
    </dl>
    <dl>
      <dt>牛人点评</dt>
      <dd>牛人点评</dd>
    </dl>
    <dl>
      <dt>我的点评</dt>
      <dd>我的点评</dd>
    </dl>
  </div>
</template>

<script>
export default {
  name: 'Remaining'
}
</script>

<style scoped lang="stylus">
@import '~styles/varibles.styl'

  dl
    height 5rem
  dt
    font-size $bigFontSize
    height $midHeight
    line-height $midHeight
    background $baseBgColor
    padding-left $basePdl
  dd
    text-align center
    color red
    line-height 4rem
</style>

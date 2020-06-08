<template>
  <div class="footer">
    <div>友情链接</div>
    <ul class="link">
      <li>链接111</li>
      <li>链接222</li>
      <li>链接333</li>
      <li>链接444</li>
    </ul>
    <p>Copyright © AsuraHu 2020-06-02</p>
  </div>
</template>

<script>
export default {
  name: 'HomeFooter'
}
</script>

<style scoped lang="stylus">
@import '~styles/varibles.styl'
  .footer
    height 2rem
    background $bgColor
    padding .2rem 0 0 .2rem
    color #fff
    display flex
    flex-direction column
    justify-content space-around
    div
      text-align center
    .link
      display flex
      justify-content space-around
    p
      text-align center
</style>

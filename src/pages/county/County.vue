<template>
  <div>
    <CountyHeader />
    <!-- <div>sdalgk</div> -->
    <keep-alive><router-view></router-view></keep-alive>
  </div>
</template>

<script>
import CountyHeader from './components/CountyHeader'

export default {
  name: 'County',
  components: {
    CountyHeader
  }
}
</script>

<style>

</style>

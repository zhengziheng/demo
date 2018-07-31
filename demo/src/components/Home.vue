<template>
    <div class="nav-wrapper">
      <div class="nav-item">
      <h1 class="title">
        <img src=".././assets/img/icon_query.png" alt="">
        人脸检测系统
        </h1>
      <router-link to="search" tag="h2">人脸查询</router-link>
      <router-link to="compare" tag="h2">人脸对比</router-link>
      </div>
      <router-view></router-view>

    </div>
</template>


<script>
    export default{
        name:'home'
    }
</script>


<style scope lang="stylus">
    .nav-wrapper
      position fixed
      height 100%
      width 277px
      background #2c2c2c
      color white
      .title,h2
        // font-size 20px
        padding 16px 80px 16px 20px
        margin 0 auto
        box-sizing border-box
        cursor pointer
        &:hover
          background #63A6DD
        &.router-link-active
          background #63A6DD

</style>

<template>
  <li>
    <a href="#">
      <div class="mask"></div>
      <div class="box">
        <img :src="Pic" alt=""/>
      </div>
      <i v-show="!item.love" @click="changeStateLove(item)" class="iconfont icon-favorites-fill"></i>
      <i v-show="item.love" @click="changeStateNotLove(item)" class="iconfont icon-favorites-fill love"></i>
      <h3>{{ item.name }}</h3>
      <p>价格￥{{ item.price1 }}</p>
    </a>
  </li>
</template>

<script lang="ts">
export default {
  name: 'ShoppingItem',
}
</script>

<style scoped>

</style>

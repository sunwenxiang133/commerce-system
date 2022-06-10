<template>
<div>订单</div>
  <q-btn @click="test">1234</q-btn>
</template>

<script>
import {ShoppingItems} from '../request/api'

export default {
  name: 'MyOrder',
  methods:{
    test(){
      ShoppingItems().then((res)=>{
        console.log(res);
      }).catch(()=>{
        console.log(获取失败);
      })
    }
  }
}
</script>

<style scoped>

</style>

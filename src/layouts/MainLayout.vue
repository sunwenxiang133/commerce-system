<template>
  <q-layout view="hHh lpR fFf">

    <q-header reveal elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-btn dense flat round size="14px" label="我的" @click="left = !left" />

        <q-toolbar-title>
<!--          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
            <i style="font-size: 38px" class="bi bi-cpu my-center"></i>
          </q-avatar>-->
          <div class="my-center" style="font-size: 24px">
          电商平台管理系统
          </div>
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="left">
        <q-route-tab to="/ProductList" label="ProductList" />
        <q-route-tab to="/ShoppingCart" label="ShoppingCart" />
        <q-route-tab to="/MyOrder" label="MyOrder" />
      </q-tabs>
    </q-header>

    <q-drawer show-if-above v-model="left" side="left" bordered>
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  data () {
    return {
      left: false
    }
  }
}
</script>

<style scoped>
 .my-center{
   line-height: 50px;
   text-align: center;
   /*padding-left: 40px;*/
 }

</style>

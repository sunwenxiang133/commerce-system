import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{
      path: '', component: () => import('pages/ProductList.vue')
    },{
      path:'MyOrder',component:()=>import('pages/MyOrder.vue')
    },{
      path:'ProductList',component:()=>import('pages/ProductList.vue')
    },{
      path:'ShoppingCart',component:()=>import('pages/ShoppingCart.vue')
    }
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;

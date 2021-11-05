import Vue from 'vue';
import Router from 'vue-router';
import itemList from '@/views/item-list.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/:status?',
    name: 'item-list',
    component: itemList,
  }],
});

export default router;

import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/Layout'
import Login from '@/Login'
import Goods from '@/pages/Goods'
import Order from '@/pages/Order'
import Member from '@/pages/Member'
import Category from '@/pages/Category'
import Setting from '@/pages/Setting'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login',
      component: Layout,
      children: [
        {
          path: '/goods',
          name: '商品管理',
          iconCls: 'box-open',
          component: Goods
        },
        {
          path: '/order',
          name: '订单管理',
          iconCls: 'th-list',
          component: Order
        },
        {
          path: '/member',
          name: '会员管理',
          iconCls: 'user',
          component: Member
        },
        {
          path: '/category',
          name: '分类管理',
          iconCls: 'th-large',
          component: Category
        },
        {
          path: '/setting',
          name: '系统设置',
          iconCls: 'cog',
          component: Setting
        },

      ]
    },
    {
      path: '/login',
      name: '登录',
      component: Login,
    }
  ]
})

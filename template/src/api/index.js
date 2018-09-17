import { axios, qs, BASE } from './config'

export default {
  // 获取会员列表
  MEMBER_LIST: params => { return axios.get(`${BASE}/member_list`, { params }) },
  
  // 获取订单列表
  ORDER_LIST: params => { return axios.get(`${BASE}/order_list`, { params }) },
  
  // 获取商品列表
  GOODS_LIST: params => { return axios.get(`${BASE}/goods_list`, { params }) },
  
  // 分类列表
  CATEGORY_LIST: params => { return axios.get(`${BASE}/category_list`, { params }) },
}


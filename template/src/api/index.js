import { axios, qs, BASE } from './config'

// 获取会员列表
export const MEMBER_LIST = params => { return axios.get(`${BASE}/member_list`, { params }) }

// 获取订单列表
export const ORDER_LIST = params => { return axios.get(`${BASE}/order_list`, { params }) }

// 获取商品列表
export const GOODS_LIST = params => { return axios.get(`${BASE}/goods_list`, { params }) }

// 分类列表
export const CATEGORY_LIST = params => { return axios.get(`${BASE}/category_list`, { params }) }

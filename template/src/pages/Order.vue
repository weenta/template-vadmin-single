<template>
    <div class="order">
        <div class="nav-header">
            <el-row type="flex"  :gutter="20">
                <el-col :span="4">
                    <el-input v-model="mobile" placeholder="请输入买家手机号"></el-input>
                </el-col>
                <el-col :span="4">
                    <el-input v-model="orderNum" placeholder="请输入订单号"></el-input>
                </el-col>
                <el-col :span="4">
                    <el-button type='primary'  icon="el-icon-search" @click="getList">查询</el-button>
                </el-col>
            </el-row>    
        </div>      
        <div class="content">
            <el-table :data="list"  v-loading="loading" style="width: 100%;" >
                <el-table-column type="index" width="50"></el-table-column>
                <el-table-column prop='order_num' label="订单号" width="150"></el-table-column>
                <el-table-column prop='buyer' label='卖家手机号' width="150"></el-table-column>
                <el-table-column prop='price' label='订单金额(元)' width="150"></el-table-column>
                <el-table-column prop="status" label="付款状态" width="150"></el-table-column>
                <el-table-column prop="time" label="下单时间" min-width="150"></el-table-column>
                <el-table-column fixed="right" width="150" label="操作" >
                    <template slot-scope="scope">
                        <el-button size="mini" type="primary"  icon="el-icon-edit"></el-button>
                        <el-button size="mini" type="danger" icon="el-icon-delete"></el-button>
                    </template>
                </el-table-column>
            </el-table>  
            <div class="page-wrapper">
                <el-pagination layout="prev, pager, next" :total="total" @current-change='changePage'></el-pagination>
            </div>  
        </div> 
    </div>
</template>

<script>
import { ORDER_LIST } from '@/api'
export default {
    data(){
        return {
            total:0,
            list:[],
            page:1,
            loading:false,
            mobile:'',
            orderNum:""
        }
    },

    methods:{
        // 获取订单列表
        getList(){
            this.loading = true
            ORDER_LIST().then(res=>{
                this.loading = false
                if(res.data.code === 200){
                    this.total = res.data.data.total
                    this.list = res.data.data.data
                }
            })
        },
        
        // 翻页
        changePage(page){
            this.page = page
            this.getList()
        }
    },

    created(){
        this.getList()
    }
}
</script>

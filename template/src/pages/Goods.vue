<template>
    <div class="goods">
        <div class="nav-header">
            <el-row type="flex"  :gutter="20">
                <el-col :span="4">
                    <el-input v-model="goodsName" placeholder="请输入商品名称"></el-input>
                </el-col>
                <el-col :span="4">
                    <el-input v-model="goodsNum" placeholder="请输入商品编号"></el-input>
                </el-col>
                <el-col :span="4">
                    <el-button type='primary'  icon="el-icon-search" @click="getList">查询</el-button>
                </el-col>
            </el-row>    
        </div>
        <div class="content">
            <el-table :data="list"  v-loading="loading" style="width: 100%;" >
                <el-table-column type="index" width="50"></el-table-column>
                <el-table-column prop='name' label="商品名" width="200"></el-table-column>
                <el-table-column label='商品图片' width="180">
                    <template slot-scope="scope">
                        <img class="goods-pic" :src='scope.row.pic' />
                    </template>
                </el-table-column>
                <el-table-column prop='price' label='价格(元)' width="80"></el-table-column>
                <el-table-column prop='store' label='库存(个)' width="80"></el-table-column>
                <el-table-column prop='category' label='分类' width="120"></el-table-column>
                <el-table-column prop='status' label='商品状态' min-width="100"></el-table-column>
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
import { GOODS_LIST } from '@/api'
export default {
    data(){
        return {
            loading: false,
            page:1,
            list:[],
            total:0,
            goodsName:'',
            goodsNum:'',

        }
    },

    methods:{
        // 获取商品列表
        getList(){
            this.loading = true
            GOODS_LIST().then(res=>{
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

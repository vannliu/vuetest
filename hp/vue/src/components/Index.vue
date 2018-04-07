<template>
    <div>
        <div class="index">
            <div class="books_con">
                <el-row :gutter="20">
                    <router-link  :to="{name: 'booksart', params: {id: item.id}}"  v-for="item in moves_list" class="book_item">
                    <el-col :span="4">
                        <img :src="item.images.small">
                        <h3>{{item.title}}</h3>
                        <h4>{{item.price}}</h4>
                    </el-col>
                    </router-link>
                </el-row>
            </div>
            <!-- <router-view/> -->
        </div>
    </div>
</template>
<!--
搜索接口
https://api.douban.com/v2/book/search 
q:关键词
count：数量
-->
<script>
export default {
    data () {
        return {
            input:'',
            moves_list: {}
        }
    },
    created () {
        this.ajaxLoad()
    },
    methods: {
        ajaxLoad () {
            let _this = this
            _this.axios.get('/v2/movie/in_theaters?'+'count=18').then((res) => {
            this.moves_list=res.data.subjects;
            console.log(this.moves_list)   
            })
        }
    }
}
</script>

<style  lang="scss" >
   
</style>

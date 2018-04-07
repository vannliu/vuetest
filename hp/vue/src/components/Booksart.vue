<template>
    <div class="booksart">
        <el-row :gutter="20">
            <el-col :span="24" class="book_item">
                <img :src="goods_list.images.medium">
                <div class="movies-info">
                    <h3>{{goods_list.title}}</h3>
                     <h4>{{goods_list.summary}}</h4>
                     <p>{{goods_list.countries}}{{goods_list.genres}}</p>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    data () {
        return {
            linkid:'',
            goods_list: {}
        }
    },
    created () {
        this.golist()
    },
    methods: {
        golist() {
            let _this = this
            _this.linkid = this.$route.params.id;

            _this.axios.get('/v2/movie/subject/'+_this.linkid).then((res) => {
                console.log(res)
                this.goods_list=res.data;
            
            })
        }
    }
}
</script>

<style scoped>

    .book_item{
        overflow: hidden;
        height: auto;
    }
    .book_item img{
        float: left;
        max-width: 270px;
        height: 360px;
        max-height: 360px;
    }
    .movies-info{
        float: right;
        width: 60%;
        text-align: left;
    }
    .movies-info h3{
        font-size: 26px
    }
    .movies-info h4{
        font-size: 16px;
        text-indent: 2em
    }
</style>

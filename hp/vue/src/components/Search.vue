<template>
    <div>
        <div class="books_con">
                <el-row :gutter="20">
                    <router-link  :to="{name: 'booksart', params: {id: item.id}}"  v-for="item in movielist" class="book_item">
                    <el-col :span="4">
                        <img :src="item.images.small">
                        <h3>{{item.title}}</h3>
                        <h4>{{item.price}}</h4>
                    </el-col>
                    </router-link>
                </el-row>
            </div>
    </div>
</template>

<script>
export default {
 data(){
     return {
          query: '',
          movielist:[],
     }
 },
 mounted(){
     this.query=this.$route.query.query;
     this.ajaxLoad()
 },
 methods:{
     ajaxLoad () {
            let _this = this
            _this.axios.get('/v2/movie/search', {params: {q:_this.query, count:18}}).then((res) => {
            this.movielist=res.data.subjects;
            console.log(this.movielist)   
            })
        }
 }
}
</script>

<style>

</style>

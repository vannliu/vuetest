<template>
    <div>
        <div class="headers">
            <el-row>
              <el-col :span="22">
                  <div class="grid-content bg-purple-dark">
                      <el-input v-model.trim="input" placeholder="请输入内容" maxlength="40" @keyup.enter="search()"></el-input>
                  </div>
                  </el-col>
              <el-col :span="2">
                  <div class="grid-content bg-purple-dark">
                        <el-button type="primary" icon="el-icon-search" @click="search()">搜索</el-button>
                  </div>
                </el-col>
            </el-row>
            
            <!-- <router-view/> -->
        </div>
    </div>
</template>
<!--
搜索接口
https://api.douban.com/v2/movie/search 
q:关键词
count：数量
-->
<script>
export default {
    data () {
        return {
            input:'',
            search_list: {},
            path: 'search-movie'
        }
    },
    mounted(){
      if (this.$route.path === 'index' || this.$route.path.indexOf('movie')) {
        this.path = '/movie/search';
      }
      else if (this.$route.path.indexOf('book')) {
        this.path = '/book/search'
      }
    },
    methods: {
        // ajaxLoad () {
        //     let _this = this
        //     _this.axios.get('/v2/movie/search', {params: {q:_this.input, count:18}}).then((res) => {
        //     this.search_list=res.data.subjects;
        //     console.log(this.search_list)   
        //     })
        // }
        search(){
        this.$router.push({path: this.path, query: {query: this.input}});
        this.input = '';
      }
    }
}
</script>

<style  lang="scss" >
    .headers{
        padding: 1% 0
    }
    .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
 .book_item{
      height: 250px;
      padding-bottom: 10px;
 }
  .book_item img{
      width: 100%;
      max-width: 120px;
      height: 140px;
      max-height: 140px;
      border: 1px solid #508dcc;
      padding: 1px
  }
  .book_item h3{
      font-size: 15px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      padding-bottom: 5px;
  }

</style>

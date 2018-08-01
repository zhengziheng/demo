<template>
    <div class="search-wrapper">
        <div >
        <el-upload
            class="upload-demo"
            drag
            action="https://jsonplaceholder.typicode.com/posts/"
            multiple>
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
        <el-button type="primary" icon="el-icon-search" class="search-btn" @click="handleGetSearch">检索</el-button>
        </div>
        <div class="search-result-wrapper">
            <div class="search-result">
                <div class="search-result-item" v-for="(item, index) in faceDate" :key="index">
                    <img :src=item alt="" width="100" height="100">
                </div>
            </div>
        </div>

    </div>
</template>
//  el-upload-list--text   文件上传成功dom

<script>
import axios from 'axios'
export default {
    data(){
        return{
            faceDate:[]

        }
    },

    methods: {
        handleGetSearch(){
            axios.get('/api/search.json').then(res=>{
                   
                    this.faceDate = res.data.faceDate
                     console.log(this.faceDate)
            })
            
        }
    }
};
</script>


<style scope lang="stylus">
.search-wrapper
    position relative
    left 300px
    top -100px
    .search-btn
        position absolute
        top 199px
        left 279px
    .search-result-wrapper
        position relative
        top 40px
        width 1200px
        height 690px
        color black
        border 1px solid black
        .search-result
            display flex
            flex-wrap wrap
            .search-result-item
                padding 20px
            
            
            

</style>
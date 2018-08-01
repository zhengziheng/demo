<template>
    <div class="compare-wrapper">
        <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :file-list="fileList2"
            list-type="picture">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip" >只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
        <el-button type="primary" icon="el-icon-search" @click="handleCompare"  class="cp-btn" >对比</el-button>
    </div>
</template>

<script>
import axios from 'axios'
  export default {
    data() {
      return {
        fileList2: [{name: 'face1.jpeg', url: 'https://bpic.588ku.com/element_pic/01/48/88/2757444507812f6.jpg'}, {name: 'face2.jpeg', url: 'https://bpic.588ku.com/element_pic/01/48/88/2757444507812f6.jpg'}],
        compareResult:''
      };
    },
    methods: {
     handleCompare(){
         axios.get('/api/compareresult.json').then(res=>{
             this.compareResult = res.data.result
             this.open5(this.compareResult)
         })
     },
      open5(compareResult) {
          
        this.$alert('<strong><i>this.compareResult</i></strong>', '对比相似度', {
          dangerouslyUseHTMLString: true,
          message:compareResult
        });
      }
     
}
  }
</script>


<style scope lang="stylus">
    .compare-wrapper
        position relative   
        left 300px
        top -100px
        .cp-btn
            position relative
            top -256px
            left 97px
            width 80px
            height 32px
            text-align center
            

</style>

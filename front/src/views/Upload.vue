<!--  -->
<template>
  <el-upload
    action
    class="upload-demo"
    drag
    :auto-upload="false"
    multiple
    ref="upload"
    :http-request="upload"
  >
    <i class="el-icon-upload"></i>
    <div class="el-upload__text">
      将文件拖到此处，或
      <em>点击上传</em>
    </div>
    <div class="el-upload__tip" slot="tip">只能上传jpg/png文件</div>
  </el-upload>
</template>

<script>
import { getAllPictureData } from "../service/service";
export default {
  data() {
    return {};
  },

  components: {},

  computed: {},

  mounted() {
    getAllPictureData().then(res => {
      console.log(res);
    });
  },

  methods: {
    upload() {
      const formData = new FormData();
      console.log(file);
      const file = this.$refs.upload.uploadFiles;
      const headerConfig = {
        headers: { "Content-Type": "multipart/form-data" }
      };
      if (!file) {
        // 若未选择文件
        alert("请选择文件");
        return;
      }
      formData.append("file", file.raw);
      formData.append("name", this.name);
      formData.append("age", this.age);
      this.$http.post("/api/upload", formData, headerConfig).then(res => {
        console.log(res);
      });
    }
  }
};
</script>
<style lang='scss' scoped>
</style>
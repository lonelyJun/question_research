<!--  -->
<template>
  <div class="uploadPage">
    <el-upload
      :before-upload="beofreUpload"
      class="upload-demo"
      :action="uploadUrl"
      multiple
      drag
      :show-file-list="false"
      accept=".jpg, .jpeg, .png"
      :http-request="handleUpload"
      ref="uploadDom"
    >
      <i class="el-icon-upload"></i>

      <div class="el-upload__text">
        将文件拖到此处，或
        <em>点击上传</em>
      </div>
      <div class="el-upload__tip" slot="tip">还剩{{beginUploadCount}}个文件没有上传</div>
    </el-upload>
    <div class="overlay" v-if="overlayFlag">
      <div class="progress">
        <div class="progressValueText">{{progressValue}}</div>
        <div class="progressValue" ref="progressValueDom"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { uploadFile } from "../service/service";
export default {
  data() {
    return {
      uploadUrl: "/api/picture/upload",
      beginUploadCount: 0,
      fileList: [],
      overlayFlag: false,
      fileLength: 0,
      progressValue: "0%"
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {
    beofreUpload() {
      this.overlayFlag = true;
    },
    handleUpload(req) {
      this.beginUploadCount++;
      if (this.beginUploadCount > this.fileLength) {
        this.fileLength = this.beginUploadCount;
      }
      const fileData = new FormData();
      fileData.append("file", req.file);
      uploadFile(fileData).then(upload_res => {
        this.beginUploadCount--;
        this.setProgress(
          this.beginUploadCount != 0 || this.fileLength != 0
            ? (this.fileLength - this.beginUploadCount) / this.fileLength
            : 0
        );
        upload_res;
        if (this.beginUploadCount == 0) {
          setTimeout(() => {
            this.overlayFlag = false;
            this.fileLength = 0;
            this.progressValue = "0%";
          }, 1000);
        }
      });
    },
    setProgress(v) {
      this.progressValue = Math.floor(v * 100) + "%";
      this.$refs.progressValueDom.style.width = Math.floor(v * 100) + "%";
    }
  }
};
</script>
<style lang='scss' scoped>
.uploadPage {
  width: 100%;
  height: 100%;
  position: relative;
  .overlay {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    .progress {
      width: 80%;
      height: 20px;
      position: relative;
      background-color: #999;
      .progressValueText {
        position: absolute;
        width: 100%;
        height: 20px;
        text-align: center;
        background-color: transparent;
        z-index: 6;
        top: 0;
        line-height: 20px;
      }
      .progressValue {
        position: absolute;
        z-index: 5;
        height: 20px;
        top: 0;
        background-color: green;
      }
      text-align: center;
      line-height: 20px;
      color: azure;
      font-size: 16px;
    }
  }
}
</style>
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
    </el-upload>
    <div class="overlay" v-if="overlayFlag">
      <div class="progress">
        <div class="progressValueText">{{progressValue}}</div>
        <div class="progressValue" ref="progressValueDom"></div>
      </div>
    </div>
    <el-table :data="tableData" height="250" border>
      <el-table-column prop="index" label="图片编号" width="80"></el-table-column>
      <el-table-column label="图片">
        <template slot-scope="scope">
          <img :src="scope.row.picUrl" />
        </template>
      </el-table-column>
      <el-table-column label="问题1">
        <el-table-column prop="qustion1.city" label="都市" width="50"></el-table-column>
        <el-table-column prop="qustion1.outskirts" label="近郊" width="50"></el-table-column>
        <el-table-column prop="qustion1.water" label="滨水" width="50"></el-table-column>
        <el-table-column prop="qustion1.country" label="乡村" width="50"></el-table-column>
        <el-table-column prop="qustion1.product" label="产业园" width="75"></el-table-column>
      </el-table-column>
      <el-table-column prop="question2" label="问题2" width="80"></el-table-column>
      <el-table-column prop="question3" label="问题3" width="80"></el-table-column>
      <el-table-column prop="question4" label="问题4" width="80"></el-table-column>
      <el-table-column prop="question5" label="问题5" width="80"></el-table-column>
    </el-table>
  </div>
</template>

<script>
import { uploadFile, getAllPictureData } from "../service/service";
export default {
  data() {
    return {
      uploadUrl: "/api/picture/upload",
      beginUploadCount: 0,
      fileList: [],
      overlayFlag: false,
      fileLength: 0,
      progressValue: "0%",
      tableData: []
    };
  },

  components: {},

  computed: {},

  mounted() {
    getAllPictureData(aPD_res => {
      if (aPD_res.code == 0) {
        this.tableData = aPD_res.data;
      }
    });
  },

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
          getAllPictureData(aPD_res => {
            if (aPD_res.code == 0) {
              this.tableData = aPD_res.data;
            }
          });
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
/deep/ .el-table {
  width: 80%;
  margin: 20px auto;
}
/deep/ .el-table--border::after,
.el-table--group::after,
.el-table::before {
  z-index: 0;
}
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
<!--  -->
<template>
  <div class="uploadPage">
    上传须知：
    请图片名按照0开始顺序增加的数字，支持jpg,jepg,png格式
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
    <el-button @click="handleExportCSV">导出CSV</el-button>
    <el-button type="warning" @click="handleRemoveAll">删除所有图片与数据（慎点）</el-button>
    <div class="overlay" v-if="overlayFlag">
      <div class="progress">
        <div class="progressValueText">{{progressValue}}</div>
        <div class="progressValue" ref="progressValueDom"></div>
      </div>
    </div>
    <el-table :data="tableData" border height="800">
      <el-table-column prop="index" label="图片编号" width="80"></el-table-column>
      <el-table-column label="图片">
        <template slot-scope="scope">
          <img :src="scope.row.picUrl" />
        </template>
      </el-table-column>
      <!-- <el-table-column label="问题1">
        <el-table-column prop="city" label="都市" width="50"></el-table-column>
        <el-table-column prop="outskirts" label="近郊" width="50"></el-table-column>
        <el-table-column prop="water" label="滨水" width="50"></el-table-column>
        <el-table-column prop="country" label="乡村" width="50"></el-table-column>
        <el-table-column prop="product" label="产业园" width="75"></el-table-column>
      </el-table-column>-->
      <el-table-column prop="question1" label="问题1" width="80"></el-table-column>
      <el-table-column prop="question2" label="问题2" width="80"></el-table-column>
      <el-table-column prop="question3" label="问题3" width="80"></el-table-column>
      <el-table-column prop="question4" label="问题4" width="80"></el-table-column>
      <el-table-column prop="question5" label="问题5" width="80"></el-table-column>
    </el-table>
  </div>
</template>

<script>
import { uploadFile, getAllPictureData, removeAll } from "../service/service";
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
    window.document.title = "影像感知后台";
    getAllPictureData().then(aPD_res => {
      if (aPD_res.data.code == 0) {
        this.tableData = aPD_res.data.data.sort((a, b) => {
          return a.index - b.index;
        });
      }
    });
  },

  methods: {
    handleExportCSV() {
      // let str = "图片编号,都市,近郊,滨水,乡村,产业园,问题2,问题3,问题4,问题5\n";
      let str = "图片编号,问题1,问题2,问题3,问题4,问题5\n";
      if (this.tableData.length != 0) {
        this.tableData.forEach(o => {
          // str += `${o.index},${o.city},${o.outskirts},${o.water},${o.country},${o.product},${o.question2},${o.question3},${o.question4},${o.question5}\n`;
          str += `${o.index},${o.question1},${o.question2},${o.question3},${o.question4},${o.question5}\n`;
        });
        //encodeURIComponent解决中文乱码
        let uri =
          "data:text/csv;charset=utf-8,\ufeff" + encodeURIComponent(str);
        //通过创建a标签实现
        let link = document.createElement("a");
        link.href = uri;
        //对下载的文件命名
        link.download = "json数据表.csv";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    },
    handleRemoveAll() {
      this.$confirm("此操作将永久删除所有文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          removeAll().then(rm_res => {
            if (rm_res.data.code == 0) {
              this.$message({
                type: "success",
                message: "删除成功"
              });
              this.tableData = [];
            } else {
              this.$message({
                type: "error",
                message: "删除失败"
              });
            }
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
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
      uploadFile(fileData).then(() => {
        this.beginUploadCount--;
        this.setProgress(
          this.beginUploadCount != 0 || this.fileLength != 0
            ? (this.fileLength - this.beginUploadCount) / this.fileLength
            : 0
        );
        if (this.beginUploadCount == 0) {
          getAllPictureData().then(aPD_res => {
            if (aPD_res.data.code == 0) {
              this.tableData = aPD_res.data.data.sort((a, b) => {
                return a.index - b.index;
              });
            }
          });
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
/deep/ .el-table {
  width: 80%;
  margin: 20px auto;
}
/deep/ .cell {
  img {
    width: 100%;
    height: auto;
  }
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
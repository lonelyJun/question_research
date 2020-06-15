<!--  -->
<template>
  <div>
    <!-- <el-button type="primary" @click="changeOne">换一张</el-button> -->
    <ul class="questionArea">
      <li style="margin-bottom:1em;">
        <div class="question">1·请选择符合照片描述的城市风貌：</div>
        <div class="explain">
          <p>意向性：区别于其他街道的整体环境和物理属性，决定了街道的可识别性和行人在此的感受和记忆。</p>
        </div>
        <div class="num">No.{{pic1}}</div>
        <div class="imgBg">
          <img :src="imageUrl1" />
        </div>
        <el-radio-group v-model="radio1">
          <el-radio :label="0">都市</el-radio>
          <el-radio :label="1">近郊</el-radio>
          <el-radio :label="2">滨水</el-radio>
          <el-radio :label="3">乡村</el-radio>
          <el-radio :label="4">产业园</el-radio>
        </el-radio-group>
      </li>
      <li>
        <div class="question">2·请选择您觉得照片中街道的围合度更好的照片：</div>
        <div class="explain">
          <p>围合度：街道和其他公共空间在物理空间上被建筑、围墙、树木以及其他垂直物理要素限定的程度。围合度决定了行人的心理安全感和公共空间的亲切性。</p>
        </div>
        <div class="num">No.{{pic1}} vs No.{{pic2}}</div>
        <div class="imageArea">
          <div :class="{imgBg:true,active:compare1!==null&&compare1}" @click="changeCompare1(true)">
            <img :src="imageUrl1" />
          </div>
          <div
            :class="{imgBg:true,active:compare1!==null&&!compare1}"
            @click="changeCompare1(false)"
          >
            <img :src="imageUrl2" />
          </div>
        </div>
      </li>
      <li>
        <div class="question">3·请选择您觉得照片中街道的人尺度更好的照片：</div>
        <div class="explain">
          <p>人尺度：公共空间的尺寸、材质以及各物理要素提供给行人的心理和生理上的舒适感受。人尺度决定了行人在空间中的舒适度。</p>
        </div>
        <div class="num">No.{{pic1}} vs No.{{pic3}}</div>
        <div class="imageArea">
          <div :class="{imgBg:true,active:compare2!==null&&compare2}" @click="changeCompare2(true)">
            <img :src="imageUrl1" />
          </div>
          <div
            :class="{imgBg:true,active:compare2!==null&&!compare2}"
            @click="changeCompare2(false)"
          >
            <img :src="imageUrl3" />
          </div>
        </div>
      </li>
      <li>
        <div class="question">4·请选择您觉得照片中街道的丰富性更好的照片：</div>
        <div class="explain">
          <p>丰富性：街道的功能、活动和视觉丰富程度，由物理环境要素，例如不同种类的建筑数、装饰物数量、景观植物数量和街道家具数量等决定。多样程度决定了公共空间的丰富性。</p>
        </div>
        <div class="num">No.{{pic1}} vs No.{{pic4}}</div>
        <div class="imageArea">
          <div :class="{imgBg:true,active:compare3!==null&&compare3}" @click="changeCompare3(true)">
            <img :src="imageUrl1" />
          </div>
          <div
            :class="{imgBg:true,active:compare3!==null&&!compare3}"
            @click="changeCompare3(false)"
          >
            <img :src="imageUrl4" />
          </div>
        </div>
      </li>
      <li>
        <div class="question">5·请选择您觉得照片描述的城市风貌更好的照片</div>
        <!-- <div class="explain">
          <p>透明性：行人能看见或感知到街道和公共空间界面背后他人活动的程度。透明性决定了人和公共空间的亲疏性，体现了公共空间与周边建筑之间的互动关系</p>          
        </div>-->
        <div class="num">No.{{pic1}} vs No.{{pic5}}</div>
        <div class="imageArea">
          <div :class="{imgBg:true,active:compare4!==null&&compare4}" @click="changeCompare4(true)">
            <img :src="imageUrl1" />
          </div>
          <div
            :class="{imgBg:true,active:compare4!==null&&!compare4}"
            @click="changeCompare4(false)"
          >
            <img :src="imageUrl5" />
          </div>
        </div>
      </li>
    </ul>
    <el-button type="primary" @click="submit" class="submitBtn">提交</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radio1: -1,
      compare1: null,
      compare2: null,
      compare3: null,
      compare4: null,
      pic1: parseInt(Math.random() * 500),
      pic2: parseInt(Math.random() * 500),
      pic3: parseInt(Math.random() * 500),
      pic4: parseInt(Math.random() * 500),
      pic5: parseInt(Math.random() * 500),
      serverUrl: "http://140.143.239.153:3000/",
      // serverUrl:'/api/',
      result: {}
    };
  },

  computed: {
    imageUrl1() {
      return "./static/images/" + this.pic1 + ".jpeg";
    },
    imageUrl2() {
      return "./static/images/" + this.pic2 + ".jpeg";
    },
    imageUrl3() {
      return "./static/images/" + this.pic3 + ".jpeg";
    },
    imageUrl4() {
      return "./static/images/" + this.pic4 + ".jpeg";
    },
    imageUrl5() {
      return "./static/images/" + this.pic5 + ".jpeg";
    }
  },

  watch: {
    pic2(o) {
      if (o == this.pic1) o = parseInt(Math.random() * 500);
    },
    pic3(o) {
      if (o == this.pic1) o = parseInt(Math.random() * 500);
    },
    pic4(o) {
      if (o == this.pic1) o = parseInt(Math.random() * 500);
    },
    pic5(o) {
      if (o == this.pic1) o = parseInt(Math.random() * 500);
    }
  },

  mounted() {
    // this.$http.post(this.serverUrl).then((data)=>{
    //   this.result = data.data;
    // })
  },

  methods: {
    changeOne() {
      this.imageUrl =
        "./static/images/" + parseInt(Math.random() * 500) + ".jpeg";
    },
    changeCompare1(o) {
      this.compare1 = o;
    },
    changeCompare2(o) {
      this.compare2 = o;
    },
    changeCompare3(o) {
      this.compare3 = o;
    },
    changeCompare4(o) {
      this.compare4 = o;
    },
    submit() {
      if (
        this.radio1 == -1 ||
        this.compare1 == null ||
        this.compare2 == null ||
        this.compare3 == null ||
        this.compare4 == null
      ) {
        this.$alert("请您耐心做完选择", "提示", {
          confirmButtonText: "确定",
          callback: () => {
            this.$message({
              type: "warning",
              message: "还没做完所有选择哦"
            });
          }
        });
      } else {
        this.$http
          .get(this.serverUrl + "saveResult", {
            params: {
              pic1: this.pic1,
              radio1: this.radio1,
              pic2: this.pic2,
              compare1: this.compare1,
              pic3: this.pic3,
              compare2: this.compare2,
              pic4: this.pic4,
              compare3: this.compare3,
              pic5: this.pic5,
              compare4: this.compare4
            }
          })
          .then(data => {
            if (data.data.msg == "success") {
              this.$message({
                type: "success",
                message: "提交成功"
              });
              this.init();
            } else {
              this.$message({
                type: "error",
                message: "未知错误"
              });
            }
          });
      }
    },
    init() {
      this.radio1 = -1;
      this.compare1 = null;
      this.compare2 = null;
      this.compare3 = null;
      this.compare4 = null;
      this.pic1 = parseInt(Math.random() * 500);
      this.pic2 = parseInt(Math.random() * 500);
      this.pic3 = parseInt(Math.random() * 500);
      this.pic4 = parseInt(Math.random() * 500);
      this.pic5 = parseInt(Math.random() * 500);
    }
  }
};
</script>
<style lang='scss' scoped>
.el-radio /deep/ {
  line-height: 1.5em;
}

.num {
  font-size: 60%;
}

.imageArea {
  margin-bottom: 1em;
  overflow: hidden;
  .imgBg {
    float: left;
    max-width: 49%;
    box-sizing: border-box;
    border: 3px solid transparent;
    cursor: pointer;
    img {
      max-width: 100%;
      height: auto;
    }
    &:first-child {
      margin-right: 2%;
    }
    &.active {
      border: 3px solid red;
    }
  }
}

ul.questionArea {
  li {
    list-style: none;
    text-align: left;
  }
  .question {
    font-size: 120%;
    // padding-bottom:1em;
    font-weight: 700;
  }

  .imgBg {
    img {
      max-width: 100%;
      height: auto;
    }
  }

  .explain {
    font-size: 80%;
    color: #666;
  }
}

.submitBtn {
  margin: 1em 0 3em 0;
}
</style>
<!--  -->
<template>
  <div>
    <!-- <el-button type="primary" @click="changeOne">换一张</el-button> -->
    <ul class="questionArea">
      <li style="margin-bottom:1em;">
        <div class="question">
          1·意向性 Image
          请选择符合照片描述的城市风貌。
          Please Choose the type of environment.
        </div>
        <div class="explain">
          <p>
            意向性：区别于其他街道的整体环境和物理属性，决定了街道的可识别性和行人在此的感受和记忆。
            Image: The overall environment and physical properties that distinguish it from other streets determine the street's recognizability and pedestrians' feelings and memories here
          </p>
        </div>
        <div class="num">No.{{pic1}}</div>
        <div class="imgBg">
          <img :src="imageUrl1" />
        </div>
        <el-radio-group v-model="radio1">
          <el-radio :label="0">居住区 Residential</el-radio>
          <el-radio :label="1">办公区 Office</el-radio>
          <el-radio :label="2">商业区 Commercial</el-radio>
          <el-radio :label="3">近郊 Suburban</el-radio>
          <el-radio :label="4">滨水 Waterfront</el-radio>
          <el-radio :label="5">乡村 Countryside</el-radio>
        </el-radio-group>
      </li>
      <li>
        <div class="question">
          2.秩序性 Order
          请选择您觉得更加有秩序的一张照片。
          Which environment do you think has more order and less chaos?
        </div>
        <div class="explain">
          <p>
            秩序性:街道的秩序包含街道的连续性, 序列性, 景观元素的一致性, 决定了街区公共环境的完整性.
            Order: The order of the street includes the sequence, consistency, and consistency of the landscape elements, which determines the integrity of the public environment of the block.
          </p>
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
        <div class="question">
          3. 可达性 Accessibility
          请选择您觉得可达到性更高的一张照片。
          Which environment do you think is more accessible?
        </div>
        <div class="explain">
          <p>
            可达性: 街道空间是否可达, 行人能入介入街道公共空间的容易程度
            Accessibility: To measure whether the street space is accessible and how easy it is for pedestrians to enter the street public space.
          </p>
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
        <div class="question">
          4. 美观性 Aesthetics
          请选择您觉得整体风貌更美观的一张照片。
          Which environment do you think is more beautiful?
        </div>
        <div class="explain">
          <p>
            美观性: 不同的景观元素带来的主观视觉感受。
            Aesthetics: Subjective visual experience brought by different landscape elements.
          </p>
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
        <div class="question">
          5·生态性Ecology
          请选择您觉得街道的生态性更好的一张照片。
          Which environment do you think has the higher ecological values?
        </div>
        <div class="explain">
          <p>
            生态性：街道景观的生态性包括街道景观的透水铺装、街道绿植、雨洪管理等基础设施、街道绿地、栖息地等，生态型决定了街道景观支持非人类物种的能力。
            Ecology: The ecology of the street landscape includes permeable pavement, vegetations, street green space, flood management infrastructure, and habitats. It determines the capacity of the streetscape to support non-human species.
          </p>
        </div>
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
      <li>
        <div class="question">
          6·围合度Enclosure
          请选择您觉得街道围合度更好一张照片。
          Which environment do you think has a higher enclosure?
        </div>
        <div class="explain">
          <p>
            围合度：街道和其他公共空间在物理空间上被建筑、围墙、树木以及其他垂直物理要素限定的程度。围合度决定了行人的心理安全感和公共空间的亲切性
            Enclosure: The degree to which streets and other public spaces are physically limited by buildings, walls, trees, and other vertical physical elements. The degree of enclosure determines the pedestrian's psychological security and the intimacy of the public space
          </p>
        </div>
        <div class="num">No.{{pic1}} vs No.{{pic6}}</div>
        <div class="imageArea">
          <div :class="{imgBg:true,active:compare5!==null&&compare5}" @click="changeCompare5(true)">
            <img :src="imageUrl1" />
          </div>
          <div
            :class="{imgBg:true,active:compare5!==null&&!compare5}"
            @click="changeCompare5(false)"
          >
            <img :src="imageUrl6" />
          </div>
        </div>
      </li>
      <li>
        <div class="question">
          7.丰富性 Richness
          请选择您觉得街道环境更丰富的一张照片。
          Which environment do you think has a higher richness?
        </div>
        <div class="explain">
          <p>
            丰富性：街道的功能、活动和视觉丰富程度，由物理环境要素，例如不同种类的建筑数、装饰物数量、景观植物数量和街道家具数量等决定。多样程度决定了公共空间的丰富性。
            Richness: The richness of programs, activities, and visual impressions of the street are determined by physical environmental elements, such as the number of different types of buildings and ornaments, the number of landscape plants and street furniture. The degree of diversity determines the richness of public spaces.
          </p>
        </div>
        <div class="num">No.{{pic1}} vs No.{{pic7}}</div>
        <div class="imageArea">
          <div :class="{imgBg:true,active:compare6!==null&&compare6}" @click="changeCompare6(true)">
            <img :src="imageUrl1" />
          </div>
          <div
            :class="{imgBg:true,active:compare6!==null&&!compare6}"
            @click="changeCompare6(false)"
          >
            <img :src="imageUrl7" />
          </div>
        </div>
      </li>
      <li>
        <div class="question">
          8·人尺度 Human-scale
          请选择您觉得照片中街道的人尺度更好的一张照片。
          Which environment do you think is more human scale?
        </div>
        <div class="explain">
          <p>
            人尺度：公共空间的尺寸、材质以及各物理要素提供给行人的心理和生理上的舒适感受。人尺度决定了行人在空间中的舒适度。
            Human-scale: The dimensions, materials, and physical elements of public spaces provide pedestrians with psychological and physical comfort. The human scale determines the comfort of pedestrians in space.
          </p>
        </div>
        <div class="num">No.{{pic1}} vs No.{{pic8}}</div>
        <div class="imageArea">
          <div :class="{imgBg:true,active:compare7!==null&&compare7}" @click="changeCompare7(true)">
            <img :src="imageUrl1" />
          </div>
          <div
            :class="{imgBg:true,active:compare7!==null&&!compare7}"
            @click="changeCompare7(false)"
          >
            <img :src="imageUrl8" />
          </div>
        </div>
      </li>
    </ul>
    <el-button type="primary" @click="submit" class="submitBtn">提交</el-button>
  </div>
</template>

<script>
import { sumbitResult, getLength, getPicUrl } from "../service/service";
export default {
  data() {
    return {
      radio1: -1,
      compare1: null,
      compare2: null,
      compare3: null,
      compare4: null,
      compare5: null,
      compare6: null,
      compare7: null,
      pic1: -1,
      pic2: -1,
      pic3: -1,
      pic4: -1,
      pic5: -1,
      pic6: -1,
      pic7: -1,
      pic8: -1,
      // serverUrl:'/api/',
      result: {},
      picLength: 0,
      pu1: "",
      pu2: "",
      pu3: "",
      pu4: "",
      pu5: "",
      pu6: "",
      pu7: "",
      pu8: ""
    };
  },

  computed: {
    imageUrl1() {
      return this.pu1;
    },
    imageUrl2() {
      return this.pu2;
    },
    imageUrl3() {
      return this.pu3;
    },
    imageUrl4() {
      return this.pu4;
    },
    imageUrl5() {
      return this.pu5;
    },
    imageUrl6() {
      return this.pu6;
    },
    imageUrl7() {
      return this.pu7;
    },
    imageUrl8() {
      return this.pu8;
    }
  },

  watch: {
    picLength(o) {
      this.pic1 = Math.floor(Math.random() * o);
      this.pic2 = Math.floor(Math.random() * o);
      this.pic3 = Math.floor(Math.random() * o);
      this.pic4 = Math.floor(Math.random() * o);
      this.pic5 = Math.floor(Math.random() * o);
      this.pic6 = Math.floor(Math.random() * o);
      this.pic7 = Math.floor(Math.random() * o);
      this.pic8 = Math.floor(Math.random() * o);
    },
    pic1(o) {
      getPicUrl({ index: o }).then(res => {
        this.pu1 = res.data.data;
      });
    },
    pic2(o) {
      let i = o;
      while (i == this.pic1) {
        i = Math.floor(Math.random() * this.picLength);
      }
      getPicUrl({ index: i }).then(res => {
        this.pu2 = res.data.data;
      });
      this.pic2 = i;
    },
    pic3(o) {
      let i = o;
      while (i == this.pic1) {
        i = Math.floor(Math.random() * this.picLength);
      }
      getPicUrl({ index: i }).then(res => {
        this.pu3 = res.data.data;
      });
      this.pic3 = i;
    },
    pic4(o) {
      let i = o;
      while (i == this.pic1) {
        i = Math.floor(Math.random() * this.picLength);
      }
      getPicUrl({ index: i }).then(res => {
        this.pu4 = res.data.data;
      });
      this.pic4 = i;
    },
    pic5(o) {
      let i = o;
      while (i == this.pic1) {
        i = Math.floor(Math.random() * this.picLength);
      }
      getPicUrl({ index: i }).then(res => {
        this.pu5 = res.data.data;
      });
      this.pic5 = i;
    },
    pic6(o) {
      let i = o;
      while (i == this.pic1) {
        i = Math.floor(Math.random() * this.picLength);
      }
      getPicUrl({ index: i }).then(res => {
        this.pu6 = res.data.data;
      });
      this.pic6 = i;
    },
    pic7(o) {
      let i = o;
      while (i == this.pic1) {
        i = Math.floor(Math.random() * this.picLength);
      }
      getPicUrl({ index: i }).then(res => {
        this.pu7 = res.data.data;
      });
      this.pic7 = i;
    },
    pic8(o) {
      let i = o;
      while (i == this.pic1) {
        i = Math.floor(Math.random() * this.picLength);
      }
      getPicUrl({ index: i }).then(res => {
        this.pu8 = res.data.data;
      });
      this.pic8 = i;
    }
  },

  mounted() {
    window.document.title = "景观和城市影像感知";

    getLength().then(result => {
      if (result.data.code == 0) {
        if (result.data.data != 0) {
          this.picLength = parseInt(result.data.data);
        } else {
          this.$message({
            type: "error",
            message: "无数据"
          });
        }
      } else {
        this.$message({
          type: "error",
          message: result.data.message
        });
      }
    });

    // this.$http.post(this.serverUrl).then((data)=>{
    //   this.result = data.data;
    // })
  },

  methods: {
    // changeOne() {
    //   this.imageUrl =
    //     "./static/images/" + parseInt(Math.random() * 500) + ".jpeg";
    // },
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
    changeCompare5(o) {
      this.compare5 = o;
    },
    changeCompare6(o) {
      this.compare6 = o;
    },
    changeCompare7(o) {
      this.compare7 = o;
    },
    submit() {
      if (
        // this.radio1 == -1 ||
        this.compare1 == null ||
        this.compare2 == null ||
        this.compare3 == null ||
        this.compare4 == null ||
        this.compare5 == null ||
        this.compare6 == null ||
        this.compare7 == null
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
        let params = {
          pic1: this.pic1,
          radio1: this.radio1,
          question2: this.compare1 ? this.pic1 : this.pic2,
          question3: this.compare2 ? this.pic1 : this.pic3,
          question4: this.compare3 ? this.pic1 : this.pic4,
          question5: this.compare4 ? this.pic1 : this.pic5,
          question6: this.compare5 ? this.pic1 : this.pic6,
          question7: this.compare6 ? this.pic1 : this.pic7,
          question8: this.compare7 ? this.pic1 : this.pic8
        };
        sumbitResult(params).then(data => {
          if (data.data.code == 0) {
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
      // this.radio1 = -1;
      this.compare1 = null;
      this.compare2 = null;
      this.compare3 = null;
      this.compare4 = null;
      this.compare5 = null;
      this.compare6 = null;
      this.compare7 = null;
      this.pic1 = Math.floor(Math.random() * this.picLength);
      this.pic2 = Math.floor(Math.random() * this.picLength);
      this.pic3 = Math.floor(Math.random() * this.picLength);
      this.pic4 = Math.floor(Math.random() * this.picLength);
      this.pic5 = Math.floor(Math.random() * this.picLength);
      this.pic6 = Math.floor(Math.random() * this.picLength);
      this.pic7 = Math.floor(Math.random() * this.picLength);
      this.pic8 = Math.floor(Math.random() * this.picLength);
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
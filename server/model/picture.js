//建立模型模块（第一步）
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//schema 就是如何定义数据的结构
var pictureSchema = new mongoose.Schema({
  picUrl: {
    type: String
  },
  enable: {
    type: Boolean,
    default: true
  },
  index: {
    type: Number
  },
  qustion1: {
    city: {
      type: Number,
      default: 0
    },
    outskirts: {
      type: Number,
      default: 0
    },
    water: {
      type: Number,
      default: 0
    },
    country: {
      type: Number,
      default: 0
    },
    product: {
      type: Number,
      default: 0
    },
  },
  question2: {
    type: Number,
    default: 0
  },
  question3: {
    type: Number,
    default: 0
  },
  question4: {
    type: Number,
    default: 0
  },
  question5: {
    type: Number,
    default: 0
  },
});
//生成方法getModel给予调用，返回picture模型
module.exports = {
  getModel: function () {
    return _getModel();
  }
};

//通过mongoose将表picture和Schema结构连接在一起，没有表的话会自动产生。
var _getModel = function (type, err) {
  const model = mongoose.model('picture', pictureSchema);
  return model;
};
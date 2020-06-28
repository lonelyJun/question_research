//建立模型模块（第一步）
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//schema 就是如何定义数据的结构
var pictureSchema = new mongoose.Schema({
  picUrl: {
    type: String
  },
  index: {
    type: Number
  },
  enable: {
    type: Boolean,
    default: true
  },
  Residential: {
    type: Number,
    default: 0
  },
  Office: {
    type: Number,
    default: 0
  },
  Commercial: {
    type: Number,
    default: 0
  },
  Suburban: {
    type: Number,
    default: 0
  },
  Waterfront: {
    type: Number,
    default: 0
  },
  Countryside: {
    type: Number,
    default: 0
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
  question6: {
    type: Number,
    default: 0
  },
  question7: {
    type: Number,
    default: 0
  },
  question8: {
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
var model = require('../model/picture').getModel();
const dbHelper = require('./dbHelp');

const addData = (data, callback) => {
  dbHelper.addData(model, data, result => {
    callback(result);
  });
}

const findAllData = (callback) => {
  dbHelper.findData(model, {}, {}, {}, result => {
    callback(result);
  })
}

const findOneByData = (id, callback) => {
  dbHelper.findData(model, {
    _id: id
  }, {}, {}, result => {
    callback(result);
  })
}

const removeAllData = (callback) => {
  dbHelper.removeData(model, {}, result => {
    callback(result);
  })
}

module.exports = {
  addData,
  findAllData,
  findOneByData,
  removeAllData
}
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

const findAllEnableData = (callback) => {
  dbHelper.findData(model, {
    enable: true
  }, {}, {}, result => {
    callback(result);
  })
}

const findDataByIndex = (index, callback) => {
  dbHelper.findData(model, {
    index: index
  }, {}, {}, result => {
    callback(result);
  })
}

// const updateQuestion1 = (index, radio, callback) => {
//   let picResult = ""
//   switch (parseInt(radio)) {
//     case 0:
//       picResult = "city"
//       break;
//     case 1:
//       picResult = "outskirts"
//       break;
//     case 2:
//       picResult = "water"
//       break;
//     case 3:
//       picResult = "country"
//       break;
//     default:
//       picResult = "product"
//   }
//   dbHelper.updateData(model, {
//       index: index
//     }, {
//       $inc: {
//         [picResult]: 1
//       }
//     }, {},
//     result => {
//       callback(result);
//     })
// }

const updateQuestion1 = (index, callback) => {
  dbHelper.updateData(model, {
      index: index
    }, {
      $inc: {
        question1: 1
      }
    }, {},
    result => {
      callback(result);
    })
}

const updateQuestion2 = (index, callback) => {
  dbHelper.updateData(model, {
      index: index
    }, {
      $inc: {
        question2: 1
      }
    }, {},
    result => {
      callback(result);
    })
}

const updateQuestion3 = (index, callback) => {
  dbHelper.updateData(model, {
      index: index
    }, {
      $inc: {
        question3: 1
      }
    }, {},
    result => {
      callback(result);
    })
}

const updateQuestion4 = (index, callback) => {
  dbHelper.updateData(model, {
      "index": index
    }, {
      $inc: {
        question4: 1
      }
    }, {},
    result => {
      callback(result);
    })
}

const updateQuestion5 = (index, callback) => {
  dbHelper.updateData(model, {
      index: index
    }, {
      $inc: {
        question5: 1
      }
    }, {},
    result => {
      callback(result);
    })
}


module.exports = {
  addData,
  findAllData,
  findOneByData,
  removeAllData,
  findAllEnableData,
  updateQuestion1,
  updateQuestion2,
  updateQuestion3,
  updateQuestion4,
  updateQuestion5,
  findDataByIndex
}
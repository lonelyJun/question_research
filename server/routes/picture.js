//测试成功后，讲相应方法加入到相应的路由上（第四步=>上一步在./test/bookTest.js中）
var express = require('express')
var router = express.Router()
const pictureDao = require('../dao/pictureDao')
var multer = require('multer');


let upload = multer({
  // storage: multer.diskStorage({
  //   destination: function (req, file, cb) {
  //     cb(null, './uploads/');
  //   },
  //   filename: function (req, file, cb) {
  //     var changedName = (new Date().getTime()) + '-' + file.originalname;
  //     cb(null, changedName);
  //   }
  // })
  dest: './image'
});



router.get('/', function (req, res, next) {
  pictureDao.findAllData(result => {
    res.json(result)
  })
})

router.post('/', function (req, res, next) {
  pictureDao.addData(req.body, result => {
    res.json(result)
  })
})

router.post('/upload', upload.array('multerFile'), function (req, res, next) {
  let fileList = [];
  console.log(req.files)
  req.files.map((elem) => {
    fileList.push({
      originalname: elem.originalname
    })
  });
})

module.exports = router
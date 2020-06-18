//测试成功后，讲相应方法加入到相应的路由上（第四步=>上一步在./test/bookTest.js中）
var express = require('express')
var router = express.Router()
const pictureDao = require('../dao/pictureDao')
let multer = require('multer');

let fs = require("fs");
let path = require("path");
const picture = require('../model/picture');

let picUrlRoot = './image/'

let upload = multer({
  dest: picUrlRoot
});

let uploadFunc = (req, res, next) => {
  if (!fs.existsSync(picUrlRoot)) {
    fs.mkdirSyns(picUrlRoot)
  }

  pictureDao.findAllEnableData(eD_res => {


    let files = req.files;

    if (files.length === 0) {

      res.json({

        code: 1,

        msg: "上传文件不能为空！",

        data: null

      });

      return

    } else {

      let fileInfos = [];

      files.forEach(item => {

        let fileInfo = {};

        let fileName = eD_res.data && eD_res.data.length ? eD_res.data.length : 0;
        let lastPointPos = item.originalname.lastIndexOf(".")
        let extendName = item.originalname.substring(lastPointPos);

        fs.renameSync(picUrlRoot + item.filename, picUrlRoot + fileName + extendName); //这里修改文件名。
        fileInfo.picUrl = '/image/' + fileName + extendName;
        fileInfo.index = fileName
        fileInfos.push(fileInfo);

      })
      pictureDao.addData(fileInfos, aD_res => {
        res.json(aD_res);
      })

    }
  });
}


let delFile = (path, reservePath) => {
  if (fs.existsSync(path)) {
    if (fs.statSync(path).isDirectory()) {
      let files = fs.readdirSync(path);
      files.forEach((file, index) => {
        let currentPath = path + "/" + file;
        if (fs.statSync(currentPath).isDirectory()) {
          delFile(currentPath, reservePath);
        } else {
          fs.unlinkSync(currentPath);
        }
      });
      if (path != reservePath) {
        fs.rmdirSync(path);
      }
    } else {
      fs.unlinkSync(path);
    }
  }
}



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

router.post('/upload', upload.array('file'), uploadFunc)

module.exports = router
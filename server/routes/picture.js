//测试成功后，讲相应方法加入到相应的路由上（第四步=>上一步在./test/bookTest.js中）
var express = require("express");
var router = express.Router();
const pictureDao = require("../dao/pictureDao");
let multer = require("multer");

let fs = require("fs");
let path = require("path");
const picture = require("../model/picture");

let picUrlRoot = "./image/image/";

let upload = multer({
  dest: picUrlRoot,
});

let uploadFunc = (req, res, next) => {
  // pictureDao.findAllEnableData((eD_res) => {
  let files = req.files;

  if (files.length === 0) {
    res.end({
      code: 1,

      msg: "上传文件不能为空！",

      data: null,
    });
    return;
  } else {
    let fileInfos = [];

    files.forEach((item) => {
      let fileInfo = {};

      // let fileName =
      // eD_res.data && eD_res.data.length ? eD_res.data.length : 0;
      let lastPointPos = item.originalname.lastIndexOf(".");
      let fileName = item.originalname.substring(0, lastPointPos);
      // let extendName = item.originalname.substring(lastPointPos);


      fs.renameSync(
        picUrlRoot + item.filename,
        picUrlRoot + item.originalname
      ); //这里修改文件名。
      fileInfo.picUrl = "/image/" + item.originalname;
      fileInfo.index = parseInt(fileName);
      if (isNaN(fileInfo.index)) {
        res.end({
          code: 1,

          msg: "文件名不是数字！",

          data: null,
        });
        return;
      }
      fileInfos.push(fileInfo);
    });
    pictureDao.addData(fileInfos, (aD_res) => {
      res.json(aD_res);
    });
  }
  // });
};

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
};

router.get("/", function (req, res, next) {
  pictureDao.findAllData((result) => {
    res.json(result);
  });
});

router.post("/", function (req, res, next) {
  pictureDao.addData(req.body, (result) => {
    res.json(result);
  });
});

router.post("/imageUrl", (req, res, next) => {
  pictureDao.findDataByIndex(req.body.index, (fd_res => {
    if (fd_res.code == 0) {
      fd_res.data = fd_res.data[0].picUrl;
      res.json(fd_res);
    } else {
      res.json(fd_res);
    }
  }))
});

router.post("/upload", (req, res, next) => {
  if (!fs.existsSync(picUrlRoot)) {
    fs.mkdirSync(picUrlRoot);
  }
  next();
});

router.post("/upload", upload.array("file"), uploadFunc);

router.post("/deleteAll", (req, res, next) => {
  pictureDao.removeAllData((rD_res) => {
    if (rD_res.code == 0) {
      delFile(picUrlRoot);
      res.json(rD_res)
    }
  });
});


router.get("/length", (req, res, next) => {
  pictureDao.findAllData((result) => {
    result.data = result.data.length ? result.data.length : -1
    res.json(result);
  });
})

router.get("/writeResult", (req, res, next) => {
  // pictureDao.updateQuestion1(req.query.pic1, req.query.radio1, q1_res => {
  pictureDao.updateQuestion1(req.query.question1, q1_res => {
    if (q1_res.code == 0) {
      pictureDao.updateQuestion2(req.query.question2, q2_res => {
        if (q2_res.code == 0) {
          pictureDao.updateQuestion3(req.query.question3, q3_res => {
            if (q3_res.code == 0) {
              pictureDao.updateQuestion4(req.query.question4, q4_res => {
                if (q4_res.code == 0) {
                  pictureDao.updateQuestion5(req.query.question5, q5_res => {
                    res.json(q5_res);
                  });
                } else {
                  res.json(q4_res)
                }
              });
            } else {
              res.json(q3_res)
            }
          });
        } else {
          res.json(q2_res)
        }
      })
    } else {
      res.json(q1_res)
    }
  })
})

module.exports = router;
//再根目录下执行mocha，会找到test文件夹下的Test结尾的js文件，进行测试
//使用测试数据，对数据库方法进行测试（第三步=>上一步在./dao/BookDao.js中）
const mongoose = require('mongoose')
// require('../model')
const dao = require('../dao/pictureDao')
const assert = require('assert')

const testName = 'pictureDom'
const mongodbUrl = 'mongodb://localhost:27017/database'

describe('测试' + testName, () => {
  before(() => {
    mongoose.connect(
      mongodbUrl, {
        useMongoClient: true
      },
      err => {
        if (!err) {}
      }
    )
  })
  after(() => {
    mongoose.disconnect()
  })
  it('添加一个图片数据', done => {
    let picture = {
      picUrl: '/image/1.png',
      index: 0
    }
    dao.addData(picture, result => {
      assert(result.code == 0)
      done()
    })
  })
  it('测试查询所有图片数据', done => {
    dao.findAllData(result => {
      assert(result.code == 0)
      done()
    })
  })
  it('删除所有图片', done => {
    dao.removeAllData(result => {
      assert(result.code == 0)
      done()
    })
  })
  // it('按照ID删除书本', done => {
  //   let id = bookList[0]._id
  //   BookDao.deleteBookById(id, err => {
  //     assert(err == null)
  //     done()
  //   })
  // })
})
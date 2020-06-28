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
  // it('添加一个图片数据', done => {
  //   let picture = {
  //     picUrl: '/image/1.png',
  //     index: 0
  //   }
  //   dao.addData(picture, result => {
  //     assert(result.code == 0)
  //     done()
  //   })
  // })
  // it('测试查询所有图片数据', done => {
  //   dao.findAllData(result => {
  //     assert(result.code == 0)
  //     done()
  //   })
  // })
  // it('删除所有图片', done => {
  //   dao.removeAllData(result => {
  //     assert(result.code == 0)
  //     done()
  //   })
  // })
  it('更新问题1', done => {
    let index = 0
    dao.updateQuestion1(index, 1, result => {
      assert(result.code == 0)
      done()
    })
  })
  // it('更新问题2', done => {
  //   let index = 0
  //   dao.updateQuestion2(index, result => {
  //     console.log(result, 2)

  //     assert(result.code == 0)
  //     done()
  //   })
  // })
  // it('更新问题3', done => {
  //   let index = 0
  //   dao.updateQuestion3(index, result => {
  //     console.log(result, 3)

  //     assert(result.code == 0)
  //     done()
  //   })
  // })
  // it('更新问题4', done => {
  //   let index = 0
  //   dao.updateQuestion4(index, result => {
  //     console.log(result, 4)

  //     assert(result.code == 0)
  //     done()
  //   })
  // })
  // it('更新问题5', done => {
  //   let index = 0
  //   dao.updateQuestion5(index, result => {
  //     console.log(result, 5)
  //     assert(result.code == 0)
  //     done()
  //   })
  // })
})
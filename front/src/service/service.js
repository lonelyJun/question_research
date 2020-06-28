import Vue from 'vue'

export const getAllPictureData = () => {
  return Vue.axios.get('/api/picture')
}

export const uploadFile = (data) => {
  return Vue.axios.post('/api/picture/upload', data, {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  })
}

export const sumbitResult = (param) => {
  // return Vue.axios.get("/api/picture/writeResult?pic1=" + param.pic1 + "&radio1=" + param.radio1 + "&question2=" + param.question2 + "&question3=" + param.question3 + "&question4=" + param.question4 + "&question5=" + param.question5)
  return Vue.axios.get("/api/picture/writeResult?question1=" +
    param.question1 + "&question2=" + param.question2 + "&question3=" + param.question3 + "&question4=" + param.question4 + "&question5=" + param.question5)
}

export const removeAll = () => {
  return Vue.axios.post("/api/picture/deleteAll")
}

export const getLength = () => {
  return Vue.axios.get('/api/picture/length')
}

export const getPicUrl = (param) => {
  return Vue.axios.post("/api/picture/imageUrl", param)

}
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
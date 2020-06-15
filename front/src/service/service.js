import Vue from 'vue'

export const getAllPictureData = () => {
  return Vue.axios.get('/api/picture')
}
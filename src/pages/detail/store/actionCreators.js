import axios from 'axios'
import * as actionTypes from './actionTypes'

const changeDetailData = (id, title, content) => {
  return {
    type: actionTypes.CHANGE_DETAIL_DATA,
    title: title,
    content: content,
    id: id,
  }
}

export const getDetailData = (id) => {
  return (dispatch) => {
    axios.get('http://0.0.0.0:3001/api/detail?id=' + id).then(res => {
      const data = res.data
      dispatch(changeDetailData(data.id, data.title, data.content))
    })
  }
}
import axios from 'axios'

const Request = (props) => {
  const { method, json = true, data, path, token } = props
  let headers = {}

  if (json) {
    headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token,
      ...headers
    }
  }
  const dataOrParams = ['GET', 'DELETE'].includes(method || 'GET')
    ? 'params'
    : 'data'
  const request = axios.create({
    withCredentials: false,
    headers: headers
  })

  return request({
    url: mergeUrlAndPath(path),
    method: method || 'GET',
    [dataOrParams]: data
  })
}

const mergeUrlAndPath = (path) => {
  return path
}

export default Request

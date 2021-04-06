import $http from './config'

export function get (api) {
  return (body = {}) => $http.get(
    api,
    {
      params: {
        ...body,
        _t: new Date().valueOf()
      }
    }
  )
}

export function post (api) {
  return (body = {}) => $http.post(api, body)
}

export function put (api) {
  return (body = {}) => $http.put(api, body)
}

export function del (api) {
  return (body = {}) => $http.delete(
    api,
    {
      params: {
        ...body,
        _t: new Date().valueOf()
      }
    }
  )
}

export function exportFile (url) {
  return (body = {}) => {
    return $http({
      url,
      method: 'post',
      data: body,
      responseType: 'blob'
    })
  }
}

export function uploadFil (url) {
  return (body = {}) => {
    return $http({
      url,
      method: 'post',
      data: body,
      headers: { 'Content-Type': 'multipart/form-data' }
    })
  }
}

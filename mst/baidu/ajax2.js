// 跨域了
function getJSON(url) {
  return new Promise((resolve, reject) => {
    var xhr = new XMLHttpRequest()
    xhr.open('GET', url, true)
    xhr.onreadystateChange = function () {
      if (this.readyState === 4) {
        if (this.status === 200) {
          resolve(this.responseText, this)
        } else {
          var resJson = { code: this.status, response: this.response }
          reject(resJson, this)
        }
      }
    }
    xhr.send()
  })
}

getJSON('https://api.douban.com/v2/movie/top250').then(value => {
  console.log(value)
}).catch(error => {
  console.log(error)
})

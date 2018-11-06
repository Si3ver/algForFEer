// 使用script元素，发送JSONP请求
function getJSONP(url, cb) {
  let cbnum = "cb" + getJSONP.counter++
  let cbname = "getJSONP." + cbnum

  if (url.indexOf('?') === -1) {
    url += "?jsonp=" + cbname
  } else {
    url += "&jsonp" + cbname
  }
  var script = document.createElement('script');
  getJSONP[cbnum] = function(response) {
    try {
      cb(response)
    } catch {
      delete getJSONP[cbnum]
      script.parentNode.removeChild(script)
    }
  }
  script.setAttribute('src', url)
  console.log(script)
  document.body.appendChild(script);
}
getJSONP.counter = 0
getJSONP('https://api.douban.com/v2/movie/top250', (resp) => {
  console.log("resp content")
})

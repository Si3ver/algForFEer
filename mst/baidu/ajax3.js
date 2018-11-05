var responseHandler; // 定义一个全局作用域的函数
function getJSONP(url, cb) {
  if (url.indexOf('?') === -1) {
    url += '?callback=responseHandler';
  } else {
    url += '&callback=responseHandler';
  }
  var script = document.createElement('script');
  responseHandler = function (json) {
    try {
      cb(json)
    } finally {
      script.parentNode.removeChild(script);
    }
  }
  script.setAttribute('src', url)
  document.body.appendChild(script);
}
getJSONP('https://api.douban.com/v2/movie/top250', (ev) => {console.log(ev)})

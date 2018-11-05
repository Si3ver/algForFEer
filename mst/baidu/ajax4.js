var responseHandler = (json) => {
  console.log(json)
};
function getJSONP(url) {
  return new Promise((resolve, reject) => {
    if (url.indexOf('?') === -1) {
      url += '?callback=responseHandler';
    } else {
      url += '&callback=responseHandler';
    }
    var script = document.createElement('script');
    script.setAttribute('src', url)
    document.body.appendChild(script);
  })
}
getJSONP('https://api.douban.com/v2/movie/top250')
  .then(
    (ev) => { console.log(ev) }
  ).catch(
    (error) => { console.log(error) }
  )

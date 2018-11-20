const getJSON = function(url) {
  return new Promise(function(resolve, reject){
    var client = new XMLHttpRequest();
    client.open("GET", url);
    client.onreadystatechange = function() {
      if (this.readyState !== 4)  return;
      if (this.status === 200) {
        resolve(this.response);
      } else {
        reject(new Error(this.statusText));
      }
    }
    client.responseType = "json";
    client.setRequestHeader("Accept", "application/json");
    client.send();
  });
}

getJSON("/posts.json").then(function (json) {
  console.log('Contents: ' + json);
}, function (error) {
  console.error('出错了', error);
});

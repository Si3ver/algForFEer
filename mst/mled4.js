function timeout(ms){
  return new Promise(function(resolve, reject){
    setTimeout(resolve, ms);
  })
}

timeout(3000).then(function(){
  console.log("hello")
});

const p1 = new Promise(function (resolve, reject) {
    console.log("ppp1")
    setTimeout(() => reject(new Error('fail')), 3000)
})
const p2 = new Promise(function (resolve, reject) {
    console.log("ppp2")
    setTimeout(() => resolve(p1), 5000)
})
p2.then(result => console.log(result))
  .catch(error => console.log(error))

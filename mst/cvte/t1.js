/// 这个不会~
function job1(cb) {
    setTimeout(function () {
        console.log(1);
        cb();
    }, 400)
}
function job2(cb) {
    setTimeout(function () {
        console.log(2);
        cb();
    }, 300)
}
function job3(cb) {
    setTimeout(function () {
        console.log(3);
        cb();
    }, 100)
}
  
/**
 * 实现一个线程池
 * 
 * @param {array} list 任务列表
 * @param {number} count 线程池中线程的数量
 */
function queue(list, count) {
}

// 输出 1, 2, 3
queue([job1, job2, job3], 1)
// 输出 2, 1, 3
queue([job1, job2, job3], 2)

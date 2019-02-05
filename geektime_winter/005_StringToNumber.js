// 不用原生的Number和parseInt实现StringToNumber

let StringToNumber = (str)=>{
    let arr = str.trim().split('')
    let sign = arr[0] === '-' ? -1 : 1
    if (sign === -1 || str[0] === '+') {
        arr.shift()
    }
    return sign * arr.reduce((total, cur)=>(
        total * 10 + (cur >= '0' && cur <= '9' ? (cur - '0') : NaN)
    ))
}

let res = []
res.push(StringToNumber('   123456   '))
res.push(StringToNumber('   -9237  '))
res.push(StringToNumber('  7   545    '))
res.push(StringToNumber('       34 234  '))
res.push(StringToNumber('  12@3  '))
res.push(StringToNumber('   234*235      '))
console.log(res)        // [ 123456, -9237, NaN, NaN, NaN, NaN ]

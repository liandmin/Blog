var array = [1, 2, true, '1', '2', 1, 2]
var array2 = [1, 2, 1, 2, '1']

//  1. 两个for循环
function unique1 (array) {
  let res = []
  for (let i = 0; i < array.length; i++) {
    for (var j = 0; j < res.length; j++) {
      if (array[i] === res[j]) {
        break;
      }
    }
    // 如果array[i]是唯一的，那么执行完循环， res要push
    if (j === res.length) {
      res.push(array[i])
    }
  }
  return res
}

// console.log(unique1(array))

function unique2 (array) {
  let res = []
  for (let i = 0; i < array.length; i++) {
    let temp = array[i]
    if (array.indexOf(temp) === i) {
      res.push(temp)
    }
  }
  return res
}

// console.log(unique2(array))

function unique3 (array2) {  
  let res = []
  let sortArr = array.sort()
  let temp
  for (let i = 0; i < sortArr.length; i++) {
    if (!i || temp !== sortArr[i]) {
      res.push(sortArr[i])
    }
    temp = sortArr[i]
  }
  return res
}

// console.log(unique3(array2))

function unique4 (array) {  
  let res = array.filter((value, key, array) => {
    return array.indexOf(value) === key
  })
  return res;
}

// console.log(unique4(array))

function unique5(array) {
  var obj = {};
  return array.filter(function(item, index, array){
    return obj.hasOwnProperty(typeof item + JSON.stringify(item)) ? false : (obj[typeof item + JSON.stringify(item)] = true)
  })
}

// console.log(unique5(array2)); // [1, 2, "1"]

function unique6 (array) {  
  return [...new Set(array)]
}

console.log(unique6(array));









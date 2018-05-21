###1. 使用`!!`将变量转成布尔类型

除了`false`，`0`，`undefined`，`null`，`''`，`NaN`返回`false`，其他的都返回`true`

### 2. 使用`+`将变量转换为数字

**注意**这个规则只适用于数字字符串，其他的会返回`NaN`，`+new Date()`会返回时间戳

```
console.log( + '123')  //123
console.log( + '0Abc')  //NaN
console.log( + new Date())  //时间戳
```

### 3. 短路条件`&&`

> a && b 表示如果`a`为真，则执行`b`；可以用这种方法检查对象是否存在某些属性或者函数

```
let user = {
	name: 'lx'
}

console.log(user && user.name)
```

### 4. 使用`||`设置默认值

> `ES6`的默认参数可能使用`||`实现的。a = x || 1 表示如果x为false，则a为1

### 5. 检查对象中是否存在某个属性：`in`
 
```
if ('name' in window) {
	console.log('name is exist')
} else {
	console.log('no')
}
```

### 6. 把`NodeList`转换成数组

1. 通过`[].slice.call(element)`
2. 通过`ES6`新增的`Array.from()`方法
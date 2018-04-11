### bind的介绍及特点

MDN对于 [bind](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) 的介绍

> bind()方法创建一个新的函数,当被调用时，将其this关键字设置为提供的值，在调用新函数时，在任何提供之前提供一个给定的参数序列。

bind函数有如下特点：
1. 返回一个函数（改变 this 指向）
2. 可以传入参数（间断传递）
3. 返回的函数可当做作构造函数（参数指定的this值无效，this指向实例）

### 模拟实现特点1和2

```
Function.prototype.copyBind = function (context) {
    // 如果调用bind方法的不是函数，则报错
    if (typeof this !== 'function') {
        throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
    }
    
    // 获取传入的this值和剩余实参
    let self = this;
    let args = Array.prototype.slice.call(arguments, 1);
    
    // 返回一个函数，函数可以再次传入参数
    return function () {
        // 获取调用函数传入的参数
        let bindArgs = Array.prototype.slice.call(arguments);
        
        // 此时this指向了调用函数，然后用apply方法改变调用函数内部this指向
        // 同时传入之前的所有参数
        // 这里用return是因为，调用函数可能有返回值
        return self.apply(context, args.concat(bindArgs));
    }
}
```

实际效果 [点这里](http://jsbin.com/dupenuv/edit?js,console)

### 完善实现特点3

```
Function.prototype.copyBind = function (context) {
    // 如果调用bind方法的不是函数，则报错
    if (typeof this !== 'function') {
        throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
    }
    
    // 获取传入的this值和剩余实参
    let self = this;
    let args = Array.prototype.slice.call(arguments, 1);
    
    let fNOP = function () {}
    
    // 给函数命名并返回，用来判断当前调用函数是否被用作构造函数
    let fBound = function () {
        // 获取调用函数传入的参数
        let bindArgs = Array.prototype.slice.call(arguments);
        
        // 此时this指向了调用函数，然后用apply方法改变调用函数内部this指向
        // 同时传入之前的所有参数
        // 这里用return是因为，调用函数可能有返回值
        // 如果调用函数被用作构造函数，则this指向实例，也就是三目运算符的使用原因
        return self.apply(this instanceof fBound ? this : context, args.concat(bindArgs));
    }
    
    // 判断调用函数是否有原型对象,有就自动赋给实例
    if (this.prototype) {
        fNOP.prototype = this.prototype
    }

    fBound.prototype = new fNOP();
    
    return fBound;
}
```

实际效果 [看这里](http://jsbin.com/zajejuh/edit?js,console)

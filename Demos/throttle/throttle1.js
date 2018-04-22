function throttle (callback, await) {  
  let previous = 0;
  let timeout;

  return function () {  
    let context = this;
    let args = arguments;
    let now = + new Date();

    if (now - previous > await) {
      callback.apply(context, args);
      previous = now;
    }
  }
}

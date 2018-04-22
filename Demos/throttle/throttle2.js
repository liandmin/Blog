function throttle (callback, await) {  
  let previous = 0;
  let timeout;

  return function () {  
    let context = this;
    let args = arguments;

    if (!timeout) {
      timeout = setTimeout(function () {  
        timeout = null;
        callback.apply(context, args);
      },await)
    }
  }
}


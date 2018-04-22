function debounce (callback, await, immediate) {
  let timeout;
  return function () {
    let context = this;
    let args =arguments;

    if (timeout) {
      clearTimeout(timeout);
    }
    if (immediate) {
      let temp = !timeout;
      timeout = setTimeout(function () {
        timeout = null;
      }, await)
      if (temp) {
        callback.apply(context, args);
      }
    } else {
      timeout = setTimeout(function () {
        callback.apply(context, args);
      }, await)
    }
  }
}





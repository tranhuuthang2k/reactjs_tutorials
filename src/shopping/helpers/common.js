function isEmptyObject(obj) {
  for (let prop in obj) {
    //hasOwnProperty kiểm tra object có tồn tại key k
    if (obj.hasOwnProperty(prop)) {
      return false;
    }
  }

  return JSON.stringify(obj) === JSON.stringify({});
}

export const helpers = {
  isEmptyObject,
};

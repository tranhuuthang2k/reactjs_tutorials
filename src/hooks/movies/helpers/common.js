function isEmptyObject(obj) {
  for(let prop in obj) {
    //hasOwnProperty: kiem tra trong object co ton key ko ???
    if(obj.hasOwnProperty(prop)) {
      return false;
    }
  }

  return JSON.stringify(obj) === JSON.stringify({});
  // return true : object rong
}


export const helper = {
  isEmptyObject,
}
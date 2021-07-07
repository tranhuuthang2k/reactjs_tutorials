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

function sortDataByGroupFootball(a,b) {
  // a, b la cac item lien ke nam trong mang
  if(a.group_id < b.group_id){
    return -1; // giam dan
  } else if(a.group_id > b.group_id) {
    return 1; // tang dan
  }
  return 0;
}

export const helper = {
  isEmptyObject,
  sortDataByGroupFootball
}
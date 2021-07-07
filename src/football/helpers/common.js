function isEmptyObject(obj) {
  for (let prop in obj) {
    //hasOwnProperty kiểm tra object có tồn tại key k
    if (obj.hasOwnProperty(prop)) {
      return false;
    }
  }

  return JSON.stringify(obj) === JSON.stringify({});
}
function sortDataByGroupFootball(a, b) {
  if (a.group_id < b.group_id) {
    return -1; // giảm
  } else if (a.group_id > b.group_id) {
    return 1; //tang dan
  }
  return 0;
}
export const helper = {
  isEmptyObject,
  sortDataByGroupFootball,
};

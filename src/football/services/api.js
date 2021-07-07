import axios from "axios";
import { helper } from "../helpers/common";
const getDataFootball = async () => {
  const url = "https://gw.vnexpress.net/football/standing?league_id=403";
  const res = await axios.get(url);
  const result = res.status === 200 ? res.data : {};
  // console.log(result);

  if (!helper.isEmptyObject(result)) {
    let resuftArray = result["data"]["403"]["data"];
    // console.log(resuftArray);
    resuftArray.sort(helper.sortDataByGroupFootball);
    return resuftArray;
  }
  return {};
};
export const api = {
  getDataFootball,
};

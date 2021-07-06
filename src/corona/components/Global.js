import React from "react";
import { helper } from "../helpers/common";

const GolbalCorona = ({ error, data }) => {
  if (helper.isEmptyObject(data)) {
    // co loi
    return <h1 style={{ color: "red" }}> {error.mess} </h1>;
  }
  return (
    <section className="global__corona">
      <div className="global__item">
        <p>-Mới Nhiễm: {data.Global.NewConfirmed}</p>
        <p>-Tổng ca nhiễm: {data.Global.TotalConfirmed}</p>
      </div>
      <div className="global__item">
        <p>-Mới tử vong :{data.Global.NewDeaths}</p>
        <p>-Tổng ca tử vong :{data.Global.TotalDeaths}</p>
      </div>
      <div className="global__item">
        <p>-Mới khỏi bệnh :{data.Global.NewRecovered}</p>
        <p>-Tổng ca khỏi bệnh :{data.Global.TotalRecovered}</p>
        <p>-Ngày :{data.Global.Date}</p>
      </div>
    </section>
  );
};
export default React.memo(GolbalCorona);

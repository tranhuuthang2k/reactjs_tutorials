import React from "react";
import { Row, Card, Col, Skeleton } from "antd";
import CoronaContext from "../context";
import { helper } from "../helpers/common";
import NumberFormat from "react-number-format";

const GlobalVirus = () => {
  const { loading, virus } = React.useContext(CoronaContext);
  if (loading || helper.isEmptyObject(virus)) {
    return <Skeleton active />;
  }
  return (
    <Row>
      <Col span={8}>
        <Card title="Nhiễm Bệnh">
          <p>
            Ca Nhiễm : {""}
            <NumberFormat
              value={virus.Global.NewConfirmed}
              displayType={"text"}
              thousandSeparator={true}
            />
          </p>
          <p>
            Tổng Ca Nhiễm : {""}
            <NumberFormat
              value={virus.Global.TotalConfirmed}
              displayType={"text"}
              thousandSeparator={true}
            />
          </p>
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Tử Vong">
          <p>
            Số ca tử vong :{""}
            <NumberFormat
              value={virus.Global.NewDeaths}
              displayType={"text"}
              thousandSeparator={true}
            />
          </p>
          <p>
            Tổng số ca tử vong :{""}
            <NumberFormat
              value={virus.Global.TotalDeaths}
              displayType={"text"}
              thousandSeparator={true}
            />
          </p>
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Khỏi Bệnh">
          <p>
            Số ca khỏi bệnh :{""}
            <NumberFormat
              value={virus.Global.NewRecovered}
              displayType={"text"}
              thousandSeparator={true}
            />
          </p>
          <p>
            Tổng số ca khỏi bệnh :{""}
            <NumberFormat
              value={virus.Global.TotalRecovered}
              displayType={"text"}
              thousandSeparator={true}
            />
          </p>
        </Card>
      </Col>
    </Row>
  );
};
export default React.memo(GlobalVirus);

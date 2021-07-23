import React from "react";
import { getStateDataFootball, getStateLoading } from "../reselect/football";
import { useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Row, Col, Skeleton, Image } from "antd";
import { helper } from "../helpers/common";
import { Link } from "react-router-dom";
import "./football.css";
const ResultFootball = () => {
  const { dataFootball, loading } = useSelector(
    createStructuredSelector({
      dataFootball: getStateDataFootball,
      loading: getStateLoading,
    })
  );

  if (loading || helper.isEmptyObject(dataFootball)) {
    return <Skeleton active />;
  }

  return (
    <Row>
      <Col span={20} offset={2}>
        <h1> Ket qua Euro 2020 </h1>
        {dataFootball.map((item, index) => (
          <Link
            to={`/tran-dau/${item.home_team.team_name}-vs-${item.away_team.team_name}/${item.fixture_id}`}
          >
            <Row
              key={index}
              style={{
                border: "1px solid #ccc",
                marginBottom: "20px",
                padding: "20px",
              }}
            >
              <Col span={24}>
                <p>{item.round}</p>
              </Col>

              <Col span={10}>
                {item.home_team.team_name}
                <Image width={50} src={item.home_team.logo} />
              </Col>
              <Col span={4}>{item.score.fulltime}</Col>
              <Col span={10}>
                {item.away_team.team_name}
                <Image width={50} src={item.away_team.logo} />
              </Col>
            </Row>
          </Link>
        ))}
      </Col>
    </Row>
  );
};
export default React.memo(ResultFootball);

import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Col, Row, Skeleton } from "antd";
import { getDataProductFeautured } from "../../reselect/reselect";
import { getDataProductTopSelling } from "../../reselect/reselect";
import { getDataProductLatest } from "../../reselect/reselect";
import CardProduct from "../home/components/Card";
import { useParams } from "react-router";
import { helpers } from "../../helpers/common";
import { Pagination } from "antd";
import * as actions from "../../actions";
import LayoutShopping from "../../components/Layout";
import "../../styles/product.css";

const Category = () => {
  const { slug } = useParams();
  const [minValue, setMinvalue] = React.useState(0);
  const [maxValue, setMaxvalue] = React.useState(8);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(actions.getDataProducts());
  }, [dispatch]);
  const { featured } = useSelector(
    createStructuredSelector({
      featured: getDataProductFeautured,
    })
  );
  const { TopSelling } = useSelector(
    createStructuredSelector({
      TopSelling: getDataProductTopSelling,
    })
  );
  const { latest } = useSelector(
    createStructuredSelector({
      latest: getDataProductLatest,
    })
  );
  const handleChange = (value) => {
    if (value <= 1) {
      setMinvalue(0);
      setMaxvalue(8);
    } else {
      setMinvalue(maxValue);
      setMaxvalue(value * 8);
    }
  };
  if (helpers.isEmptyObject(featured)) {
    return <Skeleton active />;
  }
  return (
    <LayoutShopping>
      <Row style={{ margin: "30px 0px" }}>
        <Col span={24}>
          <h3 style={{ textAlign: "center", fontSize: 25 }}> {slug}</h3>
          {slug === "husky" && (
            <Row>
              {featured.slice(minValue, maxValue).map((item, key) => (
                <Col sm={12} md={6} xs={12} key={key}>
                  <CardProduct data={item} />
                </Col>
              ))}
            </Row>
          )}
          {slug === "corgi" && (
            <Row>
              {TopSelling.slice(minValue, maxValue).map((item, key) => (
                <Col sm={12} md={6} xs={12} key={key}>
                  <CardProduct data={item} />
                </Col>
              ))}
            </Row>
          )}
          {slug === "samoyed" && (
            <Row>
              {latest.slice(minValue, maxValue).map((item, key) => (
                <Col sm={12} md={6} xs={12} key={key}>
                  <CardProduct data={item} />
                </Col>
              ))}
            </Row>
          )}
        </Col>
      </Row>
      <Col
        span={12}
        offset={6}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Pagination
          defaultCurrent={1}
          defaultPageSize={8} //default size of page
          onChange={handleChange}
          total={9} //total number of card data available
        />
      </Col>
    </LayoutShopping>
  );
};
export default Category;

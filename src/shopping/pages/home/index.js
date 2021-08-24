import React from "react";
import { Row, Col, Skeleton } from "antd";
import { useDispatch } from "react-redux";
import * as actions from "../../actions";
import Featured from "./components/Featured";
import TopSelling from "./components/TopSelling";
import Latest from "./components/Latest";
import { getLoadingProduct } from "../../reselect/reselect";
import { getDataProducts } from "../../reselect/reselect";
import LayoutShopping from "../../components/Layout";
import { createStructuredSelector } from "reselect";
import { useSelector } from "react-redux";
import { helpers } from "../../helpers/common";
import HeaderImage from "./components/HeaderImage";
import "./style.css";
const HomeShopping = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(actions.getDataProducts());
  }, [dispatch]);

  const { loading, dataProduct } = useSelector(
    createStructuredSelector({
      loading: getLoadingProduct,
      dataProduct: getDataProducts,
    })
  );
  if (loading) {
    return <Skeleton />;
  }
  if (helpers.isEmptyObject(dataProduct)) {
    return (
      <LayoutShopping>
        <h1>Dữ liệu không tồn tại</h1>
      </LayoutShopping>
    );
  }
  return (
    <LayoutShopping sub_1="Home" sub_2="List" sub_3="App">
      {/* <div style={{ marginTop: 100 }}>
      
      </div> */}
      <Row>
        <Col span={24}>
          <HeaderImage />
          <Featured />
          <TopSelling />
          <Latest />
        </Col>
      </Row>
    </LayoutShopping>
  );
};
export default React.memo(HomeShopping);

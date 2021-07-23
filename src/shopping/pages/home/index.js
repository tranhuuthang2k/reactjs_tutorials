import React from "react";
import { Row, Col, Skeleton } from "antd";
import { useDispatch } from "react-redux";
import * as actions from "../../actions";
import Featured from "./components/Featured";
import TopSelling from "./components/TopSelling";
import Latest from "./components/Latest";

import LayoutShopping from "../../components/Layout";
import { getLoadingProduct } from "../../reselect/reselect";
import { createStructuredSelector } from "reselect";
import { useSelector } from "react-redux";
import { helpers } from "../../helpers/common";
// import { api } from "../../services/api";
// console.log(api.dataProducts);

const HomeShopping = () => {
  const { loading } = useSelector(
    createStructuredSelector({
      loading: getLoadingProduct,
    })
  );

  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(actions.getDataProducts());
  }, [dispatch]);

  return (
    <LayoutShopping sub_1="Home" sub_2="List" sub_3="App">
      <Row>
        <Col span="24">
          <Featured />
          <TopSelling />
          <Latest />
        </Col>
      </Row>
    </LayoutShopping>
  );
};
export default React.memo(HomeShopping);

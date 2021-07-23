import React from "react";
import { Row, Col, Image, Skeleton } from "antd";
import LayoutShopping from "../../components/Layout";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import * as actions from "../../actions";
import { useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import { getDataProductDetail } from "../../reselect/reselect";
import { getLoadingProductById } from "../../reselect/reselect";
import { helpers } from "../../helpers/common";
const DetailShopping = () => {
  const { slug, id } = useParams();
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(actions.getDataProductById(id));
  }, [dispatch, id]);

  const { dataDetail, loading } = useSelector(
    createStructuredSelector({
      dataDetail: getDataProductDetail,
      loading: getLoadingProductById,
    })
  );
  if (helpers.isEmptyObject(dataDetail)) {
    return <Skeleton />;
  }

  return (
    <LayoutShopping sub_1="Detail" sub_2="Product" sub_3={slug}>
      {!loading ? (
        <Row>
          <Col offset={5}>
            <Image
              style={{ marginLeft: 30, alignItems: "center" }}
              width={250}
              src={dataDetail ? dataDetail.image : ""}
            />
          </Col>
          <Col offset={3}>
            <h3 style={{ color: "black", fontWeight: "bold" }}>
              {dataDetail ? dataDetail.name : null}
            </h3>
            <p> {dataDetail ? dataDetail.price : null}</p>
          </Col>
        </Row>
      ) : (
        <Skeleton />
      )}
    </LayoutShopping>
  );
};
export default React.memo(DetailShopping);

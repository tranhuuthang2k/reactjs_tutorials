import React from "react";
import { Row, Col, Image, Skeleton, Button, notification } from "antd";
import LayoutShopping from "../../components/Layout";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import * as actions from "../../actions";
import { useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import { getDataProductDetail } from "../../reselect/reselect";
import { getLoadingProductById } from "../../reselect/reselect";
import { incrementCartAction } from "../../actions/";
import { helpers } from "../../helpers/common";
import NumberFormat from "react-number-format";
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
  const openNotificationAddTocart = (type) => {
    notification[type]({
      message: "Thêm vào giỏ hàng thành công",
      description: "Bạn vào giỏ hàng để kiểm tra.",
    });
  };
  if (!dataDetail?.hasOwnProperty("id")) {
    return <LayoutShopping>Không có dữ liệu</LayoutShopping>;
  }
  return (
    <LayoutShopping sub_1="Detail" sub_2="Product" sub_3={slug}>
      {!loading ? (
        <Row>
          <Col span={24}>
            <Row>
              <Col sm={8} md={6} xs={12}>
                <Image src={dataDetail ? dataDetail.image : ""} />
              </Col>
              <Col offset={1} sm={12} md={8}>
                <h3 style={{ color: "black", fontWeight: "bold" }}>
                  {dataDetail ? dataDetail.name : null}
                </h3>

                <p>
                  <NumberFormat
                    value={dataDetail?.price}
                    displayType={"text"}
                    style={{ color: "black" }}
                    thousandSeparator={true}
                    suffix=" ₫"
                  />
                </p>

                <Button
                  type="primary"
                  ghost
                  onClick={() => {
                    dispatch(incrementCartAction(1, dataDetail));
                    openNotificationAddTocart("success");
                  }}
                >
                  Add To Cart
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      ) : (
        <Skeleton />
      )}
    </LayoutShopping>
  );
};
export default React.memo(DetailShopping);

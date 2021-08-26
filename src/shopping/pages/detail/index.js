import React, { useEffect } from 'react';
import { Row, Col, Image, Skeleton, Button, notification } from 'antd';
import LayoutShopping from '../../components/Layout';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import * as actions from '../../actions';
import { useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getDataProductDetail } from '../../reselect/reselect';
import { getLoadingProductById } from '../../reselect/reselect';
import { incrementCartAction } from '../../actions/';
import { helpers } from '../../helpers/common';
import NumberFormat from 'react-number-format';
import Featured from '../home/components/Featured';
import TopSelling from '../home/components/TopSelling';
import Lastest from '../home/components/Featured';

import '../home/style.css';

const DetailShopping = () => {
  const { slug, id } = useParams();
  const [image, setImage] = React.useState(null);
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    setImage(null);
  }, [id]);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(actions.getDataProductById(id));
  }, [dispatch, id]);

  const { dataDetail, loading } = useSelector(
    createStructuredSelector({
      dataDetail: getDataProductDetail,
      loading: getLoadingProductById
    })
  );
  // console.log(dataDetail.imageList);
  if (helpers.isEmptyObject(dataDetail)) {
    return <Skeleton />;
  }
  const openNotificationAddTocart = type => {
    notification[type]({
      message: 'Thêm vào giỏ hàng thành công',
      description: 'Bạn vào giỏ hàng để kiểm tra.'
    });
  };
  if (!dataDetail?.hasOwnProperty('id')) {
    return <LayoutShopping>Không có dữ liệu</LayoutShopping>;
  }
  return (
    <LayoutShopping sub_1="Detail" sub_2="Product" sub_3={slug}>
      {!loading ? (
        <Row>
          <Col style={{ marginTop: '30px' }} span={12} offset={6}>
            <Row>
              <Col style={{ width: 300 }} md={12} xs={24}>
                <Image
                  style={{ borderRadius: '5%' }}
                  src={image ? image : dataDetail.image}
                />
                <Row
                  style={{
                    marginTop: 20
                  }}
                >
                  {dataDetail.imageList?.length > 0 &&
                    dataDetail.imageList.map((item, key) => (
                      <Row sm={12} md={6} key={key}>
                        <button
                          onClick={() => {
                            setImage(item);
                          }}
                        >
                          <img src={item} alt="" style={{ width: 50 }} />
                        </button>
                      </Row>
                    ))}
                </Row>
              </Col>

              <Col md={12} xs={24} lg={12}>
                <h3 style={{ color: 'black', fontWeight: 'bold' }}>
                  {dataDetail ? dataDetail.name : null}
                </h3>

                <span className="price">
                  <small>
                    <NumberFormat
                      value={dataDetail?.price}
                      displayType={'text'}
                      style={{ color: 'black' }}
                      thousandSeparator={true}
                      suffix=" ₫"
                    />
                  </small>
                </span>

                <ul className="item-owner">
                  <li>
                    Designer :<span> MrKatsu</span>
                  </li>
                  <li>
                    Brand:<span> Thú Cưng</span>
                  </li>
                </ul>
                <p>
                  Shop pet Đà Nẵng là nơi cung cấp các loại thú cưng và phụ kiện
                  dành cho thú cưng. Khách hàng có thể tha hồ chọn cho thú cưng
                  của mình những phụ kiện đáng yêu, những bộ áo quần xinh đẹp
                  Chỗ này như một siêu thị mini mà bất kì bạn nào có sở thích
                  nuôi thú cưng cũng nên ghé qua. Địa chỉ : Trường Chinh, quận
                  Thanh Khê, Phường Hòa An, TP Đà Nẵng
                </p>

                <Button
                  type="primary"
                  style={{ width: '100%' }}
                  default
                  onClick={() => {
                    dispatch(incrementCartAction(1, dataDetail));
                    openNotificationAddTocart('success');
                  }}
                >
                  Add To Cart
                </Button>
              </Col>

              <Row>
                {dataDetail.imageList?.length > 0 &&
                  dataDetail.imageList.map((item, key) => (
                    <Row sm={12} md={6} key={key}>
                      <button
                        onClick={() => {
                          setImage(item);
                        }}
                      >
                        <img src={item} alt="" style={{ width: 50 }} />
                      </button>
                    </Row>
                  ))}
              </Row>
            </Row>
          </Col>
        </Row>
      ) : (
        <Skeleton />
      )}
      {dataDetail.cate_id === 'corgi' && <TopSelling />}
      {dataDetail.cate_id === 'husky' && <Featured />}
      {dataDetail.cate_id === 'samoyed' && <Lastest />}
    </LayoutShopping>
  );
};
export default React.memo(DetailShopping);

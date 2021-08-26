import React from "react";
import { createStructuredSelector } from "reselect";
import { CheckoutProduct, LoadingCheckout } from "../../reselect/reselect";
import { useSelector } from "react-redux";
import { Table, Skeleton } from "antd";
import LayoutShopping from "../../components/Layout";
const Order = () => {
  const columns = [
    {
      title: "First Name",
      dataIndex: "Firstname",
      key: "Firstname",
      // render: text => <h5 style={{ fontWeight: 'bold' }}>{text}</h5>
    },
    {
      title: "Last Name",
      dataIndex: "lastname",
      key: "lastname",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Company Name",
      dataIndex: "companyname",
      key: "companyname",
    },
    {
      title: "Country",
      dataIndex: "country",
      key: "country",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },

    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Town city",
      dataIndex: "towncity",
      key: "towncity",
    },
    {
      title: "Cart",
      dataIndex: "cart",
      key: "cart",
      render: (tags) =>
        tags.map((item, index) => {
          return <h3 key={index}>{item.shoppingCart.name}</h3>;
        }),
    },
    {
      title: "Total price",
      dataIndex: "totalprice",
      key: "totalprice",
    },
    {
      title: "Date order",
      dataIndex: "date",
      key: "date",
    },
  ];

  const { Checkout, loading } = useSelector(
    createStructuredSelector({
      Checkout: CheckoutProduct,
      loading: LoadingCheckout,
    })
  );
  if (loading) {
    <Skeleton />;
  }
  if (Checkout.length === 0) {
    return (
      <LayoutShopping>
        <h5 style={{ textAlign: "center", marginTop: 30 }}>
          Bạn chưa có đơn đặt hàng
        </h5>
      </LayoutShopping>
    );
  }
  return (
    <LayoutShopping>
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontWeight: "bold", fontSize: 20 }}>Order</h1>
      </div>
      <Table
        columns={columns}
        dataSource={Checkout}
        rowKey="ID"
        hideSelectAll={true}
      />
    </LayoutShopping>
  );
};

export default Order;

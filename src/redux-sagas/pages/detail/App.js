import React from "react";
import LayoutFootball from "../../components/layout";
import BreadcrumbFootball from "../../components/Breadcrumb";

const DetailFootball = () => {
  return (
    <LayoutFootball>
      <BreadcrumbFootball
        item_lv1="Trang chu"
        item_lv2="Tran dau"
        item_lv3="Chi tiet"
      />
      <div className="site-layout-content">
        <p> cho tiet ket qua tran dau</p>
      </div>
    </LayoutFootball>
  );
};
export default React.memo(DetailFootball);

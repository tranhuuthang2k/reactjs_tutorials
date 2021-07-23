import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import ResultFootball from "../../components/Results";
import { requestGetDataToServer } from "../../actions";
import LayoutFootball from "../../components/layout";
import BreadcrumbFootball from "../../components/Breadcrumb";

const AppFootball = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestGetDataToServer());
  }, [dispatch]);

  return (
    <LayoutFootball>
      <BreadcrumbFootball
        item_lv1="Trang chu"
        item_lv2="Bong da"
        item_lv3="Ket qua"
      />
      <div className="site-layout-content">
        <ResultFootball />
      </div>
      {/* <p>aaa</p> */}
    </LayoutFootball>
  );
};
export default React.memo(AppFootball);

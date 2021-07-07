import React from "react";
import PropTypes from "prop-types";

const LayoutCorona = (props) => {
  return <div className="wrapper">{props.children}</div>;
};
LayoutCorona.propTypes = {
  children: PropTypes.node.isRequired,
};
export default React.memo(LayoutCorona);

import React from "react";
const ThemesContext = React.createContext({
  dark: false, // màu trắng
  toggle: () => {},
});
export default React.memo(ThemesContext);

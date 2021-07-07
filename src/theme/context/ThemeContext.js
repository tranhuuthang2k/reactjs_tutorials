import React from 'react';

// truyen gia tri mac dinh
const ThemeContext = React.createContext({
  dark: false,
  toggle: () => {}
});
export default ThemeContext;
import React from "react";
import { IoMdMoon as Moon, IoMdSunny as Sun } from "react-icons/io";
const SwitchTheme = () => {
  return (
    <button>
      <Sun />
      <Moon />
    </button>
  );
};
export default React.memo(SwitchTheme);

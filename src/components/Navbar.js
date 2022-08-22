import { menuItems } from "../menuItems";
import MenuItems from "./MenuItems";
import { useState } from "react";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState("HIDDEN");

  const handleClick = () => {
    console.log("click!");
    mobileMenu === "HIDDEN" ? setMobileMenu("SHOW") : setMobileMenu("HIDDEN");
  };
  return (
    <nav>
      <ul className={"menus " + (mobileMenu === "SHOW" && "showMenus")}>
        {menuItems.map((menu, index) => {
          const depthLevel = 0;
          return (
            <MenuItems
              items={menu}
              key={index}
              depthLevel={depthLevel}
              handleClick={handleClick}
            />
          );
        })}
      </ul>
      <button onClick={handleClick} className='hamburger'>
        Hamburger
      </button>
    </nav>
  );
};

export default Navbar;

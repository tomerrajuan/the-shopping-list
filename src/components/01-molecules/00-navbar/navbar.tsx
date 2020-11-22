import React from "react";
import MenuButton from "../../00-atoms/00-menu-button/menu-button";
// import AddButton from "../../00-atoms/01-add-button/add-button";

export default function Navbar() {
  return (
    <nav className="navbar">
      <MenuButton />
      {/* <AddButton /> */}
    </nav>
  );
}

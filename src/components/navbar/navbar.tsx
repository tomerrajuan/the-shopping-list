import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar">
      <button>
      <img src={process.env.PUBLIC_URL + "/menu.png"} alt="" height="25px"/>

      </button>
   <button>
      <img src={process.env.PUBLIC_URL + "/plus.png"} alt="" height="25px"/>
        
      </button>
    </nav>
  );
}

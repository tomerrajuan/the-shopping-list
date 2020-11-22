import React from "react";

export default function MenuButton() {
  return (
    <button>
      <img src={process.env.PUBLIC_URL + "/menu.png"} alt="" height="25px" />
    </button>
  );
}

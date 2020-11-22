import React from "react";

export default function AddButton() {
  return (
    <button>
      <img src={process.env.PUBLIC_URL + "/plus.png"} alt="" height="25px" />
    </button>
  );
}

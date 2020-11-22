import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

export default function AddButton() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        <img src={process.env.PUBLIC_URL + "/plus.png"} alt="" height="35px" />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">New list</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

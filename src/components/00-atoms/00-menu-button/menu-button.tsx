import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";

export default function MenuButton() {
  return (
    <DropdownButton id="dropdown-basic-button" title="Menu">
      <Dropdown.Item href="#/action-1">New list</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Login</Dropdown.Item>
      <Dropdown.Item href="#/action-3">My lists</Dropdown.Item>
      <Dropdown.Item href="#/action-4">Share list</Dropdown.Item>
      <Dropdown.Item href="#/action-5">Logout</Dropdown.Item>
    </DropdownButton>
  );
}

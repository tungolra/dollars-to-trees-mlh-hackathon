import React from "react";
import { Navbar } from "react-bootstrap";

export default function Footer() {
  return (
    <Navbar
      bg="success"
      variant="dark"
      style={{
        justifyContent: "center",
        height: "50px",
        margin: "0",
        opacity: "0.5",
      }}
    >
      <Navbar.Text style={{fontWeight: "bold" }}>Created by Ralph Tungol</Navbar.Text>
    </Navbar>
  );
}

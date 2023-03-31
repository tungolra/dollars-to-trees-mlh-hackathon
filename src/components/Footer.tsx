import React from "react";
import { Navbar } from "react-bootstrap";

export default function Footer() {
  return (
    <Navbar
      bg="success"
      variant="dark"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100px",
        margin: "0",
        opacity: "0.5",
      }}
    >
      <Navbar.Text style={{ fontWeight: "bold" }}>
        <a href="https://ralphtungol.vercel.app/" target="_blank">
          
        Created by Ralph Tungol
        </a>
      </Navbar.Text>
      <Navbar.Text style={{ fontWeight: "bold" }}>
        Powered By: React, Vercel, and{" "}
        <a href="https://www.climatiq.io/docs" target="_blank"> Climatiq API</a>
      </Navbar.Text>
    </Navbar>
  );
}

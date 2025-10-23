import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav style={{ background: "#222", padding: "12px 20px", color: "#fff" }}>
    <div style={{ fontWeight: "bold" }}>MyReactApp</div>
    <div style={{ display: "flex", gap: "16px" }}>
      <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>Home</Link>
      <Link to="/about" style={{ color: "#fff", textDecoration: "none" }}>About</Link>
      <Link to="/contact" style={{ color: "#fff", textDecoration: "none" }}>Contact</Link>
      <Link to="/services" style={{ color: "#fff", textDecoration: "none" }}>Services</Link>
      <Link to="/user" style={{ color: "#fff", textDecoration: "none" }}>User</Link>
    </div>
  </nav>
);

export default Navbar;

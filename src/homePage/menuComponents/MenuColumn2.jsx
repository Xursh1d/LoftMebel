import React from "react";
import { Link } from "react-router-dom";
export default function MenuColumn2({ phone, delivery }) {
  return (
    <div className="menuColumn2">
      <a href="tel:+998911705909">
        <img src={phone} style={{ width: 17 }} />
        +99894 133 77 66
      </a>
      <Link to="/">
        <img src={delivery} alt="" />
        Delivery
      </Link>
    </div>
  );
}

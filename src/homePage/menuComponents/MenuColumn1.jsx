import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineHome } from "react-icons/hi";
import { MdAlternateEmail } from "react-icons/md";
import { IoInformationSharp } from "react-icons/io5";
import { IconContext } from "react-icons/lib";
export default function MenuColumn1() {
  return (
    <div className="menuColumn1">
      <IconContext.Provider value>
        <Link to="/">
          {" "}
          <HiOutlineHome className="homeIcon" /> Home
        </Link>
        <Link to="/about">
          <IoInformationSharp className="aboutIcon" /> About Us
        </Link>
        <Link to="/contact">
          <MdAlternateEmail className="contactsIcon" /> Contacts
        </Link>
      </IconContext.Provider>
    </div>
  );
}

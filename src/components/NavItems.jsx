"use client";
import React from "react";
import { headerLinks } from "../constants/links";
import useMediaQuery from "../hooks/UseMediaQuery";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types"; // Import PropTypes for props validation

const NavItems = ({ setOpen }) => {
  const pathname = useParams(); // useParams returns an object, not the pathname. Adjust this if needed.
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <ul className="flex md:flex-between w-full flex-col items-start gap-5 md:flex-row">
      {headerLinks.map((link) => {
        const isActive = pathname?.route === link.route; // Adjusting based on useParams output

        return (
          <li
            key={link.route}
            className={`${
              isActive &&
              "text-[#915eff] underline underline-offset-8 decoration-2 decoration-white"
            } flex-center p-medium-16 whitespace-nowrap hover:underline underline-offset-8 decoration-2`}
          >
            {isDesktop ? (
              <Link to={link.route}>{link.label}</Link>
            ) : (
              <Link to={link.route} onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            )}
          </li>
        );
      })}
    </ul>
  );
};

// Add PropTypes for props validation
NavItems.propTypes = {
  setOpen: PropTypes.func.isRequired, // Validate that setOpen is a function and required
};

export default NavItems;

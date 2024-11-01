import React from "react";
import nameLogo from "../assets/nameLogo.png";
import { FaCode, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          <img
            src={nameLogo}
            alt="Logo"
            className="mx-2"
            width={50}
            height={33}
          />
        </a>
      </div>

      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/sagargulla/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="text-green-300" />
        </a>
        <a
          href="https://x.com/Sagar_Gulla"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X"
        >
          <FaSquareXTwitter className="text-green-300" />
        </a>
        <a
          href="https://github.com/sagarDevHub"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub className="text-green-300" />
        </a>
        <a
          href="https://leetcode.com/u/ogsagar/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LeetCode"
        >
          <FaCode className="text-green-300" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

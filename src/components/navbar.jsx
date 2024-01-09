import logo from "/patadoc_icon.jpg";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import Auth from "./auth";
import NavLink from "./navlinks";
import { IoMenu, IoClose } from "react-icons/io5";

const navLinks = [
  { title: "Home", path: "#about" },
  { title: "Services", path: "#about" },
  { title: "Specialist", path: "#about" },
  { title: "Review", path: "#about" },
  { title: "About", path: "#about" },
  { title: "Login", path: "#login" },
];

const NavBar = () => {
  const [showModal, setShowModal] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);

  const handleModalClose = () => {
    setShowModal(false);
  };

  const toggleMobileNav = () => {
    setShowMobileNav(!showMobileNav);
  };

  const closeMobileNav = () => {
    setShowMobileNav(false);
  };

  return (
    <>
      <div className="bg-white">
        {/* Main Menu */}
        <div
          className={` fixed bg-[#ecf0f1] w-[100vw] h-screen text-white flex flex-col justify-center items-center text-[20px] z-20 tracking-[1px] gap-2 md:hidden overflow-hidden origin-left duration-500 ${
            showMobileNav ? "block" : "hidden"
          }`}
        >
          {/* Close button in mobile navbar */}
          <div className=" text-black fixed top-[.2rem] right-[1.5rem] text-[2.5rem] cursor-pointer mr-2 mt-2">
            <IoClose onClick={closeMobileNav} />
          </div>

          <div className="menu  md:w-auto" id="navbar">
            <ul className="flex  flex-col items-start p-4 md:p-0 md:flex-row md:space-x-8 mt-0 ">
              {navLinks.map((link, index) => (
                <li>
                  <NavLink href={link.path} title={link.title}></NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="bg-light flex justify-between items-center px-8 py-4 ">
          {showModal && <Auth onClose={handleModalClose} />}
          <div className="flex gap-4 w-[4rem] h-[3rem] justify-between items-center relative">
            <img src={logo} alt="logo" />
            <p className="text-3xl text-black">PataDoc</p>
          </div>

          {/* Menu and Close icons */}
          <div className="absolute top-[0.9rem] right-[2rem] text-[2.5rem] cursor-pointer md:hidden">
            {showMobileNav ? (
              <IoClose onClick={closeMobileNav} />
            ) : (
              <IoMenu onClick={toggleMobileNav} />
            )}
          </div>
          <div className="flex gap-8 items-center justify-between  ">
            <div className="menu  md:w-auto" id="navbar">
              <ul className="hidden md:flex justify-between items-center gap-8 font-s  p-4 md:p-0 md:flex-row md:space-x-4 mt-0">
                {navLinks.map((link, index) => (
                  <li>
                    <NavLink href={link.path} title={link.title}></NavLink>
                  </li>
                ))}
              </ul>
            </div>
            {/*  */}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;

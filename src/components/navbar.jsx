import logo from "/patadoc_icon.jpg";
import Button from "./button";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import Auth from "./auth";
// import ReportIssueButton from "./ReportIssueButton";
import { IoMenu, IoClose } from "react-icons/io5";

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
    <div className="bg-green-500">
      {/* Main Menu */}
      <div
        className={` fixed bg-[#587575] w-[100vw] h-screen text-white flex flex-col justify-center items-center text-[20px] z-20 tracking-[1px] gap-2 md:hidden overflow-hidden origin-left duration-500 ${
          showMobileNav ? "block" : "hidden"
        }`}
      >
        {/* Close button in mobile navbar */}
        <div className=" text-white fixed top-[.2rem] right-[1.5rem] text-[2.5rem] cursor-pointer mr-2 mt-2">
          <IoClose onClick={closeMobileNav} />
        </div>
        <Link
          to="/home"
          className="mb-4 hover:bg-[green] rounded-md w-auto p-2 duration-500 hover:-translate-y-1"
        >
          Home
        </Link>
        <Link
          to="/home"
          className="mb-4 hover:bg-[green] rounded-md w-auto p-2 duration-500 hover:-translate-y-1"
        >
          Services
        </Link>
        <Link
          to="/home"
          className="mb-4 hover:bg-[green] rounded-md w-auto p-2 duration-500 hover:-translate-y-1"
        >
          Specialists
        </Link>
        <Link
          to="/home"
          className="mb-4 hover:bg-[green] rounded-md w-auto p-2 duration-500 hover:-translate-y-1"
        >
          Review
        </Link>
        <Link
          to="/about"
          className="mb-4 hover:bg-[green] rounded-md w-auto p-2 duration-500 hover:-translate-y-1"
        >
          About
        </Link>
        <button
          onClick={() => setShowModal(true)}
          className="mb-4 hover:bg-[green] rounded-md w-auto p-2 duration-500 hover:-translate-y-1"
        >
          Sign In
        </button>
        {/* <ReportIssueButton /> */}
      </div>
      <div className="bg-light flex justify-between items-center px-8 py-4 ">
        {showModal && <Auth onClose={handleModalClose} />}
        <div className="w-2/5 flex gap-4 w-[5rem] h-[3rem] justify-between items-center relative">
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
          <div className="hidden md:flex justify-between  items-center gap-8 font-bold ">
            <Link
              to="/home"
              className="flex cursor-pointer hover:bg-[#becabe] rounded-md w-auto p-1 duration-500 hover:-translate-y-1"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="flex cursor-pointer hover:bg-[#becabe] rounded-md w-auto p-1 duration-500 hover:-translate-y-1"
            >
              Services
            </Link>
            <Link
              to="/about"
              className="flex cursor-pointer hover:bg-[#becabe] rounded-md w-auto p-1 duration-500 hover:-translate-y-1"
            >
              Specialists
            </Link>
            <Link
              to="/about"
              className="flex cursor-pointer hover:bg-[#becabe] rounded-md w-auto p-1 duration-500 hover:-translate-y-1"
            >
              Review
            </Link>
            <Link
              to="/about"
              className="flex cursor-pointer hover:bg-[#becabe] rounded-md w-auto p-1 duration-500 hover:-translate-y-1"
            >
              About
            </Link>
            <button
              onClick={() => setShowModal(true)}
              className=" flex  hover:bg-[#becabe] rounded-md w-auto p-1 duration-500 hover:-translate-y-1 cursor-pointer "
            >
              Sign In
            </button>

            {/* <ReportIssueButton /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
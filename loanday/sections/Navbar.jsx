"use client";

import DesktopNavbar from "@/components/DesktopNavbar";
import MobileNavbar from "@/components/MobileNavbar";
import TopHeader from "@/components/TopHeader";

import React from "react";

const Navbar = () => {
  return (
    <div className="w-full bg-white">
      <div className="hidden sm:block">
        <TopHeader />
        <DesktopNavbar />
      </div>
      <div className="block sm:hidden">
        <MobileNavbar />
      </div>
    </div>
  );
};

export default Navbar;

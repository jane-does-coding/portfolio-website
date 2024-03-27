"use client";
import React from "react";
import Container from "../Container";
import Logo from "./Logo";
import UserMenu from "./UserMenu";
import { User } from "@prisma/client";

interface NavbarProps {
  currentUser?: User | null;
}

const Navbar = ({ currentUser }: NavbarProps) => {
  return (
    <nav className="fixed w-fit left-[50%] top-2 rounded-md translate-x-[-50%] bg-neutral-800 z-10">
      <UserMenu />
    </nav>
  );
};

export default Navbar;

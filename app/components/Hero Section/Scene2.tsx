"use client";
import React from "react";
import Cursor from "./Cursor";
import { useState } from "react";
import { Content } from "../Content/Content";
import Image from "next/image";
import Parallax from "../ParallaxScroll/Parallax";

export default function Scene2() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="h-[100vh] flex flex-col items-center justify-center">
      <h1
        onMouseOver={() => {
          setIsActive(true);
        }}
        onMouseLeave={() => {
          setIsActive(false);
        }}
        className="text-[4.5vw] max-w-[90vw] h-fit mt-[35vh] text-center text-white p-2 mb-18 flex items-center justify-center"
      >
        The quick brown fox jumps over the lazy dog
      </h1>
      <Cursor isActive={isActive} />
    </div>
  );
}

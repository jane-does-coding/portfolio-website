"use client";
import React from "react";
import Cursor from "./Cursor";
import { useState } from "react";

export default function Scene2() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="h-[100vh] flex items-center justify-center">
      <h1
        onMouseOver={() => {
          setIsActive(true);
        }}
        onMouseLeave={() => {
          setIsActive(false);
        }}
        className="text-[4.5vw] max-w-[90vw] text-center text-white p-2"
      >
        The quick brown fox jumps over the lazy dog
      </h1>
      <Cursor isActive={isActive} />
    </div>
  );
}

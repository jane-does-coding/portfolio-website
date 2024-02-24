"use client";

import { IconType } from "react-icons/lib";

interface ButtonProps {
  label: string;
  rounded?: boolean;
  wave?: boolean;
  outline?: boolean;
  small?: boolean;
  beforeIcon?: IconType;
  afterIcon?: IconType;
}

const Button = ({
  beforeIcon: BeforeIcon,
  afterIcon: AfterIcon,
  label,
  rounded,
  wave,
  small,
  outline,
}: ButtonProps) => {
  return (
    <button
      className={`bg-neutral-900 flex flex-row rounded-md items-center justify-center relative hover:opacity-90 transition 
      ${small ? "p-2 text-sm" : "p-3"}
      ${
        outline
          ? "bg-transparent border-2 border-neutral-900 text-black font-semibold hover:bg-neutral-300"
          : "border-none text-white"
      }
      ${wave ? "rounded-sm rounded-tl-[3rem] rounded-br-[3rem]" : ""}
      ${rounded ? "rounded-[20rem]" : ""}
      `}
    >
      {BeforeIcon && (
        <span className="absolute top-[50%] translate-y-[-50%] left-4 md:left-6">
          <BeforeIcon size={26} />
        </span>
      )}
      {label}
      {AfterIcon && (
        <span className="absolute top-[50%] translate-y-[-50%] right-4 md:right-6">
          <AfterIcon size={26} />
        </span>
      )}
    </button>
  );
};

export default Button;

"use client";
import Image from "next/image";
import { useState } from "react";

export default function Hamburger() {
  const [open, setOpen] = useState<boolean>(false);

  function handleOpen() {
    setOpen((prev) => !prev);
  }

  return (
    <div className="md:hidden" onClick={handleOpen}>
      {!open ? (
        <Image
          src="/icons/hamburger.svg"
          width={20}
          height={16}
          alt="Hamburger"
        />
      ) : (
        <Image
          src="/icons/close.svg"
          width={19.69}
          height={16}
          alt="close icon"
        />
      )}
    </div>
  );
}

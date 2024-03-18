"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "./logo";

export default function Navbar() {
  const [open, setOpen] = useState<boolean>(false);

  function handleOpen() {
    setOpen((prev) => !prev);
  }

  return (
    // logo position need to fix
    <nav className="relative flex items-center justify-center gap-x-16 px-8 py-6 md:block lg:px-40">
      <div className="absolute left-8 top-8 md:hidden" onClick={handleOpen}>
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

      <div className="">
        <div className="flex items-center md:justify-between md:gap-14">
          <Link href="/">
            <Logo />
          </Link>
          <div className="hidden flex-col items-center gap-8 md:flex md:flex-row">
            <Link
              className="font-mono text-15 font-bold text-grey-dimmed"
              href="/about"
            >
              About
            </Link>
            <Link
              className="font-mono text-15 font-bold text-grey-dimmed"
              href="/location"
            >
              Location
            </Link>
            <Link
              className="font-mono text-15 font-bold text-grey-dimmed"
              href="/career"
            >
              Careers
            </Link>
          </div>

          <Link className="hidden md:ml-auto md:block" href="/career">
            <button className="bg-yellow-dark px-9 py-3 font-mono text-15 font-bold text-grey-snow">
              Get Scootin
            </button>
          </Link>
        </div>
      </div>

      {/* overlay nav */}
      <div
        className={`${open ? "fixed" : "hidden"} top-[77px] h-full w-full bg-grey-darker/70`}
      >
        <div className="grid h-full w-2/3 gap-80 bg-grey-darker pb-8 pl-8 pt-16">
          <div className="flex flex-col gap-6">
            <Link
              onClick={handleOpen}
              className="font-mono text-15 font-bold text-grey-light"
              href="/about"
            >
              About
            </Link>
            <Link
              onClick={handleOpen}
              className="font-mono text-15 font-bold text-grey-light"
              href="/location"
            >
              Location
            </Link>
            <Link
              onClick={handleOpen}
              className="font-mono text-15 font-bold text-grey-light"
              href="/career"
            >
              Careers
            </Link>
          </div>

          <Link className="" onClick={handleOpen} href="/career">
            <button className="bg-yellow-dark px-10 py-3 font-mono text-15 font-bold text-grey-snow">
              Get Scootin
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

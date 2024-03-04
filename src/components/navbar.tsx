import React from "react";
import Link from "next/link";
import Logo from "./logo";
import Hamburger from "./hamburger";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between gap-x-16 px-8 py-6">
      <Hamburger />
      <div className="flex items-center gap-x-14">
        <Link href="/">
          <Logo />
        </Link>
        <div className="hidden gap-8 md:flex">
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
      </div>
      <Link className="hidden md:block" href="/career">
        <button className="bg-yellow-dark px-9 py-3 font-mono text-15 font-bold text-grey-snow">
          Get Scootin
        </button>
      </Link>
    </nav>
  );
}

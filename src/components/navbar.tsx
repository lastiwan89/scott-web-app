import React from "react";
import Link from "next/link";
import Logo from "./logo";
import Hamburger from "./hamburger";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-start gap-x-16 px-8 py-6">
      <Hamburger />
      <Link href="/">
        <Logo />
      </Link>
      <div className="hidden md:flex">
        <Link href="/about">About</Link>
        <Link href="/location">Location</Link>
        <Link href="/career">Careers</Link>
      </div>
      <Link className="hidden" href="/career">
        <button>Get Scootin</button>
      </Link>
    </nav>
  );
}

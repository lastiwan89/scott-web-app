import Image from "next/image";
import React from "react";

export default function Location() {
  return (
    <div>
      <section className="career-hero flex items-center justify-center py-16 md:justify-start md:px-24 md:py-24">
        <h2 className="text-center font-mono text-40 font-bold text-grey-snow md:text-start">
          Locations
        </h2>
      </section>
      <section className="flex flex-col items-center px-8">
        <div className="flex items-center pt-14 md:py-36">
          <Image
            className="md:hidden"
            src="/images/world-map-mobile.png"
            width={311}
            height={152}
            alt="world map"
          />
          <Image
            className="hidden md:block lg:hidden"
            src="/images/world-map-tablet.png"
            width={311}
            height={152}
            alt="world map"
          />
          <Image
            className="hidden lg:block"
            src="/images/world-map-desktop.png"
            width={311}
            height={152}
            alt="world map"
          />
        </div>

        {/* i hide this for moment */}
        <div className="flex flex-col gap-4 px-8 py-8 md:hidden">
          <button className="bg-yellow-dark/40 px-24 py-5 font-mono text-24 font-bold text-grey-dark">
            New York
          </button>
          <button className="bg-yellow-dark/40 px-24 py-5 font-mono text-24 font-bold text-grey-dark">
            London
          </button>
          <button className="bg-yellow-dark/40 px-24 py-5 font-mono text-24 font-bold text-grey-dark">
            Jakarta
          </button>
          <button className="bg-yellow-dark/40 px-24 py-5 font-mono text-24 font-bold text-grey-dark">
            Yokohama
          </button>
        </div>
      </section>

      {/* i'm sorry i use padding in 'Your City' text to get new line look */}
      <section className="flex flex-col items-center gap-8 px-8 pb-14 pt-8 md:px-24 md:pb-28">
        <h4 className="text-center font-mono text-32 font-bold text-grey-dark md:px-10 md:text-48">
          Your City Not Listed?
        </h4>
        <p className="text-center font-sans text-15 font-normal text-grey-dimmed">
          If you’d like to see Scoot in your hometown, be sure to let us know.
          We track requests and plan launches based on demand. Feel free to
          message us by clicking the link or messaging us on social.
        </p>
        <div>
          <button className="bg-yellow-dark px-12 py-3 font-mono text-15 font-bold text-grey-snow">
            Message Us
          </button>
        </div>
      </section>
    </div>
  );
}

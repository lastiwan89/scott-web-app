import Image from "next/image";
import React from "react";

export default function Careers() {
  return (
    <div>
      <section className="career-hero grid place-content-center py-16">
        <h2 className="text-center font-mono text-40 font-bold text-grey-snow">
          Careers
        </h2>
      </section>

      <section className="flex flex-col items-center gap-14 py-16">
        <div>
          <Image
            className="rounded-full"
            src="/images/join-us.jpg"
            width={311}
            height={311}
            alt="join us images"
          />
        </div>

        <div className="flex flex-col gap-8 px-8">
          <h4 className="text-center font-mono text-32 font-bold text-grey-dark">
            Care to join our mission?
          </h4>
          <p className="text-center font-sans text-15 font-normal text-grey-dimmed">
            We’re always looking for ambitious individuals to help us on our
            journey. If you’re passionate about our mission to provide clean,
            accessible transport to improve urban living we want to hear from
            you!
          </p>
        </div>
      </section>
    </div>
  );
}

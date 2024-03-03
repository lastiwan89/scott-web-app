import Image from "next/image";
import React from "react";
import { ABOUT_VALUES, CAREER_JOBS } from "@/constant";

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

        <div className="flex flex-col items-center gap-8 px-8">
          <h4 className="text-center font-mono text-32 font-bold text-grey-dark">
            Care to join our mission?
          </h4>
          <p className="text-center font-sans text-15 font-normal text-grey-dimmed">
            We’re always looking for ambitious individuals to help us on our
            journey. If you’re passionate about our mission to provide clean,
            accessible transport to improve urban living we want to hear from
            you!
          </p>
          <div>
            <button className="bg-yellow-dark px-12 py-3 font-mono text-15 font-bold text-grey-snow">
              Say Hello
            </button>
          </div>
        </div>
      </section>

      <section className="px-8 py-9">
        <div>
          <h4 className="text-center font-mono text-32 font-bold text-grey-dark">
            Why join us?
          </h4>
        </div>
        <div className="flex flex-col gap-14 py-16">
          {ABOUT_VALUES.map((item) => (
            <div key={item.id}>
              <div className="flex flex-col items-center">
                <Image
                  className="rounded-full"
                  src={item.url}
                  width={240}
                  height={240}
                  alt={item.title}
                />
                <div className="-mt-12 mb-4 rounded-full bg-yellow-dark p-8">
                  <h4 className="font-mono text-24 font-bold text-grey-dark">
                    {item.id}
                  </h4>
                </div>
              </div>
              <div className="flex flex-col items-center gap-7">
                <h4 className="text-center font-mono text-24 font-bold text-grey-dark">
                  {item.title}
                </h4>
                <p className="text-center font-sans text-15 font-normal text-grey-dark">
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-4 px-8 pb-28 pt-6">
        {CAREER_JOBS.map((item) => (
          <div
            className="flex flex-col items-center gap-4 bg-grey-dark/25 p-8"
            key={item.id}
          >
            <div>
              <p className="text-center font-mono text-18 font-bold text-grey-dark">
                {item.job}
              </p>
              <p className="text-center font-sans text-15 font-normal text-grey-dark">
                {item.location}
              </p>
            </div>

            <button className="cursor-pointer bg-yellow-dark px-12 py-3 font-mono text-15 font-bold text-grey-snow">
              Apply
            </button>
          </div>
        ))}
      </section>
    </div>
  );
}

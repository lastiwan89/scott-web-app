import AboutFaqs from "@/components/faqs";
import { ABOUT_VALUES } from "@/constant";
import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <div>
      <section className="about-hero flex items-center py-16 md:px-24 md:py-24">
        <h2 className="text-center font-mono text-40 font-bold text-grey-snow md:text-start md:text-56">
          About
        </h2>
      </section>
      {/* section 2 */}

      <section className="flex flex-col items-center gap-32 px-8 pb-14 pt-14 md:px-24 md:pt-36">
        <div className="flex flex-col items-center gap-14">
          <div className="flex items-center justify-center">
            <Image
              className="rounded-full"
              src="/images/digital-era.jpg"
              width={311}
              height={311}
              alt="digital era"
            />
          </div>
          <div className="flex flex-col gap-8">
            <h4 className="text-center font-mono text-32 font-bold text-grey-dark md:text-48">
              Mobility for the digital era
            </h4>
            <p className="text-center font-sans text-15 font-normal text-grey-dimmed">
              Getting around should be simple (and even fun!) for everyone. We
              embrace technology to provide low cost, smart access to scooters
              at your fingertips.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-14">
          <div className="flex items-center justify-center">
            <Image
              className="rounded-full"
              src="/images/better-living.jpg"
              width={311}
              height={311}
              alt="better living"
            />
          </div>
          <div className="flex flex-col gap-8">
            <h4 className="px-8 text-center font-mono text-32 font-bold text-grey-dark md:text-48">
              Better urban living
            </h4>
            <p className="text-center font-sans text-15 font-normal text-grey-dimmed">
              We’re helping connect cities and bring people closer together. Our
              scooters are also fully-electric and we offset the minimal carbon
              footprint for each ride.
            </p>
          </div>
        </div>
      </section>

      {/* section 3 */}
      <section className="mt-6 px-8 md:px-24">
        <div>
          <h3 className="text-center font-mono text-32 font-bold text-grey-dark md:text-48">
            Our values
          </h3>
        </div>

        <div className="flex flex-col gap-14 py-16">
          {ABOUT_VALUES.map((item) => (
            <div
              className="flex flex-col items-center gap-4 md:gap-8"
              key={item.id}
            >
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
                <p className="text-center font-sans text-15 font-normal text-grey-dimmed">
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* faqs section */}
      <section className="px-8 pb-24 pt-14">
        <AboutFaqs />
      </section>
    </div>
  );
}

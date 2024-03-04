import Button from "@/components/button";
import { HOME_APP, HOME_BENEFIT } from "@/constant";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* home hero section */}
      <section className="home-hero flex flex-col items-center px-8 pb-32 pt-28 md:px-24">
        <h3 className="text-center font-mono text-40 font-bold text-grey-snow md:text-56">
          Scooter sharing made simple
        </h3>
        <div>
          <p className="mt-6 text-center font-sans text-15 font-normal text-grey-snow">
            Scoot takes the hassle out of urban mobility. Our bikes are placed
            in convenient locations in each of our cities. Use our app to locate
            the nearest bike, unlock it with a tap, and you’re away!
          </p>
          <div className="mt-8 flex justify-center">
            <Button />
          </div>
        </div>
      </section>

      {/* home how to section */}
      <section className="grid px-8 py-28 md:px-24">
        {HOME_APP.map((item) => (
          <div
            className="mb-12 flex flex-col items-center gap-6 md:flex-row md:gap-20"
            key={item.id}
          >
            <div>
              <Image
                className="w-14 md:w-56"
                src={item.url}
                width={96}
                height={96}
                alt={item.title}
              />
            </div>
            <div className="flex flex-col gap-6">
              <h4 className="text-center font-mono text-20 font-bold text-grey-dark md:text-start md:text-24">
                {item.title}
              </h4>
              <p className="text-center font-sans text-15 font-normal text-grey-dimmed md:text-start">
                {item.body}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* ease to use section */}
      <section className="px-8 pb-24 pt-2 md:px-24">
        {/* this components need to create without external sources */}
        {HOME_BENEFIT.map((item) => (
          <div className="flex flex-col items-center gap-8 py-8" key={item.id}>
            <Image
              className="rounded-full"
              src={item.url}
              width={311}
              height={311}
              alt={item.title}
            />
            <div className="mt-8 flex flex-col items-center gap-8">
              <h4 className="text-center font-mono text-32 font-bold">
                {item.title}
              </h4>
              <p className="text-center font-sans text-15 font-normal">
                {item.body}
              </p>
              <button className="bg-yellow-dark px-10 py-4 font-mono text-15 font-bold text-grey-snow">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}

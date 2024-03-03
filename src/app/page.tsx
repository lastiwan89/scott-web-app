import Button from "@/components/button";
import { HOME_APP, HOME_BENEFIT } from "@/constant";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* home hero section */}
      <section className="home-hero px-8 pb-32 pt-28">
        <h3 className="text-center font-mono text-40 font-bold text-grey-snow">
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
      <section className="grid px-8 py-28">
        {HOME_APP.map((item) => (
          <div className="mb-12 flex flex-col items-center gap-6" key={item.id}>
            <Image src={item.url} width={56} height={56} alt={item.title} />
            <h4 className="text-center font-mono text-20 font-bold">
              {item.title}
            </h4>
            <p className="text-center font-sans text-15 font-normal">
              {item.body}
            </p>
          </div>
        ))}
      </section>
      {/* ease to use section */}
      <section className="pb-24 pt-2">
        {HOME_BENEFIT.map((item) => (
          <div className="grid items-center gap-8 px-8 py-8" key={item.id}>
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

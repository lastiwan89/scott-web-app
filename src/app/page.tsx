import Button from "@/components/button";
import { HOME_APP } from "@/constant";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* home hero section */}
      <section className="home-hero flex flex-col items-center px-8 pb-32 pt-28 md:px-24 lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:items-start lg:justify-start lg:px-40 lg:py-40">
        <h3 className="text-center font-mono text-40 font-bold text-grey-snow md:text-56 lg:text-start">
          Scooter sharing made simple
        </h3>
        <div className="lg:row-start-2 lg:-mt-10 lg:ml-28">
          <p className="mt-6 text-center font-sans text-15 font-normal text-grey-snow lg:text-start">
            Scoot takes the hassle out of urban mobility. Our bikes are placed
            in convenient locations in each of our cities. Use our app to locate
            the nearest bike, unlock it with a tap, and you’re away!
          </p>
          <div className="mt-8 flex justify-center lg:justify-start">
            <Button />
          </div>
        </div>
      </section>

      {/* home how to section */}
      <section className="grid px-8 py-28 md:px-24 lg:grid-cols-3 lg:gap-8 lg:px-40">
        {HOME_APP.map((item) => (
          <div
            className="mb-12 flex flex-col items-center gap-6 md:flex-row md:gap-20 lg:flex-col lg:items-start lg:gap-10"
            key={item.id}
          >
            <div>
              <Image
                className="w-14 md:w-56 lg:w-full"
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
      <section className="flex flex-col gap-8 px-8 pb-24 pt-2 md:px-24 lg:gap-40 lg:px-40">
        {/* source fixed */}
        <div className="flex flex-col items-center gap-8 py-8 lg:grid lg:grid-cols-2 lg:place-content-center lg:gap-56">
          <div className="lg:order-last lg:place-self-end">
            <Image
              className="rounded-full"
              src="/images/telemetry.jpg"
              width={311}
              height={311}
              alt="telemetry"
            />
          </div>

          <div className="mt-8 flex flex-col items-center gap-8 lg:mt-0 lg:items-start lg:gap-6">
            <h4 className="text-center font-mono text-32 font-bold lg:text-start lg:text-48">
              Easy to use riding telemetry
            </h4>
            <p className="text-center font-sans text-15 font-normal text-grey-dimmed lg:text-start">
              The Scoot app is available with riding telemetry. This means it
              can show you your average speed, how long you have been using the
              scooter, your traveling distance, and many more things all in an
              easy to use app.
            </p>
            <button className="bg-yellow-dark px-10 py-4 font-mono text-15 font-bold text-grey-snow lg:mt-4">
              Learn More
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center gap-8 py-8 lg:grid lg:grid-cols-2">
          <div>
            <Image
              className="rounded-full"
              src="/images/near-you.jpg"
              width={311}
              height={311}
              alt="near you"
            />
          </div>

          <div className="mt-8 flex flex-col items-center gap-8 lg:mt-0 lg:items-start lg:gap-6">
            <h4 className="text-center font-mono text-32 font-bold lg:text-start lg:text-48">
              Coming to a city near you
            </h4>
            <p className="text-center font-sans text-15 font-normal text-grey-dimmed lg:text-start">
              Scoot is available in 4 major cities so far. We’re expanding
              rapidly, so be sure to let us know if you want to see us in your
              hometown. We’re aiming to let our scooters loose on 23 cities over
              the coming year.
            </p>
            <button className="bg-yellow-dark px-10 py-4 font-mono text-15 font-bold text-grey-snow lg:mt-4">
              Learn More
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center gap-8 py-8 lg:grid lg:grid-cols-2">
          <div className="lg:order-last lg:place-self-end">
            <Image
              className="rounded-full"
              src="/images/payments.jpg"
              width={311}
              height={311}
              alt="payments"
            />
          </div>

          <div className="mt-8 flex flex-col items-center gap-8 lg:mt-0 lg:items-start lg:gap-6">
            <h4 className="text-center font-mono text-32 font-bold lg:text-start lg:text-48">
              Zero hassle payments
            </h4>
            <p className="text-center font-sans text-15 font-normal text-grey-dimmed lg:text-start">
              Our payment is as easy as one two three. We accept most credit
              cards and debit cards. You can also link your PayPal account
              inside the app. Need to pay later? No worries! You can defer
              payment for up to a month.
            </p>
            <button className="bg-yellow-dark px-10 py-4 font-mono text-15 font-bold text-grey-snow lg:mt-4">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

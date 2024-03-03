import Image from "next/image";
import Link from "next/link";
import Logo from "./logo";

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col items-center gap-10 bg-grey-dark px-8 py-16">
        <div>
          <h1 className="text-center font-mono text-32 font-bold text-grey-snow">
            Sign up and Scoot off today
          </h1>
        </div>
        <div className="flex items-center gap-3">
          <Image
            src="/icons/app-store.svg"
            width={114}
            height={40}
            alt="app store"
          />
          <Image
            src="/icons/google-play.svg"
            width={130}
            height={40}
            alt="google play"
          />
        </div>
      </div>
      <div className="flex flex-col items-center gap-10 bg-grey-darker py-16">
        <div>
          <Logo type="footer" />
        </div>
        <div className="flex flex-col items-center gap-4 font-mono">
          <Link
            className="font-mono text-15 font-bold capitalize text-grey-dimmed"
            href="/about"
          >
            about
          </Link>
          <Link
            className="font-mono text-15 font-bold capitalize text-grey-dimmed"
            href="/location"
          >
            location
          </Link>
          <Link
            className="font-mono text-15 font-bold capitalize text-grey-dimmed"
            href="/career"
          >
            careers
          </Link>
        </div>
        <div className="mt-10 flex gap-6">
          <Image
            src="/icons/facebook.svg"
            width={24}
            height={24}
            alt="facebook icon"
          />
          <Image
            src="/icons/twitter.svg"
            width={24}
            height={24}
            alt="twitter icon"
          />
          <Image
            src="/icons/instagram.svg"
            width={24}
            height={24}
            alt="instagram icon"
          />
        </div>
      </div>
    </footer>
  );
}
import { bricolage_grotesque } from "@/lib/fonts";
import Image from "next/image";
import Link from "next/link";
import { RiGithubFill, RiTwitterFill } from "react-icons/ri";

export default function Footer() {
  return (
    <footer className={`${bricolage_grotesque} p-5`}>
      <section className="flex justify-between items-center max-sm:flex-col max-sm:gap-1">
        <div>
          <a
            href="/"
            className="text-lg max-sm:text-lg font-bold flex items-center"
          >
            <span>
              <Image
                src="/letter-s.png"
                alt="logo"
                height={21}
                width={21}
                className="rounded-xl max-sm:h-6 max-sm:w-6"
              />
            </span>
            <span className="ml-[-3px]">tealthLink</span>
          </a>
        </div>
        <div className="text-sm space-x-1">
          <span>Designed and Developed by</span>
          <Link
            href="https://x.com/TarunAwsom28989"
            target="_blank"
            className="underline text-orange-500 dark:text-orange-300"
          >
            Tarun
          </Link>
        </div>
        <div className="flex gap-2">
          <Link href="https://github.com/Tarun516/stealthlink" target="_blank">
            <RiGithubFill className="h-5 w-5 hover:fill-orange-500 dark:hover:fill-orange-300" />
          </Link>
          <Link href="https://x.com/TarunAwsom28989" target="_blank">
            <RiTwitterFill className="h-5 w-5 hover:fill-orange-500 dark:hover:fill-orange-300" />
          </Link>
        </div>
      </section>
    </footer>
  );
}

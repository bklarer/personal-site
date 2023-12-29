import { ModeToggle } from "@/components/ModeToggle";
import Link from "next/link";
import { Icons } from "./Icons";

const Header = () => {
  return (
    <header className="fixed top-0 z-40 w-full px-10 py-3">
      <div className="flex items-center text-xl font-extrabold">
        <div className="flex-1">
          <ul className="flex justify-between ">
            <li>
              <Link className="" href="/">
                HOME
              </Link>
            </li>
            <li>
              <Link href="/about">ABOUT</Link>
            </li>
            <li>
              <Link href="/portfolio">PORTFOLIO</Link>
            </li>
            <li>
              <Link href="/resume">RESUME</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-1 ml-auto items-center justify-end gap-4">
          <ModeToggle />
          <div className="flex gap-2">
            Github
            <Icons.github />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

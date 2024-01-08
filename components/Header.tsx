"use client";

import MobileMenu from "@/components/MobileMenu";
import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Icons } from "./Icons";

const Header = () => {
  const openGithub = () => {
    window.open("https://github.com/bklarer", "_blank");
  };

  return (
    <header className="fixed left-0 top-0 z-40 w-full px-5 md:px-10">
      <nav>
        <div className="py-3">
          <div className="hidden items-center text-xl font-extrabold md:flex">
            <div className="flex-2">
              <ul className="flex justify-between">
                <li>
                  <Link href="/">HOME</Link>
                </li>
                <li>
                  <Link href="/about">ABOUT</Link>
                </li>
                <li>
                  <Link href="/experience">EXPERIENCE</Link>
                </li>
                <li>
                  <Link href="/portfolio">PORTFOLIO</Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-1 items-center justify-end gap-4">
              <ModeToggle />
              <Button
                onClick={openGithub}
                variant="outline"
                className="flex gap-2"
              >
                Github
                <Icons.github />
              </Button>
            </div>
          </div>
          <div className="flex md:hidden items-center justify-between">
            <div className="flex items-center gap-8">
              <Button
                onClick={openGithub}
                variant="outline"
                className="flex gap-2"
              >
                Github
                <Icons.github />
              </Button>
            </div>
            <h1 className="font-extrabold text-center">Benjamin Klarer</h1>
            <div className="flex gap-2 items-center">
              <ModeToggle />
              <MobileMenu />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

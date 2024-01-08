"use client";

import { Icons } from "@/components/Icons";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import React from "react";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleClick = () => {
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="outline">
          <Icons.menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <ul className="flex flex-col gap-4 text-center text-[36px]">
          <li>
            <Link
              onClick={handleClick}
              className="hover:text-gray-500 duration-500"
              href="/"
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              onClick={handleClick}
              className="hover:text-gray-500 duration-500"
              href="/about"
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              onClick={handleClick}
              className="hover:text-gray-500 duration-500"
              href="/portfolio"
            >
              PORTFOLIO
            </Link>
          </li>
          <li>
            <Link
              onClick={handleClick}
              className="hover:text-gray-500 duration-500"
              href="/experience"
            >
              EXPERIENCE
            </Link>
          </li>
        </ul>
        <SheetFooter>
          <SheetClose asChild></SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import MobileNav from "./MobileNav";
import ThemeController from "./ThemeController";
import { RiCodeBoxFill } from "react-icons/ri";

function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScrolled = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScrolled);

    return () => {
      window.removeEventListener("scroll", handleScrolled);
    };
  });

  return (
    <header
      className={`z-10 sticky top-0 w-full border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-backgroud/60 border-b`}
    >
      <div className="container flex h-14 max-w-screen-2xl items-center md:px-36">
        <nav className="flex items-center space-x-4 lg:space-x-6">
          <Link
            aria-label="go to homepage"
            href={"/"}
            className={
              "lg:text-xl flex font-pinyon parisienne mr-6 space-x-2 items-center font-bold"
            }
          >
            <RiCodeBoxFill size={30} />
            <p className="text-xs">shirookami</p>
          </Link>
          <Link
            aria-label="go to work page"
            href={"/work"}
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary hidden sm:inline-block",
              pathname === "/work" ? "text-foreground" : "text-foreground/60"
            )}
          >
            Works
          </Link>
          <Link
            aria-label="writing page"
            href={"/writing"}
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary hidden sm:inline-block",
              pathname === "/writing" ? "text-foreground" : "text-foreground/60"
            )}
          >
            Writing
          </Link>
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <ThemeController />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}

export default Navbar;

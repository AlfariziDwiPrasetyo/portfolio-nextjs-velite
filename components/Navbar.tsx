"use client";
import React from "react";
import { Icons } from "./Icons";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import { usePathname } from "next/navigation";
import MobileNav from "./MobileNav";
import ThemeController from "./ThemeController";

function Navbar() {
  const pathname = usePathname();
  return (
    <header className="z-10 sticky top-0 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-backgroud/60 ">
      <div className="container flex h-14 max-w-screen-2xl items-center ">
        <nav className="flex items-center space-x-4 lg:space-x-6">
          <Link
            href={"/"}
            className="lg:text-xl font-pinyon mr-6 flex items-center font-bold"
          >
            Shirookami
          </Link>
          <Link
            href={"/work"}
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary hidden sm:inline-block",
              pathname === "/work" ? "text-foreground" : "text-foreground/60"
            )}
          >
            Works
          </Link>
          <Link
            href={"/posts"}
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary hidden sm:inline-block",
              pathname === "/posts" ? "text-foreground" : "text-foreground/60"
            )}
          >
            Posts
          </Link>
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <Link href={siteConfig.links.github} target="_blank">
            <div
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "w-10 px-0 hidden sm:inline-flex"
              )}
            >
              <Icons.gitHub className="h-4 w-4" />
              <span className="sr-only">Github</span>
            </div>
          </Link>
          <Link href={siteConfig.links.instagram} target="_blank">
            <div
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "w-10 px-0 hidden sm:inline-flex"
              )}
            >
              <Icons.instagram className="h-4 w-4" />
              <span className="sr-only">Instagram</span>
            </div>
          </Link>
          <ThemeController />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}

export default Navbar;

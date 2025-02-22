"use client";
import React from "react";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { LaptopMinimalIcon, Moon, Sun, SunIcon } from "lucide-react";
import { Button } from "./ui/button";

function ThemeController() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          aria-label="theme controller button"
          variant={"ghost"}
          className="w-10 px-0"
        >
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Theme Controller</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="flex flex-col gap-1" align="end">
        <DropdownMenuItem
          className="border-2 border-solid"
          onClick={() => setTheme("light")}
        >
          <SunIcon className="h-[1rem] w-[1rem] mr-2" /> Light
        </DropdownMenuItem>
        <DropdownMenuItem
          className="border-2 border-solid"
          onClick={() => setTheme("dark")}
        >
          <Moon className="h-[1rem] w-[1rem] mr-2" /> Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          className="border-2 border-solid"
          onClick={() => setTheme("system")}
        >
          <LaptopMinimalIcon className="h-[1rem] w-[1rem] mr-2" /> System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default ThemeController;

import React, { useState } from "react";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { useRouter } from "next/navigation";
import { MdArrowOutward } from "react-icons/md";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

function MobileNav() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          aria-label="dropdown button"
          variant={"outline"}
          className="w-10 px-0 sm:hidden"
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Dropdown menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align={"end"} className="space-y-3">
        <DropdownMenuItem
          onClick={() => router.push("/writing")}
          className="text-md flex items-center font-normal justify-between"
        >
          Writing
          <MdArrowOutward />
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={() => router.push("/work")}
          className="text-md flex items-center font-normal justify-between"
        >
          Work
          <MdArrowOutward />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default MobileNav;

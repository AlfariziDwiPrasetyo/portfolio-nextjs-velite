import React, { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

function MobileNav() {
  const [open, setOpen] = useState(false);
  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant={"outline"} className="w-10 px-0 sm:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toogle Theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align={"end"}
        className="p-4 space-y-5 flex flex-col"
      >
        <MobileLink
          href={"/writing"}
          className="text-md mr-6 flex items-center font-normal"
        >
          Writing
        </MobileLink>

        <MobileLink
          className="text-md mr-6 flex items-center font-normal"
          href={"/works"}
        >
          Work
        </MobileLink>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default MobileNav;

interface MobileLinkProps extends LinkProps {
  children: React.ReactNode;
  onOpenChange?: (open: boolean) => void;
  className: string;
}

function MobileLink({
  href,
  children,
  onOpenChange,
  className,
  ...props
}: MobileLinkProps) {
  const router = useRouter();
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString());
        onOpenChange?.(false);
      }}
      {...props}
      className={className}
    >
      {children}
    </Link>
  );
}

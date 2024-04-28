import React, { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";

function MobileNav() {
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant={"outline"} className="w-10 px-0 sm:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toogle Theme</span>
        </Button>
      </SheetTrigger>
      <SheetContent side={"right"}>
        <MobileLink href={"/"} className="space-y-4">
          <MobileLink
            href={"/"}
            className="text-md mr-6 flex items-center font-bold"
          >
            Shirookami
          </MobileLink>

          <MobileLink
            href={"/posts"}
            className="text-md mr-6 flex items-center font-normal"
          >
            Post
          </MobileLink>

          <MobileLink
            className="text-md mr-6 flex items-center font-normal"
            href={"/works"}
          >
            Work
          </MobileLink>
        </MobileLink>
      </SheetContent>
    </Sheet>
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

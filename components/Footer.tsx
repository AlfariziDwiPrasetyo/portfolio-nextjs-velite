import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <footer>
      <div className="mb-3 mt-14 flex flex-col text-muted-foreground text-xs items-center">
        <p className="mb-1">Built with ☕</p>
        <p>
          Licensed under
          <span className="underline">
            <Link href={"https://mit-license.org/"}> MIT License</Link>
          </span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;

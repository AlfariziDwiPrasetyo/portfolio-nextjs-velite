import type { Metadata } from "next";
import { Inter, Merriweather, Montserrat } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Provider from "@/components/Provider";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-sans" });
export const metadata: Metadata = {
  title: "Shirookami",
  description: "Information about me",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-pt-[3.5rem]" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          montserrat.variable
        )}
      >
        <Provider>
          <div className="relative flex min-h-dvh flex-col bg-background">
            <Navbar />
            <main className="flex-1 md:px-36">{children}</main>
          </div>
        </Provider>
      </body>
    </html>
  );
}

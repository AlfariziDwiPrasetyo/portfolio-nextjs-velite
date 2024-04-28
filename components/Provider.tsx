import { ThemeProvider } from "next-themes";
import React from "react";

function Provider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      enableSystem
      defaultTheme="system"
      disableTransitionOnChange
      attribute="class"
    >
      {children}
    </ThemeProvider>
  );
}

export default Provider;

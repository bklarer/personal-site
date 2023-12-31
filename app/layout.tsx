import Header from "@/components/Header";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Benjamin Klarer",
  description: "About Benjamin Klarer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ThemeProvider attribute="class" defaultTheme="dark">
        <Header />
        <body
          className={cn(
            inter.className,
            "bg-background mt-[100px] md:mt-16 px-10 max-w-[1200px] mx-auto"
          )}
        >
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}

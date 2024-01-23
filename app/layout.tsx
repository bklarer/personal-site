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
  icons: {
    icon: "/favicon.ico",
    // shortcut: "/favicon-16x16.png",
    // apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
  modal?: React.ReactNode;
  sheet?: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />

      <body
        className={cn(
          inter.className,
          "bg-background mt-[100px] md:mt-16 px-5 md:px-10"
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

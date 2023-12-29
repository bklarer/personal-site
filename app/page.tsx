"use client";

import Hero from "@/components/Hero";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero title={["BENJAMIN", "KLARER"]} split={true}>
        <TypeAnimation
          sequence={[
            1000,
            "JavaScript",
            1000,
            "JavaScript\nTypeScript",
            1000,
            "JavaScript\nTypeScript\nReact.js",
            1000,
            "JavaScript\nTypeScript\nReact.js\nNext.js",
            1000,
            "JavaScript\nTypeScript\nReact.js\nNext.js\nRuby",
            1000,
            "JavaScript\nTypeScript\nReact.js\nNext.js\nRuby\nRails",
            1000,
            "JavaScript\nTypeScript\nReact.js\nNext.js\nRuby\nRails\nMaterial UI",
            1000,
            "JavaScript\nTypeScript\nReact.js\nNext.js\nRuby\nRails\nMaterial UI\nTailwind CSS",
          ]}
          speed={50}
          style={{
            fontSize: "3em",
            whiteSpace: "pre-line",
            display: "block",
          }}
          repeat={0}
        />
      </Hero>
    </main>
  );
}

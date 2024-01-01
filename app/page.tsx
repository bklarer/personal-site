"use client";

import Hero from "@/components/Hero";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  // TODO: Clamp type text

  return (
    <div>
      <Hero title={["BENJAMIN", "KLARER"]} split={true}>
        <TypeAnimation
          className="mx-auto md:mx-0 w-fit responsive-typer whitespace-pre-line md:block"
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
          repeat={0}
        />
      </Hero>
    </div>
  );
}

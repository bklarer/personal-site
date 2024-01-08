import Hero from "@/components/Hero";
import HomeAnimation from "@/components/HomeAnimation";

export default function Home() {
  // TODO: Clamp type text

  return (
    <Hero title={["BENJAMIN", "KLARER"]} split={true}>
      <HomeAnimation />
    </Hero>
  );
}

import AboutCard from "@/components/AboutCard";
import Hero from "@/components/Hero";
import { Icons } from "@/components/Icons";
import Timeline from "@/components/Timeline";

const About = () => {
  return (
    <div>
      <Hero title={["ABOUT ME"]}>
        <Icons.arrowDownCircle
          width="100px"
          height="100px"
          className="hover:text-gray-500 hover:cursor-pointer mt-10"
        />
      </Hero>
      <AboutCard />
      <Timeline />
    </div>
  );
};

export default About;

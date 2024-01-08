import AboutSwiper from "@/components/AboutSwiper";

const AboutCard = () => {
  return (
    <div className="lg:flex lg:mt-[150px] mt-[50px] gap-10">
      <div className="lg:order-2 lg:flex-1 text-center md:mt-0 mb-4 lg:mb-0 grid place-content-center ">
        <p className="responsive-paragraph leading-[2.5]">
          Hi, I&apos;m Ben, a coding enthusiast with a deep love for family and
          a spirit of adventure. Born and raised in Phoenix, AZ, I ventured to
          Tucson at 18, embracing the diverse experiences and knowledge offered
          by the University of Arizona. After four years, I moved to Prescott,
          AZ, where I combine my passion for technology with the joys of family
          life. As an uncle and a hopeful future parent, I cherish the moments
          spent with my family, drawing inspiration from our shared adventures.
          In my work, I strive to infuse this blend of warmth, discovery, and
          technical skill, aiming to create impactful and meaningful technology
          solutions.
        </p>
      </div>
      <div className="lg:order-1 lg:w-[50%] lg:flex-1">
        <div className="overflow-hidden">
          <AboutSwiper />
        </div>
      </div>
    </div>
  );
};

export default AboutCard;

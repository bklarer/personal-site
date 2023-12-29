import React from "react";

interface HeroProps {
  children?: React.ReactNode;
  title?: string[];
  split?: boolean;
}

const Hero = ({ children, title, split }: HeroProps) => {
  return split ? (
    <div className="h-[90vh] w-full mt-[100px] md:mt-16 px-10">
      <div className="h-full flex justify-center w-full gap-20">
        {title && (
          <div className="flex-1 md:grid items-center text-[5vw] text-right hidden">
            <ul>
              {title.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
            </ul>
          </div>
        )}
        <div className="md:flex-1 md:grid md:items-center">{children}</div>
      </div>
    </div>
  ) : (
    <div className="h-[90vh] w-full mt-16 px-10">
      <div className="h-full grid place-items-center w-full gap-20">
        {children}
      </div>
    </div>
  );
};

export default Hero;

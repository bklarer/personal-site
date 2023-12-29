import React from "react";

interface HeroProps {
  children?: React.ReactNode;
  title: string[];
  split?: boolean;
}

const Hero = ({ children, title, split }: HeroProps) => {
  return split ? (
    <div className="h-[90vh] w-full mt-16px-10">
      <div className="h-full flex justify-center w-full gap-20">
        <div className="flex-1 grid items-center text-[7em] text-right">
          <ul>
            {title.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </div>
        <div className="flex-1 grid items-center">{children}</div>
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

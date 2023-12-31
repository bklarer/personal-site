import React from "react";

interface HeroProps {
  children?: React.ReactNode;
  title?: string[];
  split?: boolean;
}

const titleString = (title: string[]) => {
  let string = "";
  title.forEach((item, index) => {
    string += item;
    if (index !== title.length - 1) {
      string += "\n";
    }
  });
  return string;
};

const Hero = ({ children, title, split = false }: HeroProps) => {
  return split ? (
    <div className="h-[80vh] w-full">
      <div className="h-full flex justify-center w-full gap-20">
        {title && (
          <div className="flex-1 md:grid items-center text-right hidden">
            <h1 className="responsive-title whitespace-pre">
              {titleString(title)}
            </h1>
          </div>
        )}
        <div className="md:flex-1 md:grid md:items-center">{children}</div>
      </div>
    </div>
  ) : (
    <div className="h-[20vh] w-full lg:mt-[150px] mt-[50px]">
      <div className="h-full flex flex-col items-center w-full">
        {title && <h1 className="responsive-title">{titleString(title)}</h1>}
      </div>
    </div>
  );
};

export default Hero;

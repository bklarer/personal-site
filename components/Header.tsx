import { Icons } from "./Icons";

const Header = () => {
  return (
    <header className="fixed top-0 z-40 w-full px-10 py-3">
      <div className="flex text-white text-xl font-extrabold">
        <div className="flex-1">
          <ul className="flex justify-between ">
            <li>HOME</li>
            <li>ABOUT</li>
            <li>PORTFOLIO</li>
            <li>RESUME</li>
          </ul>
        </div>
        <div className="flex flex-1 ml-auto justify-end gap-2">
          Github
          <Icons.github />
        </div>
      </div>
    </header>
  );
};

export default Header;

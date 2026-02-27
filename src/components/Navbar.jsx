import { IoMenu } from "react-icons/io5";
import logo from "../assets/logo.svg";

export const NavBar = () => {
  return (
    <header className="sticky top-0 animate__animated animate__backInDown z-3">
      <nav className="bg-white">
        <ul className="grid grid-cols-[1fr_auto_1fr] items-center h-14 px-2">
          <li className="justify-self-start text-4xl text-(--cor-verde)">
            <IoMenu />
          </li>
          <li className="col-start-2 justify-self-center">
            <img className="w-37.5 " src={logo} alt="" />
          </li>
        </ul>
      </nav>
    </header>
  );
};
